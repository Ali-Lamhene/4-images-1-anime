import { useEffect, useRef } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { useTranslation } from '../context/LanguageContext';

export const TutorialTooltip = ({
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
    handleStop,
    currentStep,
    manualIntro,
}) => {
    const { t } = useTranslation();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const displayOrder = currentStep.order;

    useEffect(() => {
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [currentStep.order]);

    return (
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
            <View style={styles.stepIndicator}>
                <Text style={styles.stepText}>
                    {displayOrder}
                </Text>
            </View>

            <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>{currentStep.name}</Text>
            <Text style={styles.desc}>{currentStep.text}</Text>

            <View style={styles.footer}>
                {!isLastStep ? (
                    <TouchableOpacity onPress={handleStop} style={styles.skipButton}>
                        <Text style={styles.skipText}>{t('cancel')}</Text>
                    </TouchableOpacity>
                ) : <View />}

                <TouchableOpacity
                    onPress={isLastStep ? handleStop : handleNext}
                    style={styles.nextButton}
                >
                    <Text style={styles.nextButtonText}>
                        {isLastStep ? t('tutorial_got_it') : t('continue')}
                    </Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1A1A22',
        width: 250,
        borderRadius: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.3)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
        margin: 5,
    },
    stepIndicator: {
        alignSelf: 'center',
        backgroundColor: COLORS.accent,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    stepText: {
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: '900',
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
        color: COLORS.textPrimary,
        textAlign: 'center',
        letterSpacing: 2,
        marginBottom: 8,
        marginTop: 2,
    },
    desc: {
        fontSize: 13,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 18,
        marginBottom: 20,
        fontWeight: '400',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    skipButton: {
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    skipText: {
        color: COLORS.textSecondary,
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 1,
    },
    nextButton: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.4)',
    },
    nextButtonText: {
        color: COLORS.textPrimary,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.5,
    }
});
