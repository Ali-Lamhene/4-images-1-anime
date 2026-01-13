import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ANIME_DATA } from '../assets/data/data';
import BottomNavBar from '../components/BottomNavBar';
import GoldCoinIcon from '../components/icons/GoldCoinIcon';
import { COLORS } from '../constants/colors';
import { RANKS } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { clearAllData, getCurrentAnimeIndex, getUserData, INITIAL_USER } from '../utils/storage';

export default function ProfileScreen() {
    const router = useRouter();
    const [user, setUser] = useState(INITIAL_USER);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = async () => {
        const data = await getUserData();
        const index = await getCurrentAnimeIndex();
        setUser(data);
        setCurrentIndex(index);
        setIsReady(true);
    };

    const confirmReset = async () => {
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

    if (!isReady) return null;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>PROFIL</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.mainStats}>
                    <Text style={styles.rankLabel}>{currentRank.name.toUpperCase()}</Text>
                    <Text style={styles.levelValue}>NIVEAU {user.level}</Text>

                    <View style={styles.xpBox}>
                        <View style={styles.xpInfo}>
                            <Text style={styles.xpLabel}>EXPÉRIENCE</Text>
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
                        <Text style={styles.statLab}>CRÉDITS</Text>
                    </View>
                    <View style={styles.statCard}>
                        <View style={styles.iconCircle}>
                            <Text style={styles.iconText}>🎬</Text>
                        </View>
                        <Text style={styles.statVal}>{currentIndex}</Text>
                        <Text style={styles.statLab}>ANIMES TROUVÉS</Text>
                    </View>
                </View>

                <View style={styles.progressSection}>
                    <Text style={styles.sectionTitle}>AVANCEMENT GLOBAL</Text>
                    <View style={styles.globalBar}>
                        <View style={[styles.globalFill, { width: `${(currentIndex / ANIME_DATA.length) * 100}%` }]} />
                    </View>
                    <Text style={styles.progressText}>
                        {currentIndex} sur {ANIME_DATA.length} animes complétés
                    </Text>
                </View>

                <View style={styles.dangerZone}>
                    <Text style={styles.sectionTitle}>ZONE DE DANGER</Text>
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={() => setShowResetModal(true)}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.resetButtonText}>RÉINITIALISER TOUTE LA PROGRESSION</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <BottomNavBar />

            {/* Custom Reset Modal */}
            <Modal
                transparent={true}
                visible={showResetModal}
                animationType="fade"
                onRequestClose={() => setShowResetModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>CONFIRMATION</Text>
                        <View style={styles.modalDivider} />
                        <Text style={styles.modalText}>
                            Toute votre expérience, vos crédits et votre rang seront définitivement supprimés.
                        </Text>

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.cancelBtn}
                                onPress={() => setShowResetModal(false)}
                            >
                                <Text style={styles.cancelBtnText}>ANNULER</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmBtn}
                                onPress={confirmReset}
                            >
                                <Text style={styles.confirmBtnText}>CONFIRMER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    scrollContent: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: 140,
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
        backgroundColor: COLORS.secondary,
        padding: 30,
        borderRadius: 2,
        alignItems: 'center',
        marginBottom: 20,
    },
    rankLabel: {
        fontSize: 10,
        fontWeight: '400',
        color: COLORS.textSecondary,
        letterSpacing: 4,
        marginBottom: 10,
    },
    levelValue: {
        fontSize: 36,
        fontWeight: '600',
        color: COLORS.textPrimary,
        letterSpacing: 2,
        marginBottom: 30,
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
        marginBottom: 40,
    },
    statCard: {
        flex: 1,
        backgroundColor: COLORS.secondary,
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
    progressSection: {
        paddingVertical: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: '600',
        color: COLORS.textSecondary,
        letterSpacing: 2,
        marginBottom: 15,
    },
    globalBar: {
        height: 4,
        backgroundColor: COLORS.secondary,
        width: '100%',
        borderRadius: 2,
        marginBottom: 10,
    },
    globalFill: {
        height: '100%',
        backgroundColor: COLORS.textPrimary,
        borderRadius: 2,
    },
    progressText: {
        fontSize: 11,
        color: COLORS.textSecondary,
        fontWeight: '300',
        letterSpacing: 0.5,
    },
    dangerZone: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.secondary,
    },
    resetButton: {
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: COLORS.error,
        borderRadius: 2,
        alignItems: 'center',
        marginTop: 10,
    },
    resetButtonText: {
        fontSize: 10,
        color: COLORS.error,
        fontWeight: '700',
        letterSpacing: 2,
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
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
        borderColor: COLORS.error,
    },
    modalTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.error,
        letterSpacing: 4,
        marginBottom: 15,
    },
    modalDivider: {
        width: 20,
        height: 1,
        backgroundColor: COLORS.error,
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
        backgroundColor: COLORS.error,
        borderRadius: 2,
    },
    confirmBtnText: {
        fontSize: 10,
        color: COLORS.white,
        fontWeight: '700',
        letterSpacing: 1,
    }
});
