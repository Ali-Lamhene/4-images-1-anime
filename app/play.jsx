import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackgroundTexture from '../components/BackgroundTexture';
import BadgePopup from '../components/BadgePopup';
import CustomTutorial from '../components/CustomTutorial';
import GameHeader from '../components/GameHeader';
import Images from '../components/Images';
import LetterGame from '../components/LetterGame';
import RankUpPopup from '../components/RankUpPopup';
import VictoryPopup from '../components/VictoryPopup';
import StageIndicator from '../components/StageIndicator';

import { ANIME_DATA } from '../assets/data/data';
import { COLORS } from '../constants/colors';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import { checkAnswer } from '../utils/gameUtils';
import { useAnimeGame } from '../hooks/useAnimeGame';
import { useTutorial } from '../hooks/useTutorial';
import { GameProvider } from '../context/GameContext';

export default function PlayScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const { playSound } = useSound();
  const insets = useSafeAreaInsets();

  // Game Logic Hook
  const game = useAnimeGame(playSound);
  const {
    isReady,
    user,
    currentAnimeIndex,
    gameState,
    rankUpLevel,
    badgeQueue,
    tutorialSeen,
    setRankUpLevel,
    clearBadgeFromQueue,
    handleContinue
  } = game;

  // Tutorial Refs
  const rewardsRef = useRef(null);
  const imagesRef = useRef(null);
  const letterGameRef = useRef(null);
  const keyboardRef = useRef(null);
  const hintRef = useRef(null);

  // Tutorial Logic Hook
  const {
    tutorialStep,
    tutorialActive,
    tutorialLayouts,
    nextStep,
    stopTutorial
  } = useTutorial(isReady, currentAnimeIndex, tutorialSeen, {
    rewards: rewardsRef,
    images: imagesRef,
    keyboard: keyboardRef,
    hint: hintRef
  });

  const [showVictoryPopup, setShowVictoryPopup] = useState(false);

  useEffect(() => {
    if (gameState && gameState.selectedLetters.every(l => l !== null)) {
      if (checkAnswer(gameState.selectedLetters, gameState.preferredName)) {
        setTimeout(() => setShowVictoryPopup(true), 300);
      }
    }
  }, [gameState?.selectedLetters]);

  const onContinue = () => {
    setShowVictoryPopup(false);
    const hasMore = handleContinue();
    if (!hasMore) {
        router.replace('/');
    }
  };

  if (!isReady) return null;
  if (!gameState && currentAnimeIndex < ANIME_DATA.length) return null;

  return (
    <GameProvider value={game}>
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor={COLORS.primary} />
        <BackgroundTexture />
        <View style={{ height: insets.top, backgroundColor: COLORS.primary }} />

        <View style={[styles.mainContent, { paddingBottom: insets.bottom }]}>
          <GameHeader user={user} showBackButton={!showVictoryPopup} variant={showVictoryPopup ? 'overlay' : 'default'} />

          <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
              <View style={styles.gameWrapper}>

                {/* Rewards Indicator */}
                <View ref={rewardsRef} collapsable={false}>
                  <StageIndicator t={t} />
                </View>

                {/* Images */}
                <View ref={imagesRef} collapsable={false} style={{ paddingHorizontal: 20 }}>
                  <Images />
                </View>

                {/* Letter Game */}
                <LetterGame
                  ref={letterGameRef}
                  hintRef={hintRef}
                  keyboardRef={keyboardRef}
                />
              </View>
            </ScrollView>
          </View>

          {showVictoryPopup && (
            <VictoryPopup 
              rewards={game.potentialRewards} 
              animeName={gameState.preferredName} 
              vignette={gameState.currentAnime.vignette} 
              onContinue={onContinue} 
            />
          )}

          {rankUpLevel && <RankUpPopup level={rankUpLevel} onClose={() => setRankUpLevel(null)} />}
        </View>

        <BadgePopup 
          isVisible={badgeQueue.length > 0} 
          badge={badgeQueue[0]} 
          onClose={clearBadgeFromQueue} 
        />

        <CustomTutorial
          isVisible={tutorialActive}
          step={tutorialStep}
          layout={tutorialLayouts[tutorialStep]}
          onNext={nextStep}
          onStop={stopTutorial}
          t={t}
          isFirstStep={tutorialStep === 1}
          isLastStep={tutorialStep === 7}
        />
      </View>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, overflow: 'hidden' },
  mainContent: { flex: 1 },
  content: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingVertical: 10 },
  gameWrapper: { maxWidth: 600, width: '100%', alignSelf: 'center', flexGrow: 1, justifyContent: 'space-between' },
});



