import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackgroundTexture from '../components/BackgroundTexture';
import BadgePopup from '../components/BadgePopup';
import CustomTutorial from '../components/CustomTutorial';
import GameHeader from '../components/GameHeader';
import GoldCoinIcon from '../components/icons/GoldCoinIcon';
import PotionIcon from '../components/icons/PotionIcon';
import Images from '../components/Images';
import LetterGame from '../components/LetterGame';
import RankUpPopup from '../components/RankUpPopup';
import VictoryPopup from '../components/VictoryPopup';
import { checkBadgeUnlocks } from '../utils/badgeUtils';

import { ANIME_DATA } from '../assets/data/data';
import { COLORS } from '../constants/colors';
import { DEFAULT_REWARDS, HINT_COST } from '../constants/game';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { calculateLevel, checkAnswer, normalizeString, shuffleLetters } from '../utils/gameUtils';
import {
  INITIAL_USER,
  getCurrentAnimeIndex,
  getRevealedImages,
  getSettings,
  getTutorialSeen,
  getUserData,
  saveCurrentAnimeIndex,
  saveRevealedImages,
  saveTutorialSeen,
  saveUserData
} from '../utils/storage';

export default function PlayScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const { playSound } = useSound();
  const insets = useSafeAreaInsets();

  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);
  const [showVictoryPopup, setShowVictoryPopup] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [tutorialActive, setTutorialActive] = useState(false);
  const [tutorialLayouts, setTutorialLayouts] = useState({});
  const [settings, setSettings] = useState(null);
  const [user, setUser] = useState(INITIAL_USER);
  const [gameState, setGameState] = useState(null);
  const [revealedImages, setRevealedImages] = useState([]);
  const [potentialRewards, setPotentialRewards] = useState(DEFAULT_REWARDS);
  const [isError, setIsError] = useState(false);
  const [rankUpLevel, setRankUpLevel] = useState(null);
  const [badgeQueue, setBadgeQueue] = useState([]);
  const [hintsUsedLevel, setHintsUsedLevel] = useState(0);

  // Tutorial refs
  const rewardsRef = useRef(null);
  const imagesRef = useRef(null);
  const letterGameRef = useRef(null);
  const keyboardRef = useRef(null);
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

      if (savedIndex === 0 && !tutorialSeen) {
        setTutorialStep(1);
        setTutorialActive(true);
      }

      if (savedIndex < ANIME_DATA.length) {
        const anime = ANIME_DATA[savedIndex];
        const namingType = savedSettings?.namingType || 'original';
        const preferredName = anime.names[namingType] || anime.names.original;
        const savedRevealed = await getRevealedImages();

        setGameState({
          currentAnime: anime,
          preferredName,
          selectedLetters: Array(preferredName.replace(/\s/g, '').length).fill(null),
          availableLetters: shuffleLetters(preferredName).map(char => ({ char, used: false })),
        });

        setRevealedImages(savedRevealed);
        const reductionFactor = savedRevealed.length * 0.25;
        setPotentialRewards({
          coins: Math.max(10, Math.floor(DEFAULT_REWARDS.coins * (1 - reductionFactor))),
          xp: Math.max(5, Math.floor(DEFAULT_REWARDS.xp * (1 - reductionFactor)))
        });
      }
      setIsReady(true);
    };
    loadData();
  }, []);

  const captureLayout = (step, ref) => {
    if (ref && ref.current) {
      ref.current.measure((x, y, width, height, px, py) => {
        // Check if measurements are valid
        if (width > 0 && height > 0) {
          setTutorialLayouts(prev => ({
            ...prev,
            [step]: { x: px, y: py, width, height }
          }));
        }
      });
    }
  };

  useEffect(() => {
    if (tutorialActive && tutorialStep >= 4) {
      // Small delay to ensure any scroll/animation from step change has finished
      const timer = setTimeout(() => {
        if (tutorialStep === 4) captureLayout(4, rewardsRef);
        if (tutorialStep === 5) captureLayout(5, imagesRef);
        if (tutorialStep === 6) captureLayout(6, keyboardRef);
        if (tutorialStep === 7) captureLayout(7, hintRef);
      }, 50); // Faster measurement
      return () => clearTimeout(timer);
    }
  }, [tutorialStep, tutorialActive]);

  useEffect(() => {
    if (isReady) saveUserData(user);
  }, [user, isReady]);

  useEffect(() => {
    if (isReady) saveCurrentAnimeIndex(currentAnimeIndex);
  }, [currentAnimeIndex, isReady]);

  useEffect(() => {
    if (isReady) saveRevealedImages(revealedImages);
  }, [revealedImages, isReady]);

  useEffect(() => {
    if (gameState && gameState.selectedLetters.every(l => l !== null)) {
      if (checkAnswer(gameState.selectedLetters, gameState.preferredName)) {
        setTimeout(() => setShowVictoryPopup(true), 300);
      } else {
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
    const restoreIndex = availableLetters.findIndex(item => item.char === letter && item.used);
    if (restoreIndex !== -1) {
      availableLetters[restoreIndex] = { ...availableLetters[restoreIndex], used: false };
    }
    setGameState({ ...gameState, selectedLetters, availableLetters });
  };

  const handleRevealImage = (index) => {
    if (revealedImages.includes(index)) return;
    playSound('reveal');
    const newRevealed = [...revealedImages, index];
    setRevealedImages(newRevealed);
    const reductionFactor = newRevealed.length * 0.25;
    setPotentialRewards({
      coins: Math.max(10, Math.floor(DEFAULT_REWARDS.coins * (1 - reductionFactor))),
      xp: Math.max(5, Math.floor(DEFAULT_REWARDS.xp * (1 - reductionFactor)))
    });
  };

  const handleHintRequest = () => {
    if (user.coins < HINT_COST) return;
    const correct = normalizeString(gameState.preferredName);
    const index = gameState.selectedLetters.findIndex(l => l === null);
    if (index === -1) return;
    const letter = correct[index];
    const letterIndex = gameState.availableLetters.findIndex(item => item.char === letter && !item.used);
    if (letterIndex !== -1) {
      playSound('hint');
      handleLetterSelect(letter, letterIndex);
      setHintsUsedLevel(prev => prev + 1);
      setUser({
        ...user,
        coins: user.coins - HINT_COST,
        stats: { ...user.stats, totalHintsUsed: (user.stats?.totalHintsUsed || 0) + 1 }
      });
    }
  };

  const handleContinue = () => {
    setUser(prev => {
      const newXP = prev.xp + potentialRewards.xp;
      const newLevel = calculateLevel(newXP);
      const updatedUser = {
        ...prev,
        coins: prev.coins + potentialRewards.coins,
        xp: newXP,
        level: newLevel,
        foundAnimes: [...(prev.foundAnimes || []), gameState.currentAnime.id]
      };
      const newBadges = checkBadgeUnlocks(updatedUser, ANIME_DATA);
      if (newBadges.length > 0) {
        setBadgeQueue(prevQueue => [...prevQueue, ...newBadges]);
        updatedUser.unlockedBadges = [...(updatedUser.unlockedBadges || []), ...newBadges.map(b => b.id)];
      }
      if (newLevel > prev.level) setRankUpLevel(newLevel);
      return updatedUser;
    });
    setShowVictoryPopup(false);
    setHintsUsedLevel(0);
    const nextIndex = currentAnimeIndex + 1;
    setCurrentAnimeIndex(nextIndex);
    if (nextIndex < ANIME_DATA.length) {
      const nextAnime = ANIME_DATA[nextIndex];
      const namingType = settings?.namingType || 'original';
      const preferredName = nextAnime.names[namingType] || nextAnime.names.original;
      setGameState({
        currentAnime: nextAnime,
        preferredName,
        selectedLetters: Array(preferredName.replace(/\s/g, '').length).fill(null),
        availableLetters: shuffleLetters(preferredName).map(char => ({ char, used: false })),
      });
      setRevealedImages([]);
      saveRevealedImages([]);
      setPotentialRewards(DEFAULT_REWARDS);
    }
  };

  if (!isReady) return null;
  if (!gameState && currentAnimeIndex < ANIME_DATA.length) return null;

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
      <BackgroundTexture />
      <View style={{ height: insets.top, backgroundColor: COLORS.primary }} />

      <View style={[styles.mainContent, { paddingBottom: insets.bottom }]}>
        <GameHeader user={user} showBackButton={!showVictoryPopup} variant={showVictoryPopup ? 'overlay' : 'default'} />

        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <View style={styles.gameWrapper}>

              {/* Rewards */}
              <View ref={rewardsRef} collapsable={false} style={styles.stageIndicator}>
                <View style={styles.stageContent}>
                  <Text style={styles.stageText}>{t('current_stage', { n: currentAnimeIndex + 1 })}</Text>
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

              {/* Images */}
              <View ref={imagesRef} collapsable={false} style={{ paddingHorizontal: 20 }}>
                <Images images={gameState.currentAnime.images} revealedImages={revealedImages} onReveal={handleRevealImage} />
              </View>

              {/* Letter Game */}
              <LetterGame
                ref={letterGameRef}
                animeName={gameState.preferredName}
                selectedLetters={gameState.selectedLetters}
                availableLetters={gameState.availableLetters}
                userCoins={user.coins}
                isError={isError}
                onLetterSelect={handleLetterSelect}
                onLetterRemove={handleLetterRemove}
                onHintRequest={handleHintRequest}
                hintRef={hintRef}
                keyboardRef={keyboardRef}
              />
            </View>
          </ScrollView>

        </View>

        {showVictoryPopup && (
          <VictoryPopup rewards={potentialRewards} animeName={gameState.preferredName} vignette={gameState.currentAnime.vignette} onContinue={handleContinue} />
        )}

        {rankUpLevel && <RankUpPopup level={rankUpLevel} onClose={() => setRankUpLevel(null)} />}
      </View>

      <BadgePopup isVisible={badgeQueue.length > 0} badge={badgeQueue[0]} onClose={() => setBadgeQueue(prev => prev.slice(1))} />

      <CustomTutorial
        isVisible={tutorialActive}
        step={tutorialStep}
        layout={tutorialLayouts[tutorialStep]}
        onNext={() => {
          if (tutorialStep < 7) setTutorialStep(prev => prev + 1);
          else {
            setTutorialActive(false);
            saveTutorialSeen(true);
          }
        }}
        onStop={() => {
          setTutorialActive(false);
          saveTutorialSeen(true);
        }}
        t={t}
        isFirstStep={tutorialStep === 1}
        isLastStep={tutorialStep === 7}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, overflow: 'hidden' },
  mainContent: { flex: 1 },
  content: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingVertical: 10 },
  gameWrapper: { maxWidth: 600, width: '100%', alignSelf: 'center', flex: 1, justifyContent: 'center' },
  stageIndicator: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15, marginBottom: 10 },
  stageLine: { height: 1, width: 30, backgroundColor: COLORS.accent, opacity: 0.2 },
  stageText: { fontSize: 10, fontWeight: '700', color: COLORS.accent, letterSpacing: 4 },
  stageContent: { alignItems: 'center', gap: 10 },
  rewardIndicator: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  rewardBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: 'rgba(184, 161, 255, 0.1)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  rewardBadgeText: { fontSize: 9, color: COLORS.textPrimary, fontWeight: '700' },
});


