import { useEffect, useState } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

import { COLORS } from '../constants/colors';
import { RANKS } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { TYPOGRAPHY } from '../constants/typography';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function RankUpPopup({ level, onClose }) {
    const [showConfetti, setShowConfetti] = useState(false);
    const scaleAnim = useState(new Animated.Value(0.8))[0];
    const opacityAnim = useState(new Animated.Value(0))[0];

    const rank = RANKS.find(r => r.level === level) || RANKS[0];

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 6,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setShowConfetti(true);
        });
    }, []);

    return (
        <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
            {showConfetti && (
                <ConfettiCannon
                    count={200}
                    origin={{ x: SCREEN_WIDTH / 2, y: -20 }}
                    fadeOut={true}
                    fallSpeed={3000}
                />
            )}

            <Animated.View
                style={[
                    styles.popupContainer,
                    { transform: [{ scale: scaleAnim }] },
                ]}
            >
                <Text style={styles.congratsText}>FÉLICITATIONS !</Text>
                <View style={styles.rankIconContainer}>
                    <Text style={styles.rankBadge}>🏆</Text>
                </View>
                <Text style={styles.levelText}>NIVEAU {level}</Text>
                <Text style={styles.rankNameText}>{rank.name}</Text>

                <Text style={styles.subtitle}>
                    Vous avez atteint un nouveau rang ! Continuez comme ça pour devenir une Légende.
                </Text>

                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onClose}
                    activeOpacity={0.8}
                >
                    <Text style={styles.closeButtonText}>Génial !</Text>
                </TouchableOpacity>
            </Animated.View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    popupContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: SPACING.radiusXl,
        padding: SPACING.xxl,
        width: '85%',
        maxWidth: 400,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.gold,
    },
    congratsText: {
        fontSize: 24,
        fontWeight: TYPOGRAPHY.bold,
        color: COLORS.gold,
        marginBottom: SPACING.md,
        letterSpacing: 2,
    },
    rankIconContainer: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.accent,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.lg,
        borderWidth: 3,
        borderColor: COLORS.gold,
    },
    rankBadge: {
        fontSize: 50,
    },
    levelText: {
        fontSize: TYPOGRAPHY.xl,
        color: COLORS.textSecondary,
        marginBottom: 4,
    },
    rankNameText: {
        fontSize: 32,
        fontWeight: TYPOGRAPHY.bold,
        color: COLORS.textPrimary,
        marginBottom: SPACING.lg,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: TYPOGRAPHY.md,
        color: COLORS.textSecondary,
        textAlign: 'center',
        marginBottom: SPACING.xxl,
        lineHeight: 22,
    },
    closeButton: {
        backgroundColor: COLORS.gold,
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.xxl,
        borderRadius: SPACING.radiusLg,
        width: '100%',
    },
    closeButtonText: {
        fontSize: TYPOGRAPHY.lg,
        fontWeight: TYPOGRAPHY.bold,
        color: COLORS.primary,
        textAlign: 'center',
    },
});
