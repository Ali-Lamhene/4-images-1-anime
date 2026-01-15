import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundTexture from '../components/BackgroundTexture';
import BottomNavBar from '../components/BottomNavBar';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { getSettings, INITIAL_SETTINGS, saveSettings } from '../utils/storage';

const LANGUAGES = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'fr', label: 'FRANÇAIS' },
];

const NAMING_TYPES = [
    { code: 'original', labelKey: 'name_original' },
    { code: 'en', labelKey: 'name_english' },
    { code: 'fr', labelKey: 'name_french' },
];

export default function SettingsScreen() {
    const { t, language, changeLanguage, isReady: isLangReady } = useTranslation();
    const { playSound, refreshSettings } = useSound();
    const [settings, setSettings] = useState(INITIAL_SETTINGS);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadSettings = async () => {
            const savedSettings = await getSettings();
            setSettings(savedSettings);
            setIsReady(true);
        };
        loadSettings();
    }, []);

    const toggleSwitch = async (key) => {
        playSound('switch');
        const newSettings = { ...settings, [key]: !settings[key] };
        setSettings(newSettings);
        await saveSettings(newSettings);
        if (key === 'sounds') {
            await refreshSettings();
        }
    };

    const handleLanguageChange = async (newLang) => {
        playSound('click');
        await changeLanguage(newLang);
        setSettings(prev => ({ ...prev, language: newLang }));
    };

    const handleNamingTypeChange = async (newType) => {
        playSound('click');
        const newSettings = { ...settings, namingType: newType };
        setSettings(newSettings);
        await saveSettings(newSettings);
    };

    if (!isReady || !isLangReady) return null;

    return (
        <View style={styles.container}>
            <BackgroundTexture />
            <SafeAreaView style={styles.safeArea}>


                <ScrollView
                    style={styles.content}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t('system_section')}</Text>

                        <View style={styles.option}>
                            <View>
                                <Text style={styles.optionText}>{t('sounds')}</Text>
                                <Text style={styles.optionSubtext}>{t('sounds_sub')}</Text>
                            </View>
                            <Switch
                                trackColor={{ false: COLORS.secondary, true: COLORS.accent }}
                                thumbColor={settings.sounds ? COLORS.white : COLORS.textSecondary}
                                ios_backgroundColor={COLORS.secondary}
                                onValueChange={() => toggleSwitch('sounds')}
                                value={settings.sounds}
                            />
                        </View>

                        <View style={styles.option}>
                            <View>
                                <Text style={styles.optionText}>{t('notifications')}</Text>
                                <Text style={styles.optionSubtext}>{t('notifications_sub')}</Text>
                            </View>
                            <Switch
                                trackColor={{ false: COLORS.secondary, true: COLORS.accent }}
                                thumbColor={settings.notifications ? COLORS.white : COLORS.textSecondary}
                                ios_backgroundColor={COLORS.secondary}
                                onValueChange={() => toggleSwitch('notifications')}
                                value={settings.notifications}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t('language')}</Text>
                        <Text style={[styles.optionSubtext, { marginBottom: 15 }]}>{t('language_sub')}</Text>

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

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t('naming_style')}</Text>
                        <Text style={[styles.optionSubtext, { marginBottom: 15 }]}>{t('naming_style_sub')}</Text>

                        <View style={styles.selectionCard}>
                            {NAMING_TYPES.map((type) => (
                                <TouchableOpacity
                                    key={type.code}
                                    style={[
                                        styles.selectionOption,
                                        settings.namingType === type.code && styles.selectionOptionActive
                                    ]}
                                    onPress={() => handleNamingTypeChange(type.code)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={[
                                        styles.selectionLabel,
                                        settings.namingType === type.code && styles.selectionLabelActive
                                    ]}>
                                        {t(type.labelKey)}
                                    </Text>
                                    {settings.namingType === type.code && (
                                        <View style={styles.activeDot} />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t('about_section')}</Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{t('version')}</Text>
                            <Text style={styles.infoValue}>1.0.0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{t('contact')}</Text>
                            <Text style={styles.infoValue}>otakumi.factory@gmail.com</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <BottomNavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        overflow: 'hidden',
    },
    safeArea: {
        flex: 1,
    },

    content: {
        flex: 1,
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.xl,
    },
    scrollContent: {
        paddingBottom: 120, // Clear BottomNavBar
    },
    section: {
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: '700',
        color: COLORS.accent,
        letterSpacing: 2,
        marginBottom: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
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
        backgroundColor: COLORS.secondaryOp || 'rgba(26, 26, 34, 0.95)',
        borderRadius: 2,
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
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    infoLabel: {
        fontSize: 13,
        color: COLORS.textSecondary,
        fontWeight: '400',
    },
    infoValue: {
        fontSize: 13,
        color: COLORS.textPrimary,
        fontWeight: '500',
    }
});
