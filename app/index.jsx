import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ANIME_DATA } from '../assets/data/data';
import AnimeLegendsLogo from '../components/branding/AnimeLegendsLogo';
import BackgroundTexture from '../components/ui/BackgroundTexture';
import BottomNavBar from '../components/layout/BottomNavBar';
import RankBadge from '../components/ui/RankBadge';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { getCurrentAnimeIndex, getSettings, getUserData, INITIAL_USER, getConfigCompleted } from '../utils/storage';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const { t } = useTranslation();
  const { playSound } = useSound();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(INITIAL_USER);
  const [settings, setSettings] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const loadData = async () => {
    const configDone = await getConfigCompleted();
    if (!configDone) {
      router.replace('/configurator');
      return;
    }

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
              onPress={() => {
                playSound('click');
                router.push('/profile');
              }}
              activeOpacity={0.7}
            >
              <RankBadge level={user.level} size={40} />
              <View>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userLevel}>{t('lvl')} {user.level} • {user.xp} XP</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.logoContainer}>
              <AnimeLegendsLogo size={180} />
            </View>

            <View style={styles.bottomControls}>
              {/* Current Stage Indicator */}
              <View style={styles.stageIndicator}>
                <Text style={styles.stageText}>
                  {t('current_stage', { n: currentIndex + 1 })}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                {currentIndex < ANIME_DATA.length ? (
                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => {
                      playSound('start');
                      router.push('/play');
                    }}
                    activeOpacity={0.9}
                  >
                    <Text style={styles.playButtonText}>
                      {currentIndex === 0 ? t('start_experience') : t('continue').toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.completedContainer}>
                    <Text style={styles.completedTitle}>{t('all_completed')}</Text>
                    <Text style={styles.completedSubtitle}>{t('more_coming')}</Text>
                  </View>
                )}
              </View>

              {/* Last Found Vignette */}
              {lastAnime && (
                <View style={styles.lastFoundContainer}>
                  <Text style={styles.lastFoundLabel}>{t('last_found')}</Text>
                  <View style={styles.vignette}>
                    <Image source={{ uri: lastAnime.vignette }} style={styles.vignetteImage} />
                    <View style={styles.vignetteOverlay}>
                      <Text style={styles.vignetteName} numberOfLines={1}>
                        {lastAnime.names[namingType] || lastAnime.names.original}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>

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
    paddingBottom: 60,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.xxl,
    paddingTop: 40,
  },
  userHeader: {
    margin: 'auto',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(26, 26, 34, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 30,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.1)',
    marginBottom: 10,
  },
  userName: {
    fontSize: 11,
    fontWeight: '900',
    color: COLORS.accent,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  userLevel: {
    fontSize: 9,
    fontWeight: '500',
    color: COLORS.textPrimary,
    letterSpacing: 0.5,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginVertical: 20,
  },
  bottomControls: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    gap: 20,
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
  completedContainer: {
    padding: 24,
    backgroundColor: 'rgba(184, 161, 255, 0.05)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.2)',
    alignItems: 'center',
  },
  completedTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.accent,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 18,
  },
  completedSubtitle: {
    fontSize: 10,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 16,
  },
  lastFoundContainer: {
    width: '100%',
    maxWidth: 200,
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
    width: 100,
    height: 140,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.1)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
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