import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavBar from '../components/BottomNavBar';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { getSettings, INITIAL_SETTINGS, saveSettings } from '../utils/storage';

export default function SettingsScreen() {
    const router = useRouter();
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

    if (!isReady) return null;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>PARAMÈTRES</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>SYSTÈME</Text>

                    <View style={styles.option}>
                        <View>
                            <Text style={styles.optionText}>Sons</Text>
                            <Text style={styles.optionSubtext}>Effets sonores durant le jeu</Text>
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
                            <Text style={styles.optionText}>Notifications</Text>
                            <Text style={styles.optionSubtext}>Alertes et rappels de jeu</Text>
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
                    <Text style={styles.sectionTitle}>À PROPOS</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Version</Text>
                        <Text style={styles.infoValue}>1.0.0</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Développeur</Text>
                        <Text style={styles.infoValue}>Ali Lamhene</Text>
                    </View>
                </View>
            </View>

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
        paddingTop: 20,
    },
    section: {
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: '700',
        color: COLORS.accent,
        letterSpacing: 2,
        marginBottom: 20,
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
