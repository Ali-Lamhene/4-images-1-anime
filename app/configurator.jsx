import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundTexture from '../components/BackgroundTexture';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { getSettings, INITIAL_USER, saveConfigCompleted, saveSettings, saveUserData } from '../utils/storage';

const { width } = Dimensions.get('window');

const LANGUAGES = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'fr', label: 'FRANÇAIS' },
];

const NAMING_TYPES = [
    { code: 'original', labelKey: 'name_original' },
    { code: 'en', labelKey: 'name_english' },
    { code: 'fr', labelKey: 'name_french' },
];

export default function ConfiguratorScreen() {
    const router = useRouter();
    const { t, language: contextLang, changeLanguage } = useTranslation();
    const { playSound, refreshSettings } = useSound();

    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [language, setLanguage] = useState(contextLang || 'en');
    const [sounds, setSounds] = useState(true);
    const [notifications, setNotifications] = useState(false);
    const [namingType, setNamingType] = useState('original');

    const handleLanguageChange = async (newLang) => {
        playSound('click');
        setLanguage(newLang);
        await changeLanguage(newLang);
    };

    const nextStep = () => {
        playSound('click');
        if (step === 1) {
            if (name.trim() === '') {
                setNameError(true);
                return;
            }
            setNameError(false);
        }
        setStep(step + 1);
    };

    const prevStep = () => {
        playSound('click');
        setStep(step - 1);
    };

    const handleFinish = async () => {
        playSound('start');

        const finalName = name.trim() === '' ? 'Player' : name.trim();

        // 1. Save Settings
        const newSettings = {
            sounds,
            notifications,
            language,
            namingType,
        };
        await saveSettings(newSettings);

        // 2. Save User
        const newUser = {
            ...INITIAL_USER,
            name: finalName,
        };
        await saveUserData(newUser);

        // 3. Update Sound Context
        if (sounds) {
            await refreshSettings();
        }

        // 4. Mark Config as Complete
        await saveConfigCompleted(true);

        // 5. Navigate to Home
        router.replace('/');
    };

    return (
        <View style={styles.container}>
            <BackgroundTexture />
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView 
                    style={styles.container} 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                        {step === 1 && (
                            <View style={styles.stepContainer}>
                                <Text style={styles.title}>{t('config_step1_title')}</Text>
                                <Text style={styles.subtitle}>{t('config_step1_subtitle')}</Text>

                                <View style={styles.section}>
                                    <TextInput
                                        style={[styles.input, nameError && styles.inputError]}
                                        placeholder={t('config_name_placeholder')}
                                        placeholderTextColor={COLORS.textSecondary}
                                        value={name}
                                        onChangeText={(text) => {
                                            setName(text);
                                            if (nameError) setNameError(false);
                                        }}
                                        maxLength={15}
                                    />
                                    {nameError && (
                                        <Text style={styles.errorText}>
                                            {t('config_name_required')}
                                        </Text>
                                    )}
                                </View>

                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>{t('language')}</Text>
                                    <View style={styles.selectionCard}>
                                        {LANGUAGES.map((lang) => (
                                            <TouchableOpacity
                                                key={lang.code}
                                                style={[
                                                    styles.selectionOption,
                                                    language === lang.code && styles.selectionOptionActive
                                                ]}
                                                onPress={() => handleLanguageChange(lang.code)}
                                                activeOpacity={0.7}
                                            >
                                                <Text style={[
                                                    styles.selectionLabel,
                                                    language === lang.code && styles.selectionLabelActive
                                                ]}>
                                                    {lang.label}
                                                </Text>
                                                {language === lang.code && (
                                                    <View style={styles.activeDot} />
                                                )}
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        )}

                        {step === 2 && (
                            <View style={styles.stepContainer}>
                                <Text style={styles.title}>{t('config_step2_title')}</Text>
                                <Text style={styles.subtitle}>{t('config_step2_subtitle')}</Text>

                                <View style={styles.section}>
                                    <View style={styles.option}>
                                        <View>
                                            <Text style={styles.optionText}>{t('sounds')}</Text>
                                            <Text style={styles.optionSubtext}>{t('sounds_sub')}</Text>
                                        </View>
                                        <Switch
                                            trackColor={{ false: COLORS.secondary, true: COLORS.accent }}
                                            thumbColor={sounds ? COLORS.white : COLORS.textSecondary}
                                            ios_backgroundColor={COLORS.secondary}
                                        onValueChange={async (val) => {
                                            setSounds(val);
                                            const currentSettings = await getSettings();
                                            const newSettings = { ...currentSettings, sounds: val };
                                            await saveSettings(newSettings);
                                            await refreshSettings();
                                            if (val) playSound('switch');
                                        }}
                                            value={sounds}
                                        />
                                    </View>

                                    <View style={styles.option}>
                                        <View>
                                            <Text style={styles.optionText}>{t('notifications')}</Text>
                                            <Text style={styles.optionSubtext}>{t('notifications_sub')}</Text>
                                        </View>
                                        <Switch
                                            trackColor={{ false: COLORS.secondary, true: COLORS.accent }}
                                            thumbColor={notifications ? COLORS.white : COLORS.textSecondary}
                                            ios_backgroundColor={COLORS.secondary}
                                        onValueChange={async (val) => {
                                            playSound('switch');
                                            setNotifications(val);
                                            const currentSettings = await getSettings();
                                            const newSettings = { ...currentSettings, notifications: val };
                                            await saveSettings(newSettings);
                                        }}
                                            value={notifications}
                                        />
                                    </View>
                                </View>
                            </View>
                        )}

                        {step === 3 && (
                            <View style={styles.stepContainer}>
                                <Text style={styles.title}>{t('config_step3_title')}</Text>
                                <Text style={styles.subtitle}>{t('config_step3_subtitle')}</Text>

                                <View style={styles.section}>
                                    <Text style={[styles.optionSubtext, { marginBottom: 15, textAlign: 'center' }]}>
                                        {t('config_step3_desc')}
                                    </Text>
                                    <View style={styles.selectionCard}>
                                        {NAMING_TYPES.map((type) => (
                                            <TouchableOpacity
                                                key={type.code}
                                                style={[
                                                    styles.selectionOption,
                                                    namingType === type.code && styles.selectionOptionActive
                                                ]}
                                                onPress={() => {
                                                    playSound('click');
                                                    setNamingType(type.code);
                                                }}
                                                activeOpacity={0.7}
                                            >
                                                <Text style={[
                                                    styles.selectionLabel,
                                                    namingType === type.code && styles.selectionLabelActive
                                                ]}>
                                                    {t(type.labelKey)}
                                                </Text>
                                                {namingType === type.code && (
                                                    <View style={styles.activeDot} />
                                                )}
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        )}
                    </ScrollView>

                    <View style={styles.footerContainer}>
                        <View style={styles.progressDots}>
                            {[1, 2, 3].map((s) => (
                                <View 
                                    key={s} 
                                    style={[
                                        styles.dot, 
                                        step === s && styles.activeProgressDot,
                                        step > s && styles.completedProgressDot
                                    ]} 
                                />
                            ))}
                        </View>
                        
                        <View style={styles.buttonRow}>
                            {step > 1 ? (
                                <TouchableOpacity style={[styles.navButton, styles.backButton]} onPress={prevStep}>
                                    <Text style={styles.backButtonText}>{t('back')}</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.navButtonSpacer} />
                            )}

                            {step < 3 ? (
                                <TouchableOpacity style={[styles.navButton, styles.nextButton]} onPress={nextStep}>
                                    <Text style={styles.nextButtonText}>{t('continue')}</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={[styles.navButton, styles.nextButton]} onPress={handleFinish}>
                                    <Text style={styles.nextButtonText}>{t('config_finish')}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.xxl,
        paddingBottom: 40,
        justifyContent: 'center',
    },
    stepContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: COLORS.textPrimary,
        letterSpacing: 4,
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(184, 161, 255, 0.3)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    subtitle: {
        fontSize: 12,
        color: COLORS.accent,
        textAlign: 'center',
        marginBottom: 40,
        letterSpacing: 1,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: '700',
        color: COLORS.accent,
        letterSpacing: 2,
        marginBottom: 15,
    },
    input: {
        backgroundColor: 'rgba(26, 26, 34, 0.95)',
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.1)',
        borderRadius: 8,
        color: COLORS.textPrimary,
        fontSize: 16,
        padding: 16,
        textAlign: 'center',
        letterSpacing: 2,
    },
    inputError: {
        borderColor: '#FF4C4C',
        borderWidth: 2,
    },
    errorText: {
        color: '#FF4C4C',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 1,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
    },
    optionText: {
        fontSize: 15,
        color: COLORS.textPrimary,
        letterSpacing: 0.5,
        marginBottom: 2,
    },
    optionSubtext: {
        fontSize: 11,
        color: COLORS.textSecondary,
        fontWeight: '300',
    },
    selectionCard: {
        backgroundColor: 'rgba(26, 26, 34, 0.95)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.1)',
        overflow: 'hidden',
    },
    selectionOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    selectionOptionActive: {
        backgroundColor: 'rgba(184, 161, 255, 0.05)',
    },
    selectionLabel: {
        fontSize: 12,
        color: COLORS.textSecondary,
        fontWeight: '500',
        letterSpacing: 1.5,
    },
    selectionLabelActive: {
        color: COLORS.accent,
        fontWeight: '700',
    },
    activeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.accent,
    },
    footerContainer: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xl,
        paddingTop: SPACING.md,
    },
    progressDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    activeProgressDot: {
        backgroundColor: COLORS.accent,
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    completedProgressDot: {
        backgroundColor: COLORS.textSecondary,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    navButton: {
        flex: 1,
        paddingVertical: 18,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    navButtonSpacer: {
        flex: 1,
    },
    backButton: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    backButtonText: {
        color: COLORS.textSecondary,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2,
        textAlign: 'center',
    },
    nextButton: {
        backgroundColor: COLORS.accent,
    },
    nextButtonText: {
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 2,
        textAlign: 'center',
    },
});
