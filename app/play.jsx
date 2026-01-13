import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GameHeader from '../components/GameHeader';
import Images from '../components/Images';
import LetterGame from '../components/LetterGame';
import RankUpPopup from '../components/RankUpPopup';
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
  getUserData,
  saveCurrentAnimeIndex,
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

  useEffect(() => {
    const loadData = async () => {
      const savedUser = await getUserData();
      const savedIndex = await getCurrentAnimeIndex();
      const savedSettings = await getSettings();

      setUser(savedUser);
      setCurrentAnimeIndex(savedIndex);
      setSettings(savedSettings);

      if (savedIndex < ANIME_DATA.length) {
        const anime = ANIME_DATA[savedIndex];
        // Use preferred name based on namingType
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
        resetAnswer();
      }
    }
  }, [gameState?.selectedLetters]);

  const handleLetterSelect = (letter, index) => {
    const firstEmpty = gameState.selectedLetters.findIndex(l => l === null);
    if (firstEmpty === -1) return;

    const selectedLetters = [...gameState.selectedLetters];
    selectedLetters[firstEmpty] = letter;

    const availableLetters = [...gameState.availableLetters];
    availableLetters[index] = { ...availableLetters[index], used: true };

    setGameState({ ...gameState, selectedLetters, availableLetters });
  };

  const handleLetterRemove = index => {
    const letter = gameState.selectedLetters[index];
    if (!letter) return;

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
      const newXP = prev.xp + DEFAULT_REWARDS.xp;
      const newLevel = calculateLevel(newXP);

      if (newLevel > prev.level) {
        setRankUpLevel(newLevel);
      }

      return {
        ...prev,
        coins: prev.coins + DEFAULT_REWARDS.coins,
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
      <SafeAreaView style={styles.container}>
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
    );
  }

  if (!gameState && currentAnimeIndex < ANIME_DATA.length) return null;

  return (
    <SafeAreaView style={styles.container}>
      <GameHeader
        user={user}
        showBackButton={!showVictoryPopup}
        variant={showVictoryPopup ? 'overlay' : 'default'}
      />

      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.gameWrapper}>
            <Images images={gameState.currentAnime.images} />

            <LetterGame
              animeName={gameState.preferredName}
              selectedLetters={gameState.selectedLetters}
              availableLetters={gameState.availableLetters}
              userCoins={user.coins}
              onLetterSelect={handleLetterSelect}
              onLetterRemove={handleLetterRemove}
              onHintRequest={handleHintRequest}
            />
          </View>
        </ScrollView>

        {showVictoryPopup && (
          <VictoryPopup
            rewards={DEFAULT_REWARDS}
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  gameWrapper: {
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
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
