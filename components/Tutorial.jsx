import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Svg, { Defs, Mask, Path, Rect } from 'react-native-svg';
import { COLORS } from '../constants/colors';
import { useTranslation } from '../context/LanguageContext';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const Arrow = ({ direction = 'up', style }) => {
    const pulseAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 0,
                    duration: 800,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                })
            ])
        ).start();
    }, []);

    const rotation = direction === 'up' ? '0deg' : direction === 'down' ? '180deg' : direction === 'left' ? '-90deg' : '90deg';
    const translateY = pulseAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, direction === 'up' ? -10 : 10]
    });

    return (
        <Animated.View style={[
            { transform: [{ rotate: rotation }, { translateY }] },
            style
        ]}>
            <Svg width="40" height="20" viewBox="0 0 40 20">
                <Path
                    d="M0 20 L20 0 L40 20"
                    fill="none"
                    stroke={COLORS.accent}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </Animated.View>
    );
};

const TutorialStep = ({ title, desc, step, totalSteps, onNext, onSkip }) => {
    const { t } = useTranslation();
    const fadeAnim = useState(new Animated.Value(0))[0];
    const slideAnim = useState(new Animated.Value(20))[0];

    useEffect(() => {
        fadeAnim.setValue(0);
        slideAnim.setValue(20);
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start();
    }, [step]);

    return (
        <Animated.View style={[
            styles.card,
            {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
            }
        ]}>
            <View style={styles.stepIndicator}>
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            i === step && styles.activeDot,
                            i < step && styles.completedDot
                        ]}
                    />
                ))}
            </View>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>

            <View style={styles.footer}>
                {step < totalSteps - 1 ? (
                    <TouchableOpacity onPress={onSkip} style={styles.skipButton} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Text style={styles.skipText}>{t('cancel')}</Text>
                    </TouchableOpacity>
                ) : <View />}

                <TouchableOpacity onPress={onNext} style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>
                        {step === totalSteps - 1 ? t('tutorial_got_it') : t('continue')}
                    </Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

export default function Tutorial({ isVisible, onClose, targetRefs }) {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(0);
    const [hole, setHole] = useState(null);

    const steps = [
        {
            title: t('tutorial_welcome_title'),
            desc: t('tutorial_welcome_desc'),
            position: 'center'
        },
        {
            title: t('tutorial_goal_title'),
            desc: t('tutorial_goal_desc'),
            position: 'center'
        },
        {
            title: t('tutorial_rewards_title'),
            desc: t('tutorial_rewards_desc'),
            position: 'bottom',
            highlight: 'rewards'
        },
        {
            title: t('tutorial_reveal_title'),
            desc: t('tutorial_reveal_desc'),
            position: 'bottom',
            highlight: 'images'
        },
        {
            title: t('tutorial_letters_title'),
            desc: t('tutorial_letters_desc'),
            position: 'top',
            highlight: 'letters'
        },
        {
            title: t('tutorial_hints_title'),
            desc: t('tutorial_hints_desc'),
            position: 'top',
            highlight: 'hints'
        }
    ];

    const measureAndSync = (targetKey) => {
        const targetRef = targetRefs[targetKey];
        const scrollRef = targetRefs.scroll;

        if (!targetRef?.current) return;

        const performMeasurement = () => {
            targetRef.current.measureInWindow((wx, wy, wWidth, wHeight) => {
                if (wWidth === 0 || wHeight === 0) return;
                setHole({
                    x: wx - 12,
                    y: wy - 12,
                    w: wWidth + 24,
                    h: wHeight + 24
                });
            });
        };

        // Scroll logic
        if (scrollRef?.current) {
            // First measure relative to screen to see if we need to scroll
            targetRef.current.measureInWindow((_, wy, wWidth, wHeight) => {
                const elementBottom = wy + wHeight;
                const safeMargin = 100;
                // Trigger scroll if TOP is too high OR BOTTOM is too low
                const needsScroll = wy < safeMargin || elementBottom > SCREEN_HEIGHT - safeMargin;

                if (needsScroll) {
                    // Try to scroll. On Web findNodeHandle crashes, so we use a safer way.
                    // React Native's measureLayout doesn't require findNodeHandle since v0.62+
                    try {
                        targetRef.current.measureLayout(
                            scrollRef.current,
                            (x, y, width, height) => {
                                // If the element is very tall (like the keyboard), 
                                // we align it so it starts 80px from the top instead of centering perfectly
                                const scrollY = height > SCREEN_HEIGHT * 0.5
                                    ? Math.max(0, y - 80)
                                    : Math.max(0, y - (SCREEN_HEIGHT / 2) + (height / 2));

                                if (scrollRef.current.scrollTo) {
                                    scrollRef.current.scrollTo({ y: scrollY, animated: true });
                                }
                                // Wait for scroll to settle
                                setTimeout(performMeasurement, 450);
                            },
                            () => performMeasurement()
                        );
                    } catch (e) {
                        // Web fallback: scrollIntoView with center block
                        if (Platform.OS === 'web' && targetRef.current.scrollIntoView) {
                            targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            setTimeout(performMeasurement, 550);
                        } else {
                            performMeasurement();
                        }
                    }
                } else {
                    performMeasurement();
                }
            });
        } else {
            performMeasurement();
        }
    };

    useEffect(() => {
        if (!isVisible) {
            setHole(null);
            return;
        }

        const stepData = steps[currentStep];
        if (stepData.highlight) {
            const timer = setTimeout(() => measureAndSync(stepData.highlight), 150);
            return () => clearTimeout(timer);
        } else {
            setHole(null);
        }
    }, [currentStep, isVisible]);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onClose();
        }
    };

    if (!isVisible) return null;

    const stepData = steps[currentStep];

    // Card position logic: Safe margins
    const getCardStyle = () => {
        if (stepData.position === 'center') {
            return { justifyContent: 'center' };
        }

        if (stepData.position === 'top') {
            // Put card above the hole, but if no hole, just top
            const topMargin = 80;
            return { justifyContent: 'flex-start', paddingTop: topMargin };
        }

        if (stepData.position === 'bottom') {
            // Put card below the hole
            const bottomMargin = 80;
            return { justifyContent: 'flex-end', paddingBottom: bottomMargin };
        }

        return { justifyContent: 'center' };
    };

    // If hole is present, we adjust the card to NOT overlap it
    let adjustedCardStyle = getCardStyle();
    if (hole) {
        if (stepData.position === 'top') {
            // If card is at TOP, but hole (keyboard) is also high OR very tall, flip it to bottom
            if (hole.y < 350) {
                adjustedCardStyle = { justifyContent: 'flex-end', paddingBottom: 60 };
            }
        } else if (stepData.position === 'bottom') {
            // If card is at BOTTOM, but hole is also near bottom, flip it to top
            if (hole.y + hole.h > SCREEN_HEIGHT - 350) {
                adjustedCardStyle = { justifyContent: 'flex-start', paddingTop: 80 };
            }
        }
    }

    return (
        <Modal transparent visible={isVisible} animationType="fade">
            <View style={styles.mainContainer}>
                {/* SVG Overlay with hole */}
                <Svg height={SCREEN_HEIGHT} width={SCREEN_WIDTH} style={StyleSheet.absoluteFill}>
                    <Defs>
                        <Mask id="mask" x="0" y="0" height="100%" width="100%">
                            <Rect height="100%" width="100%" fill="white" />
                            {hole && (
                                <Rect
                                    x={hole.x}
                                    y={hole.y}
                                    width={hole.w}
                                    height={hole.h}
                                    fill="black"
                                    rx="20"
                                />
                            )}
                        </Mask>
                    </Defs>
                    <Rect
                        height="100%"
                        width="100%"
                        fill="rgba(5, 5, 8, 0.94)"
                        mask="url(#mask)"
                    />
                </Svg>

                {hole && (
                    <View
                        style={[
                            styles.animatedHole,
                            {
                                left: hole.x,
                                top: hole.y,
                                width: hole.w,
                                height: hole.h
                            }
                        ]}
                    />
                )}

                {hole && (
                    <Arrow
                        direction={hole.y > SCREEN_HEIGHT / 2 ? 'down' : 'up'}
                        style={{
                            position: 'absolute',
                            left: hole.x + hole.w / 2 - 20,
                            top: hole.y > SCREEN_HEIGHT / 2 ? hole.y - 40 : hole.y + hole.h + 20,
                        }}
                    />
                )}

                <View style={[styles.contentContainer, adjustedCardStyle]}>
                    <TutorialStep
                        title={stepData.title}
                        desc={stepData.desc}
                        step={currentStep}
                        totalSteps={steps.length}
                        onNext={handleNext}
                        onSkip={onClose}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    animatedHole: {
        position: 'absolute',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: COLORS.accent,
        shadowColor: COLORS.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#1A1A22',
        width: '100%',
        maxWidth: 340,
        borderRadius: 25,
        padding: 25,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.3)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
    },
    stepIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 20,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    activeDot: {
        backgroundColor: COLORS.accent,
        width: 20,
    },
    completedDot: {
        backgroundColor: COLORS.accent,
        opacity: 0.5,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: COLORS.textPrimary,
        textAlign: 'center',
        letterSpacing: 2,
        marginBottom: 12,
    },
    desc: {
        fontSize: 14,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 30,
        fontWeight: '400',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    skipButton: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    skipText: {
        color: COLORS.textSecondary,
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 1,
    },
    nextButton: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.4)',
    },
    nextButtonText: {
        color: COLORS.textPrimary,
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 1.5,
    }
});
