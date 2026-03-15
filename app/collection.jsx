import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ANIME_DATA } from '../assets/data/data';
import BackgroundTexture from '../components/ui/BackgroundTexture';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { getCurrentAnimeIndex, getSettings } from '../utils/storage';

export default function CollectionScreen() {
    const router = useRouter();
    const { t, language } = useTranslation();
    const { playSound } = useSound();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [settings, setSettings] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const loadData = async () => {
                const index = await getCurrentAnimeIndex();
                const userSettings = await getSettings();
                setCurrentIndex(index);
                setSettings(userSettings);
                setIsReady(true);
            };
            loadData();
        }, [])
    );

    if (!isReady) return null;

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
                    <Text style={styles.title}>{t('my_collection')}</Text>
                    <View style={{ width: 40 }} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.collectionContainer}>
                        <View style={styles.collectionList}>
                            {ANIME_DATA.map((anime, idx) => {
                                const isUnlocked = idx < currentIndex;

                                if (!isUnlocked) {
                                    return (
                                        <View key={`placeholder-${anime.id}`} style={styles.collectionItem}>
                                            <View style={[styles.collectionThumb, styles.skeletonThumb]}>
                                                <Text style={styles.placeholderIcon}>?</Text>
                                            </View>
                                            <View style={styles.collectionInfo}>
                                                <View style={styles.skeletonTitle} />
                                                <View style={styles.skeletonMeta} />
                                                <View style={styles.skeletonSynopsisLine1} />
                                                <View style={styles.skeletonSynopsisLine2} />
                                                <View style={styles.skeletonSynopsisLine3} />
                                            </View>
                                        </View>
                                    );
                                }

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
                                            <Text style={styles.collectionSynopsis} numberOfLines={3}>
                                                {synopsis}
                                            </Text>
                                        </View>
                                    </View>
                                );
                            })}
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
        paddingTop: 20,
    },
    collectionContainer: {
        backgroundColor: COLORS.secondaryOp || 'rgba(26, 26, 34, 0.95)',
        borderRadius: 4,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'rgba(184, 161, 255, 0.1)',
        marginBottom: 20,
    },
    collectionList: {
        paddingBottom: 10,
    },
    collectionItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
        gap: 15,
    },
    collectionThumb: {
        width: 70,
        height: 95,
        borderRadius: 4,
        backgroundColor: COLORS.primary,
    },
    collectionInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    collectionName: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 6,
        letterSpacing: 0.5,
    },
    collectionMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 8,
    },
    metaText: {
        fontSize: 11,
        color: COLORS.accent,
        fontWeight: '500',
    },
    metaDivider: {
        fontSize: 11,
        color: COLORS.textSecondary,
    },
    collectionSynopsis: {
        fontSize: 11,
        color: COLORS.textSecondary,
        lineHeight: 16,
        fontWeight: '300',
    },
    skeletonThumb: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderIcon: {
        fontSize: 28,
        fontWeight: '700',
        color: 'rgba(184, 161, 255, 0.2)',
    },
    skeletonTitle: {
        height: 14,
        width: '60%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 4,
        marginBottom: 12,
    },
    skeletonMeta: {
        height: 10,
        width: '40%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 4,
        marginBottom: 14,
    },
    skeletonSynopsisLine1: {
        height: 10,
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 4,
        marginBottom: 6,
    },
    skeletonSynopsisLine2: {
        height: 10,
        width: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 4,
        marginBottom: 6,
    },
    skeletonSynopsisLine3: {
        height: 10,
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 4,
    },
});
