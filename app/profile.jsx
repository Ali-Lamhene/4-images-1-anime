import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ANIME_DATA } from '../assets/data/data';
import BackgroundTexture from '../components/BackgroundTexture';
import BadgeIcon from '../components/BadgeIcon';
import BottomNavBar from '../components/BottomNavBar';
import GoldCoinIcon from '../components/icons/GoldCoinIcon';
import StarIcon from '../components/icons/StarIcon';
import RankBadge from '../components/RankBadge';
import { BADGES } from '../constants/badges';
import { COLORS } from '../constants/colors';
import { RANKS } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { calculateLevel } from '../utils/gameUtils';
import { clearAllData, getCurrentAnimeIndex, getSettings, getUserData, INITIAL_USER } from '../utils/storage';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
    const router = useRouter();
    const { t, language } = useTranslation();
    const { playSound } = useSound();
    const [user, setUser] = useState(INITIAL_USER);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [settings, setSettings] = useState(null);

    useFocusEffect(
        useCallback(() => {
            loadStats();
        }, [])
    );

    const loadStats = async () => {
        const data = await getUserData();
        const index = await getCurrentAnimeIndex();
        const savedSettings = await getSettings();

        // Ensure level is correct based on XP if it's not present or wrong
        const correctLevel = calculateLevel(data.xp || 0);
        const updatedUser = { ...data, level: correctLevel };

        setUser(updatedUser);
        setCurrentIndex(index);
        setSettings(savedSettings);
        setIsReady(true);
    };

    const confirmReset = async () => {
        playSound('click');
        await clearAllData();
        setUser(INITIAL_USER);
        setCurrentIndex(0);
        setShowResetModal(false);
        router.replace('/');
    };

    const currentRank = RANKS.find(r => r.level === user.level) || RANKS[0];
    const nextRank = RANKS.find(r => r.level === user.level + 1);
    const xpProgress = nextRank
        ? ((user.xp - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100
        : 100;

    const unlockedAnimes = ANIME_DATA.slice(0, currentIndex);

    if (!isReady) return null;

    return (
        <View style={styles.container}>
            <BackgroundTexture />
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* <View style={styles.header}>
                        <Text style={styles.title}>{t('profile')}</Text>
                        <View style={styles.divider} />
                    </View> */}

                    <View style={styles.mainStats}>
                        <View style={styles.rankHeaderRow}>
                            <RankBadge level={user.level} size={80} style={styles.badgeLarge} />
                            <View style={styles.rankTextContainer}>
                                <Text style={styles.rankLabel}>{t(`rank_${currentRank.name.toLowerCase()}`)}</Text>
                                <Text style={styles.levelValue}>{t('level')} {user.level}</Text>
                            </View>
                        </View>

                        <View style={styles.xpBox}>
                            <View style={styles.xpInfo}>
                                <Text style={styles.xpLabel}>{t('experience')}</Text>
                                <Text style={styles.xpValue}>{user.xp} XP</Text>
                            </View>
                            <View style={styles.progressBar}>
                                <View style={[styles.progressFill, { width: `${xpProgress}%` }]} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.statsGrid}>
                        <View style={styles.statCard}>
                            <GoldCoinIcon width={24} height={24} />
                            <Text style={styles.statVal}>{user.coins}</Text>
                            <Text style={styles.statLab}>{t('credits')}</Text>
                        </View>
                        <View style={styles.statCard}>
                            <StarIcon width={24} height={24} />
                            <Text style={styles.statVal}>{currentIndex}</Text>
                            <Text style={styles.statLab}>{t('animes_found')}</Text>
                        </View>
                    </View>

                    {/* Achievements Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{t('achievements')}</Text>
                        <View style={styles.badgesContainer}>
                            <ScrollView
                                showsVerticalScrollIndicator={true}
                                nestedScrollEnabled={true}
                            >
                                <View style={styles.badgesGrid}>
                                    {BADGES.map(badge => {
                                        const isUnlocked = user.unlockedBadges?.includes(badge.id);
                                        return (
                                            <View key={badge.id} style={[styles.badgeCard, !isUnlocked && styles.badgeCardLocked]}>
                                                <BadgeIcon id={badge.id} size={60} locked={!isUnlocked} />
                                                <View style={styles.badgeTextContainer}>
                                                    <Text style={[styles.badgeName, !isUnlocked && styles.lockedText]}>
                                                        {badge.name}
                                                    </Text>
                                                    <Text style={styles.badgeDesc} numberOfLines={2}>
                                                        {t(badge.desc)}
                                                    </Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    {/* Collection Section */}
                    {unlockedAnimes.length > 0 && (
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>{t('my_collection')}</Text>
                            <View style={styles.collectionContainer}>
                                <ScrollView
                                    showsVerticalScrollIndicator={true}
                                    nestedScrollEnabled={true}
                                >
                                    <View style={styles.collectionList}>
                                        {unlockedAnimes.map((anime) => {
                                            const namingType = settings?.namingType || 'original';
                                            const displayName = anime.names[namingType] || anime.names.original;
                                            const synopsis = anime.info.synopsis[language] || anime.info.synopsis.en;

                                            return (
                                                <View key={anime.id} style={styles.collectionItem}>
                                                    <Image
                                                        source={{ uri: anime.vignette }}
                                                        style={styles.collectionThumb}
                                                    />
                                                    <View style={styles.collectionInfo}>
                                                        <Text style={styles.collectionName}>{displayName}</Text>
                                                        <View style={styles.collectionMeta}>
                                                            <Text style={styles.metaText}>{anime.info.year}</Text>
                                                            <Text style={styles.metaDivider}>•</Text>
                                                            <Text style={styles.metaText}>{anime.info.episodes} {t('episodes')}</Text>
                                                        </View>
                                                        <Text style={styles.collectionSynopsis} numberOfLines={2}>
                                                            {synopsis}
                                                        </Text>
                                                    </View>
                                                </View>
                                            );
                                        })}
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    )}

                    <View style={styles.dangerZone}>
                        <Text style={styles.sectionTitle}>{t('danger_zone')}</Text>
                        <TouchableOpacity
                            style={styles.resetButton}
                            onPress={() => {
                                playSound('click');
                                setShowResetModal(true);
                            }}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.resetButtonText}>{t('reset_progress')}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <BottomNavBar />

            <Modal
                transparent={true}
                visible={showResetModal}
                animationType="fade"
                onRequestClose={() => setShowResetModal(false)}
                statusBarTranslucent={true}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{t('confirmation')}</Text>
                        <View style={styles.modalDivider} />
                        <Text style={styles.modalText}>
                            {t('reset_warning')}
                        </Text>

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.cancelBtn}
                                onPress={() => {
                                    playSound('click');
                                    setShowResetModal(false);
                                }}
                            >
                                <Text style={styles.cancelBtnText}>{t('cancel')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmBtn}
                                onPress={confirmReset}
                            >
                                <Text style={styles.confirmBtnText}>{t('confirm')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    scrollContent: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: 120,
        paddingTop: 40,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: COLORS.textPrimary,
        letterSpacing: 10,
    },
    divider: {
        width: 30,
        height: 1,
        backgroundColor: COLORS.accent,
        marginTop: 20,
    },
    mainStats: {
        backgroundColor: COLORS.secondaryOp || 'rgba(26, 26, 34, 0.95)',
        padding: 30,
        borderRadius: 2,
        alignItems: 'center',
        marginBottom: 20,
    },
    rankHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 20,
    },
    badgeLarge: {
        textShadowColor: COLORS.accent,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    rankTextContainer: {
        alignItems: 'flex-start',
    },
    rankLabel: {
        fontSize: 14,
        fontWeight: '800',
        color: COLORS.accent,
        letterSpacing: 2,
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    levelValue: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.textPrimary,
        letterSpacing: 1,
        opacity: 0.8,
    },
    xpBox: {
        width: '100%',
        gap: 10,
    },
    xpInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    xpLabel: {
        fontSize: 9,
        fontWeight: '500',
        color: COLORS.textSecondary,
        letterSpacing: 1,
    },
    xpValue: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.accent,
    },
    progressBar: {
        height: 2,
        backgroundColor: COLORS.primary,
        width: '100%',
    },
    progressFill: {
        height: '100%',
        backgroundColor: COLORS.accent,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 25,
    },
    statCard: {
        flex: 1,
        backgroundColor: COLORS.secondaryOp || 'rgba(26, 26, 34, 0.95)',
        padding: 20,
        alignItems: 'center',
        gap: 8,
    },
    statVal: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    statLab: {
        fontSize: 8,
        color: COLORS.textSecondary,
        letterSpacing: 1,
        fontWeight: '500',
    },
    iconCircle: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 16,
    },
    collectionContainer: {
        maxHeight: 250,
        backgroundColor: COLORS.secondaryOp || 'rgba(26, 26, 34, 0.95)',
        borderRadius: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.1)',
        marginBottom: 5,
    },
    collectionList: {
        paddingBottom: 10,
    },
    collectionItem: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
        gap: 15,
    },
    collectionThumb: {
        width: 60,
        height: 80,
        borderRadius: 2,
        backgroundColor: COLORS.primary,
    },
    collectionInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    collectionName: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 4,
        letterSpacing: 0.5,
    },
    collectionMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    metaText: {
        fontSize: 10,
        color: COLORS.accent,
        fontWeight: '500',
    },
    metaDivider: {
        fontSize: 10,
        color: COLORS.textSecondary,
    },
    collectionSynopsis: {
        fontSize: 10,
        color: COLORS.textSecondary,
        lineHeight: 14,
        fontWeight: '300',
    },
    progressSection: {
        paddingVertical: 20,
        marginBottom: 20,
    },
    sectionContainer: {
        marginTop: 40,
        width: '100%',
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: '800',
        color: COLORS.textSecondary,
        letterSpacing: 2,
        marginBottom: 15,
        textTransform: 'uppercase',
    },
    badgesContainer: {
        maxHeight: 280, // Reduced height for a more compact layout
        backgroundColor: 'rgba(26, 26, 34, 0.4)',
        borderRadius: 15,
        padding: 10,
    },
    badgesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    badgeCard: {
        backgroundColor: 'rgba(26, 26, 34, 0.6)',
        borderRadius: 20,
        padding: 15,
        width: '48%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.1)',
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
    dangerZone: {
        paddingVertical: 20,
        marginTop: 20,
    },
    resetButton: {
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: COLORS.accent,
        borderRadius: 2,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'rgba(184, 161, 255, 0.05)',
    },
    resetButtonText: {
        fontSize: 10,
        color: COLORS.accent,
        fontWeight: '700',
        letterSpacing: 2,
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContainer: {
        backgroundColor: COLORS.secondary,
        padding: 30,
        width: '100%',
        maxWidth: 320,
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: COLORS.accent,
    },
    modalTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.accent,
        letterSpacing: 4,
        marginBottom: 15,
    },
    modalDivider: {
        width: 20,
        height: 1,
        backgroundColor: COLORS.accent,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 12,
        color: COLORS.textPrimary,
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 30,
        letterSpacing: 0.5,
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 10,
        width: '100%',
    },
    cancelBtn: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 2,
    },
    cancelBtnText: {
        fontSize: 10,
        color: COLORS.textPrimary,
        fontWeight: '600',
        letterSpacing: 1,
    },
    confirmBtn: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: COLORS.accent,
        borderRadius: 2,
    },
    confirmBtnText: {
        fontSize: 10,
        color: COLORS.primary,
        fontWeight: '700',
        letterSpacing: 1,
    }
});
