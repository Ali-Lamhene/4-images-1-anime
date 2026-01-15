import { useEffect, useState } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

import { COLORS } from '../constants/colors';
import { RANKS } from '../constants/game';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import RankBadge from './RankBadge';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function RankUpPopup({ level, onClose }) {
    const { t } = useTranslation();
    const { playSound } = useSound();
    const [showConfetti, setShowConfetti] = useState(false);
    const opacityAnim = useState(new Animated.Value(0))[0];
    const slideAnim = useState(new Animated.Value(10))[0];

    const rank = RANKS.find(r => r.level === level) || RANKS[0];

    useEffect(() => {
        playSound('levelup');
        Animated.parallel([
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1000,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }),
        ]).start(() => {
            setShowConfetti(true);
        });
    }, []);

    return (
        <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
            <Animated.View
                style={[
                    styles.popupContainer,
                    { transform: [{ translateY: slideAnim }] },
                ]}
            >
                <Text style={styles.rankLabel}>{t('new_rank')}</Text>

                <RankBadge level={level} size={100} style={styles.badge} />

                <Text style={styles.rankName}>{t(`rank_${rank.name.toLowerCase()}`)}</Text>

                <View style={styles.divider} />

                <Text style={styles.levelText}>{t('level_reached', { level })}</Text>

                <Text style={styles.subtitle}>
                    {t('rank_up_sub')}
                </Text>

                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onClose}
                    activeOpacity={0.8}
                >
                    <Text style={styles.closeButtonText}>{t('acknowledge')}</Text>
                </TouchableOpacity>
            </Animated.View>

            {showConfetti && (
                <View style={StyleSheet.absoluteFill} pointerEvents="none">
                    <ConfettiCannon
                        count={200}
                        origin={{ x: SCREEN_WIDTH / 2, y: -20 }}
                        fadeOut={true}
                        fallSpeed={3000}
                        colors={[COLORS.accent, '#A084FF', '#D4C7FF', COLORS.white, '#8B8B9E']}
                    />
                </View>
            )}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 15, 20, 0.98)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    popupContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: 2,
        padding: 40,
        width: '85%',
        maxWidth: 340,
        alignItems: 'center',
    },
    rankLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: COLORS.accent,
        letterSpacing: 4,
        marginBottom: 25,
    },
    badge: {
        marginBottom: 20,
        elevation: 10,
        shadowColor: COLORS.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },
    rankName: {
        fontSize: 34,
        fontWeight: '700',
        color: COLORS.textPrimary,
        textAlign: 'center',
        letterSpacing: 4,
        marginBottom: 20,
        textShadowColor: 'rgba(184, 161, 255, 0.4)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    divider: {
        width: 15,
        height: 1,
        backgroundColor: COLORS.accent,
        marginBottom: 20,
    },
    levelText: {
        fontSize: 12,
        color: COLORS.textPrimary,
        fontWeight: '500',
        letterSpacing: 2,
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 11,
        color: COLORS.textSecondary,
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 18,
        fontWeight: '300',
        letterSpacing: 0.5,
    },
    closeButton: {
        backgroundColor: COLORS.accent,
        paddingVertical: 18,
        width: '100%',
        borderRadius: 2,
    },
    closeButtonText: {
        fontSize: 10,
        fontWeight: '700',
        color: COLORS.primary,
        textAlign: 'center',
        letterSpacing: 3,
    },
});
