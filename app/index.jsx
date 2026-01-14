import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ANIME_DATA } from '../assets/data/data';
import BackgroundTexture from '../components/BackgroundTexture';
import BottomNavBar from '../components/BottomNavBar';
import RankBadge from '../components/RankBadge';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { getCurrentAnimeIndex, getSettings, getUserData, INITIAL_USER } from '../utils/storage';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(INITIAL_USER);
  const [settings, setSettings] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const loadData = async () => {
    const index = await getCurrentAnimeIndex();
    const savedSettings = await getSettings();
    const userData = await getUserData();
    setCurrentIndex(index);
    setSettings(savedSettings);
    setUser(userData);
    setIsReady(true);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  if (!isReady) return null;

  const lastAnime = currentIndex > 0 ? ANIME_DATA[currentIndex - 1] : null;
  const namingType = settings?.namingType || 'original';

  return (
    <View style={styles.container}>
      <BackgroundTexture />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            {/* Top Rank Badge */}
            <TouchableOpacity
              style={styles.userHeader}
              onPress={() => router.push('/profile')}
              activeOpacity={0.7}
            >
              <RankBadge level={user.level} size={40} />
              <View>
                <Text style={styles.userLevel}>{t('lvl')} {user.level}</Text>
                <Text style={styles.userXp}>{user.xp} XP</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{t('title_top')}</Text>
              <View style={styles.subtitleRow}>
                <View style={styles.subtitleLine} />
                <Text style={styles.subtitle}>{t('title_bottom')}</Text>
                <View style={styles.subtitleLine} />
              </View>
            </View>

            {/* Current Stage Indicator */}
            <View style={styles.stageIndicator}>
              <Text style={styles.stageText}>
                {t('current_stage', { n: currentIndex + 1 })}
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => router.push('/play')}
                activeOpacity={0.9}
              >
                <Text style={styles.playButtonText}>
                  {currentIndex === 0 ? t('start_experience') : t('continue').toUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Last Found Vignette */}
            {lastAnime && (
              <View style={styles.lastFoundContainer}>
                <Text style={styles.lastFoundLabel}>{t('last_found')}</Text>
                <View style={styles.vignette}>
                  <Image source={{ uri: lastAnime.images[0] }} style={styles.vignetteImage} />
                  <View style={styles.vignetteOverlay}>
                    <Text style={styles.vignetteName} numberOfLines={1}>
                      {lastAnime.names[namingType] || lastAnime.names.original}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* <View style={styles.footer}>
              <Text style={styles.footerText}>{t('footer_text')}</Text>
            </View> */}
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
  scrollContent: {
    flexGrow: 1,
    minHeight: height,
    paddingBottom: 120,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.xxl,
    paddingTop: 60,
  },
  userHeader: {
    position: 'absolute',
    top: 20,
    backgroundColor: 'rgba(26, 26, 34, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 30,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.1)',
  },
  userLevel: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.textPrimary,
    letterSpacing: 1,
  },
  userXp: {
    fontSize: 9,
    fontWeight: '400',
    color: COLORS.accent,
    letterSpacing: 1,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: 12,
    textAlign: 'center',
    textShadowColor: 'rgba(184, 161, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 15,
  },
  subtitleLine: {
    width: 20,
    height: 1,
    backgroundColor: COLORS.accent,
    opacity: 0.3,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.accent,
    letterSpacing: 8,
    textAlign: 'center',
    fontWeight: '400',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  stageIndicator: {
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.2)',
    borderRadius: 20,
    backgroundColor: 'rgba(184, 161, 255, 0.05)',
  },
  stageText: {
    fontSize: 10,
    color: COLORS.accent,
    fontWeight: '700',
    letterSpacing: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    gap: 15,
    marginBottom: 50,
  },
  playButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: 22,
    alignItems: 'center',
    borderRadius: 4,
  },
  playButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: 3,
  },
  lastFoundContainer: {
    width: '100%',
    maxWidth: 240,
    alignItems: 'center',
  },
  lastFoundLabel: {
    fontSize: 9,
    color: COLORS.textSecondary,
    letterSpacing: 3,
    marginBottom: 15,
    fontWeight: '600',
  },
  vignette: {
    width: '100%',
    height: 140,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.1)',
  },
  vignetteImage: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  vignetteOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(15, 15, 20, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(184, 161, 255, 0.1)',
  },
  vignetteName: {
    fontSize: 10,
    color: COLORS.textPrimary,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  footerText: {
    fontSize: 9,
    color: COLORS.textSecondary,
    letterSpacing: 4,
    fontWeight: '300',
  }
});