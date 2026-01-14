import { useRouter } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimeLegendsLogo from '../components/AnimeLegendsLogo';
import { AppIconMockup, SplashScreenMockup } from '../components/AppBranding';
import BackgroundTexture from '../components/BackgroundTexture';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';

const { width } = Dimensions.get('window');

export default function BrandingShowcase() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <BackgroundTexture />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>BRANDING SHOWCASE</Text>
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent}>

                    {/* SECTION 1: FINAL LOGO */}
                    <View style={styles.section}>
                        <Text style={styles.sectionLabel}>FINAL BRANDING LOGO</Text>

                        <View style={styles.card}>
                            <Text style={styles.cardLabel}>FINAL: BLADE TYPOGRAPHY + LEGEND STAR</Text>
                            <AnimeLegendsLogo size={240} />
                        </View>
                    </View>

                    {/* SECTION 2: APP ICON (FOR STORES) */}
                    <View style={styles.section}>
                        <Text style={styles.sectionLabel}>STORE ASSETS (ICON)</Text>
                        <View style={styles.iconRow}>
                            <View style={styles.iconItem}>
                                <AppIconMockup size={100} />
                                <Text style={styles.iconLabel}>Production</Text>
                            </View>
                            <View style={styles.iconItem}>
                                <AppIconMockup size={60} />
                                <Text style={styles.iconLabel}>Home Screen</Text>
                            </View>
                            <View style={styles.iconItem}>
                                <AppIconMockup size={40} />
                                <Text style={styles.iconLabel}>Settings</Text>
                            </View>
                        </View>
                    </View>

                    {/* SECTION 3: SPLASH SCREEN */}
                    <View style={styles.section}>
                        <Text style={styles.sectionLabel}>SPLASH SCREEN PREVIEW</Text>
                        <View style={styles.splashMockupContainer}>
                            <SplashScreenMockup />
                        </View>
                    </View>

                </ScrollView>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 20,
    },
    backBtn: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backText: {
        color: COLORS.white,
        fontSize: 20,
    },
    headerTitle: {
        color: COLORS.accent,
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 4,
    },
    scrollContent: {
        padding: SPACING.lg,
        paddingBottom: 100,
    },
    section: {
        marginBottom: 40,
    },
    sectionLabel: {
        fontSize: 10,
        color: COLORS.textSecondary,
        letterSpacing: 3,
        fontWeight: '700',
        marginBottom: 20,
    },
    card: {
        backgroundColor: COLORS.secondary,
        padding: 30,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.1)',
    },
    cardLabel: {
        fontSize: 9,
        color: COLORS.accent,
        letterSpacing: 2,
        marginBottom: 20,
        opacity: 0.6,
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 30,
        backgroundColor: COLORS.secondary,
        padding: 40,
        borderRadius: 4,
    },
    iconItem: {
        alignItems: 'center',
        gap: 15,
    },
    iconLabel: {
        fontSize: 8,
        color: COLORS.textSecondary,
        fontWeight: '600',
    },
    splashMockupContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    }
});
