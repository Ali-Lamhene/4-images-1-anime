import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundTexture from '../components/ui/BackgroundTexture';
import BadgeIcon from '../components/ui/BadgeIcon';
import { BADGES } from '../constants/badges';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { getUserData, INITIAL_USER } from '../utils/storage';

export default function BadgesScreen() {
    const router = useRouter();
    const { t } = useTranslation();
    const { playSound } = useSound();
    const [user, setUser] = useState(INITIAL_USER);
    const [isReady, setIsReady] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const loadUser = async () => {
                const data = await getUserData();
                setUser(data);
                setIsReady(true);
            };
            loadUser();
        }, [])
    );

    if (!isReady) return null;

    const obtainedBadgeIds = user.unlockedBadges || [];

    return (
        <View style={styles.container}>
            <BackgroundTexture />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => {
                            playSound('back');
                            router.back();
                        }}
                    >
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{t('achievements') || 'SUCCÈS'}</Text>
                    <View style={{ width: 40 }} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.badgesGrid}>
                        {BADGES.map(badge => {
                            const isUnlocked = obtainedBadgeIds.includes(badge.id);
                            return (
                                <View key={badge.id} style={[styles.badgeCard, !isUnlocked && styles.badgeCardLocked]}>
                                    <BadgeIcon id={badge.id} size={60} locked={!isUnlocked} />
                                    <View style={styles.badgeTextContainer}>
                                        <Text style={[styles.badgeName, !isUnlocked && styles.lockedText]}>
                                            {badge.name}
                                        </Text>
                                        <Text style={styles.badgeDesc} numberOfLines={3}>
                                            {t(badge.desc)}
                                        </Text>
                                    </View>
                                </View>
                            );
                        })}
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
        overflow: 'hidden',
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backButtonText: {
        fontSize: 24,
        color: COLORS.textPrimary,
        fontWeight: '300',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.textPrimary,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    scrollContent: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: 10,
        paddingTop: 20,
    },
    badgesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        justifyContent: 'space-between',
    },
    badgeCard: {
        backgroundColor: 'rgba(26, 26, 34, 0.6)',
        borderRadius: 20,
        padding: 15,
        width: '47%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.1)',
        marginBottom: 10,
    },
    badgeCardLocked: {
        opacity: 0.7,
        backgroundColor: 'rgba(15, 15, 20, 0.4)',
    },
    badgeTextContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    badgeName: {
        color: COLORS.textPrimary,
        fontSize: 12,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 4,
    },
    badgeDesc: {
        color: COLORS.textSecondary,
        fontSize: 9,
        textAlign: 'center',
        lineHeight: 12,
        opacity: 0.8,
    },
    lockedText: {
        color: 'rgba(255, 255, 255, 0.3)',
    },
});
