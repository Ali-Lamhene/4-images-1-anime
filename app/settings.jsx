import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavBar from '../components/BottomNavBar';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { getSettings, INITIAL_SETTINGS, saveSettings } from '../utils/storage';

const LANGUAGES = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'fr', label: 'FRANÇAIS' },
    // Future languages can be added here
];

export default function SettingsScreen() {
    const router = useRouter();
    const { t, language, changeLanguage, isReady: isLangReady } = useTranslation();
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
        const newSettings = { ...settings, [key]: !settings[key] };
        setSettings(newSettings);
        await saveSettings(newSettings);
    };

    const handleLanguageChange = async (newLang) => {
        await changeLanguage(newLang);
        setSettings(prev => ({ ...prev, language: newLang }));
    };

    if (!isReady || !isLangReady) return null;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{t('settings')}</Text>
            </View>

            <ScrollView style={styles.content}>
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

                    <View style={styles.languageContainer}>
                        {LANGUAGES.map((lang) => (
                            <TouchableOpacity
                                key={lang.code}
                                style={[
                                    styles.languageOption,
                                    language === lang.code && styles.languageOptionActive
                                ]}
                                onPress={() => handleLanguageChange(lang.code)}
                                activeOpacity={0.7}
                            >
                                <Text style={[
                                    styles.languageLabel,
                                    language === lang.code && styles.languageLabelActive
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
                    <Text style={styles.sectionTitle}>{t('about_section')}</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>{t('version')}</Text>
                        <Text style={styles.infoValue}>1.0.0</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>{t('developer')}</Text>
                        <Text style={styles.infoValue}>Ali Lamhene</Text>
                    </View>
                </View>
            </ScrollView>

            <BottomNavBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.xl,
        gap: 20,
    },
    backText: {
        fontSize: 24,
        color: COLORS.textPrimary,
        fontWeight: '300',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textPrimary,
        letterSpacing: 4,
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.lg,
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
    languageContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: 2,
        overflow: 'hidden',
    },
    languageOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    languageOptionActive: {
        backgroundColor: 'rgba(184, 161, 255, 0.05)',
    },
    languageLabel: {
        fontSize: 12,
        color: COLORS.textSecondary,
        fontWeight: '500',
        letterSpacing: 1.5,
    },
    languageLabelActive: {
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
