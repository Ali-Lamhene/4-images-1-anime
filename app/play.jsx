import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackgroundTexture from '../components/BackgroundTexture';
import GameHeader from '../components/GameHeader';
import GoldCoinIcon from '../components/icons/GoldCoinIcon';
import PotionIcon from '../components/icons/PotionIcon';
import Images from '../components/Images';
import LetterGame from '../components/LetterGame';
import RankUpPopup from '../components/RankUpPopup';
import Tutorial from '../components/Tutorial';
import VictoryPopup from '../components/VictoryPopup';

import { ANIME_DATA } from '../assets/data/data';
import { COLORS } from '../constants/colors';
import { DEFAULT_REWARDS, HINT_COST } from '../constants/game';
import { useTranslation } from '../context/LanguageContext';
import { calculateLevel, checkAnswer, normalizeString, shuffleLetters } from '../utils/gameUtils';
import {
  INITIAL_USER,
  getCurrentAnimeIndex,
  getSettings,
  getTutorialSeen,
  getUserData,
  saveCurrentAnimeIndex,
  saveTutorialSeen,
  saveUserData
} from '../utils/storage';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function PlayScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);
  const [showVictoryPopup, setShowVictoryPopup] = useState(false);
  const [rankUpLevel, setRankUpLevel] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [settings, setSettings] = useState(null);

  const [user, setUser] = useState(INITIAL_USER);
  const [gameState, setGameState] = useState(null);
  const [revealedImages, setRevealedImages] = useState([]);
  const [potentialRewards, setPotentialRewards] = useState(DEFAULT_REWARDS);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isError, setIsError] = useState(false);

  // Tutorial refs
  const scrollRef = useRef(null);
  const rewardsRef = useRef(null);
  const imagesRef = useRef(null);
  const letterGameRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const savedUser = await getUserData();
      const savedIndex = await getCurrentAnimeIndex();
      const savedSettings = await getSettings();
      const tutorialSeen = await getTutorialSeen();

      setUser(savedUser);
      setCurrentAnimeIndex(savedIndex);
      setSettings(savedSettings);

      // Show tutorial only if no anime found (index 0) and not seen yet
      if (savedIndex === 0 && !tutorialSeen) {
        setShowTutorial(true);
      }

      if (savedIndex < ANIME_DATA.length) {
        const anime = ANIME_DATA[savedIndex];
        const namingType = savedSettings.namingType || 'original';
        const preferredName = anime.names[namingType] || anime.names.original;

        setGameState({
          currentAnime: anime,
          preferredName,
          selectedLetters: Array(
            preferredName.replace(/\s/g, '').length
          ).fill(null),
          availableLetters: shuffleLetters(preferredName).map(char => ({
            char,
            used: false,
          })),
        });
        setRevealedImages([]);
        setPotentialRewards(DEFAULT_REWARDS);
      }

      setIsReady(true);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (isReady) {
      saveUserData(user);
    }
  }, [user, isReady]);

  useEffect(() => {
    if (isReady) {
      saveCurrentAnimeIndex(currentAnimeIndex);
    }
  }, [currentAnimeIndex, isReady]);

  useEffect(() => {
    if (gameState && gameState.selectedLetters.every(l => l !== null)) {
      if (
        checkAnswer(
          gameState.selectedLetters,
          gameState.preferredName
        )
      ) {
        setTimeout(() => setShowVictoryPopup(true), 300);
      } else {
        // Wrong answer: Trigger haptics and error styling
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        setIsError(true);
      }
    }
  }, [gameState?.selectedLetters]);

  const handleLetterSelect = (letter, index) => {
    const firstEmpty = gameState.selectedLetters.findIndex(l => l === null);
    if (firstEmpty === -1) return;

    if (isError) setIsError(false);

    const selectedLetters = [...gameState.selectedLetters];
    selectedLetters[firstEmpty] = letter;

    const availableLetters = [...gameState.availableLetters];
    availableLetters[index] = { ...availableLetters[index], used: true };

    setGameState({ ...gameState, selectedLetters, availableLetters });
  };

  const handleLetterRemove = index => {
    const letter = gameState.selectedLetters[index];
    if (!letter) return;

    if (isError) setIsError(false);

    const selectedLetters = [...gameState.selectedLetters];
    selectedLetters[index] = null;

    const availableLetters = [...gameState.availableLetters];
    const restoreIndex = availableLetters.findIndex(
      item => item.char === letter && item.used
    );
    if (restoreIndex !== -1) {
      availableLetters[restoreIndex] = {
        ...availableLetters[restoreIndex],
        used: false,
      };
    }

    setGameState({ ...gameState, selectedLetters, availableLetters });
  };

  const handleRevealImage = (index) => {
    if (revealedImages.includes(index)) return;

    const newRevealed = [...revealedImages, index];
    setRevealedImages(newRevealed);

    // Each reveal reduces reward: Remaining = X - (nbRevealed * X/4)
    // Actually if 0 revealed: 100%. 1: 75%. 2: 50%. 3: 25%. 4: Small base reward?
    // Let's go with literal interpretation: decrement by X/4 each click.
    const reductionFactor = newRevealed.length * 0.25;
    const newCoins = Math.max(10, Math.floor(DEFAULT_REWARDS.coins * (1 - reductionFactor)));
    const newXP = Math.max(5, Math.floor(DEFAULT_REWARDS.xp * (1 - reductionFactor)));

    setPotentialRewards({
      coins: newCoins,
      xp: newXP
    });
  };

  const handleHintRequest = () => {
    if (user.coins < HINT_COST) return;

    const correct = normalizeString(gameState.preferredName);
    const index = gameState.selectedLetters.findIndex(l => l === null);
    if (index === -1) return;

    const letter = correct[index];
    const letterIndex = gameState.availableLetters.findIndex(
      item => item.char === letter && !item.used
    );

    if (letterIndex !== -1) {
      handleLetterSelect(letter, letterIndex);
      setUser({ ...user, coins: user.coins - HINT_COST });
    }
  };

  const handleContinue = () => {
    setUser(prev => {
      const newXP = prev.xp + potentialRewards.xp;
      const newLevel = calculateLevel(newXP);

      if (newLevel > prev.level) {
        setRankUpLevel(newLevel);
      }

      return {
        ...prev,
        coins: prev.coins + potentialRewards.coins,
        xp: newXP,
        level: newLevel,
      };
    });

    setShowVictoryPopup(false);

    const nextIndex = currentAnimeIndex + 1;
    setCurrentAnimeIndex(nextIndex);

    if (nextIndex < ANIME_DATA.length) {
      const nextAnime = ANIME_DATA[nextIndex];
      const namingType = settings.namingType || 'original';
      const preferredName = nextAnime.names[namingType] || nextAnime.names.original;

      setGameState({
        currentAnime: nextAnime,
        preferredName,
        selectedLetters: Array(
          preferredName.replace(/\s/g, '').length
        ).fill(null),
        availableLetters: shuffleLetters(preferredName).map(char => ({
          char,
          used: false,
        })),
      });
      setRevealedImages([]);
      setPotentialRewards(DEFAULT_REWARDS);
    }
  };

  const resetAnswer = () => {
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        selectedLetters: Array(
          prev.preferredName.replace(/\s/g, '').length
        ).fill(null),
        availableLetters: shuffleLetters(prev.preferredName).map(char => ({
          char,
          used: false,
        })),
      }));
    }, 500);
  };

  if (!isReady) return null;

  const isActuallyCompleted = currentAnimeIndex >= ANIME_DATA.length && !showVictoryPopup && !rankUpLevel;

  if (isActuallyCompleted) {
    return (
      <View style={styles.container}>
        <BackgroundTexture />
        <SafeAreaView style={styles.safeArea}>
          <GameHeader user={user} showBackButton={true} />
          <View style={styles.completedContent}>
            <Text style={styles.completedTitle}>{t('congratulations')}</Text>
            <View style={styles.completedDivider} />
            <Text style={styles.completedText}>
              {t('all_completed')}
            </Text>
            <Text style={styles.completedSubtext}>
              {t('more_coming')}
            </Text>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => router.replace('/')}
            >
              <Text style={styles.homeButtonText}>{t('back_home')}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  if (!gameState && currentAnimeIndex < ANIME_DATA.length) return null;

  return (
    <View style={styles.container}>
      <BackgroundTexture />
      <SafeAreaView style={styles.safeArea}>
        <GameHeader
          user={user}
          showBackButton={!showVictoryPopup}
          variant={showVictoryPopup ? 'overlay' : 'default'}
        />

        <View style={styles.content}>
          <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.gameWrapper}>
              {/* Stylized Stage Number */}
              <View ref={rewardsRef} style={styles.stageIndicator}>
                <View style={styles.stageContent}>
                  <Text style={styles.stageText}>
                    {t('current_stage', { n: currentAnimeIndex + 1 })}
                  </Text>
                  <View style={styles.rewardIndicator}>
                    <View style={styles.stageLine} />
                    <View style={styles.rewardBadge}>
                      <GoldCoinIcon width={10} height={10} />
                      <Text style={styles.rewardBadgeText}>{potentialRewards.coins}</Text>
                    </View>
                    <View style={styles.rewardBadge}>
                      <PotionIcon width={10} height={10} />
                      <Text style={styles.rewardBadgeText}>{potentialRewards.xp}</Text>
                    </View>
                    <View style={styles.stageLine} />
                  </View>
                </View>
              </View>

              <Images
                ref={imagesRef}
                images={gameState.currentAnime.images}
                revealedImages={revealedImages}
                onReveal={handleRevealImage}
              />

              <LetterGame
                ref={letterGameRef}
                hintRef={hintRef}
                animeName={gameState.preferredName}
                selectedLetters={gameState.selectedLetters}
                availableLetters={gameState.availableLetters}
                userCoins={user.coins}
                isError={isError}
                onLetterSelect={handleLetterSelect}
                onLetterRemove={handleLetterRemove}
                onHintRequest={handleHintRequest}
              />
            </View>
          </ScrollView>

          {showVictoryPopup && (
            <VictoryPopup
              rewards={potentialRewards}
              animeName={gameState.preferredName}
              onContinue={handleContinue}
            />
          )}

          {rankUpLevel && (
            <RankUpPopup
              level={rankUpLevel}
              onClose={() => setRankUpLevel(null)}
            />
          )}

          <Tutorial
            isVisible={showTutorial}
            targetRefs={{
              rewards: rewardsRef,
              images: imagesRef,
              letters: letterGameRef,
              hints: hintRef,
              scroll: scrollRef
            }}
            onClose={() => {
              setShowTutorial(false);
              saveTutorialSeen(true);
            }}
          />
        </View>
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
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  gameWrapper: {
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  stageIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 10,
  },
  stageLine: {
    height: 1,
    width: 30,
    backgroundColor: COLORS.accent,
    opacity: 0.2,
  },
  stageText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.accent,
    letterSpacing: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  stageContent: {
    alignItems: 'center',
    gap: 10,
  },
  rewardIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rewardBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(184, 161, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  rewardBadgeText: {
    fontSize: 9,
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
  completedContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textPrimary,
    letterSpacing: 8,
    marginBottom: 20,
  },
  completedDivider: {
    width: 30,
    height: 1,
    backgroundColor: COLORS.accent,
    marginBottom: 40,
  },
  completedText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0.5,
    marginBottom: 10,
    fontWeight: '500',
  },
  completedSubtext: {
    fontSize: 11,
    color: COLORS.textSecondary,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 50,
    fontWeight: '300',
  },
  homeButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  homeButtonText: {
    fontSize: 10,
    color: COLORS.textPrimary,
    fontWeight: '600',
    letterSpacing: 3,
  }
});
