import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { COLORS } from '../constants/colors';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import BadgeIcon from './BadgeIcon';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const BadgePopup = ({ isVisible, badge, onClose }) => {
    const { t } = useTranslation();
    const { playSound } = useSound();
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isVisible) {
            playSound('reward');
            // Reset animations for new badge
            scaleAnim.setValue(0);
            opacityAnim.setValue(0);

            Animated.parallel([
                Animated.spring(scaleAnim, {
                    toValue: 1,
                    friction: 8,
                    tension: 40,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            scaleAnim.setValue(0);
            opacityAnim.setValue(0);
        }
    }, [isVisible, badge?.id]);

    if (!isVisible || !badge) return null;

    return (
        <Modal transparent visible={isVisible} animationType="fade" statusBarTranslucent={true}>
            <View style={styles.overlay}>
                <Animated.View
                    style={[
                        styles.card,
                        {
                            opacity: opacityAnim,
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                >
                    <View style={styles.iconContainer}>
                        <BadgeIcon id={badge.id} size={150} />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.unlockText}>ACHIEVEMENT UNLOCKED</Text>
                        <Text style={styles.badgeName}>{badge.name}</Text>
                        <Text style={styles.badgeDesc}>{t(badge.desc)}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            playSound('click');
                            onClose();
                        }}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>{t('acknowledge') || 'CONTINUE'}</Text>
                        <MaterialCommunityIcons name="arrow-right" size={18} color={COLORS.primary} />
                    </TouchableOpacity>
                </Animated.View>

                {isVisible && (
                    <ConfettiCannon
                        key={badge.id} // Added key to re-trigger for multiple badges
                        count={100}
                        origin={{ x: SCREEN_WIDTH / 2, y: -20 }}
                        fadeOut={true}
                        colors={[COLORS.accent, '#FFFFFF', '#9179ff', '#FFD700']}
                        fallSpeed={3000}
                    />
                )}
            </View>
        </Modal>
    );
};

export default BadgePopup;

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 5, 8, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#1A1A22',
        borderRadius: 30,
        padding: 30,
        width: '100%',
        maxWidth: 340,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.2)',
        shadowColor: COLORS.accent,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    iconContainer: {
        marginBottom: 20,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    unlockText: {
        color: COLORS.accent,
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 2,
        marginBottom: 10,
    },
    badgeName: {
        color: COLORS.textPrimary,
        fontSize: 24,
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 8,
    },
    badgeDesc: {
        color: COLORS.textSecondary,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },
    button: {
        backgroundColor: COLORS.accent,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: '800',
        letterSpacing: 1.2,
    },
});
