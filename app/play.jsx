import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GameHeader from '../components/GameHeader';
import Images from '../components/Images';
import LetterGame from '../components/LetterGame';
import VictoryPopup from '../components/VictoryPopup';

import { COLORS } from '../constants/colors';
import { HINT_COST } from '../constants/game';
import { checkAnswer, normalizeString, shuffleLetters } from '../utils/gameUtils';

// Données de test
const ANIME_TEST = [
  {
    id: '1',
    name: 'One Piece',
    images: [
      'https://via.placeholder.com/300/FF6347/FFFFFF?text=Image+1',
      'https://via.placeholder.com/300/4682B4/FFFFFF?text=Image+2',
      'https://via.placeholder.com/300/32CD32/FFFFFF?text=Image+3',
      'https://via.placeholder.com/300/FFD700/FFFFFF?text=Image+4',
    ],
    rewards: { coins: 100, xp: 50 },
  },
  {
    id: '2',
    name: 'Naruto',
    images: [
      'https://via.placeholder.com/300/FF8C00/FFFFFF?text=Image+1',
      'https://via.placeholder.com/300/1E90FF/FFFFFF?text=Image+2',
      'https://via.placeholder.com/300/FFD700/FFFFFF?text=Image+3',
      'https://via.placeholder.com/300/DC143C/FFFFFF?text=Image+4',
    ],
    rewards: { coins: 100, xp: 50 },
  },
];

export default function PlayScreen() {
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);
  const [showVictoryPopup, setShowVictoryPopup] = useState(false);

  const [user, setUser] = useState({
    coins: 500,
    xp: 150,
    level: 2,
  });

  const currentAnime = ANIME_TEST[currentAnimeIndex];

  const [gameState, setGameState] = useState({
    currentAnime,
    selectedLetters: Array(
      currentAnime.name.replace(/\s/g, '').length
    ).fill(null),
    availableLetters: shuffleLetters(currentAnime.name).map(char => ({
      char,
      used: false,
    })),
  });

  /* -------------------- GAME LOGIC -------------------- */

  useEffect(() => {
    if (gameState.selectedLetters.every(l => l !== null)) {
      if (
        checkAnswer(
          gameState.selectedLetters,
          gameState.currentAnime.name
        )
      ) {
        setTimeout(() => setShowVictoryPopup(true), 300);
      } else {
        resetAnswer();
      }
    }
  }, [gameState.selectedLetters]);

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
    // Retrouver la première occurrence de cette lettre qui est marquée 'used'
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

    const correct = normalizeString(gameState.currentAnime.name);
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
    // Récompenses
    setUser(prev => ({
      ...prev,
      coins: prev.coins + currentAnime.rewards.coins,
      xp: prev.xp + currentAnime.rewards.xp,
    }));

    setShowVictoryPopup(false);

    const nextIndex = (currentAnimeIndex + 1) % ANIME_TEST.length;
    const nextAnime = ANIME_TEST[nextIndex];

    setCurrentAnimeIndex(nextIndex);
    setGameState({
      currentAnime: nextAnime,
      selectedLetters: Array(
        nextAnime.name.replace(/\s/g, '').length
      ).fill(null),
      availableLetters: shuffleLetters(nextAnime.name).map(char => ({
        char,
        used: false,
      })),
    });
  };

  const resetAnswer = () => {
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        selectedLetters: Array(
          prev.currentAnime.name.replace(/\s/g, '').length
        ).fill(null),
        availableLetters: shuffleLetters(prev.currentAnime.name).map(char => ({
          char,
          used: false,
        })),
      }));
    }, 500);
  };

  /* -------------------- RENDER -------------------- */

  return (
    <SafeAreaView style={styles.container}>
      <GameHeader
        user={user}
        showBackButton={!showVictoryPopup}
        variant={showVictoryPopup ? 'overlay' : 'default'}
      />

      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Images images={gameState.currentAnime.images} />

          <LetterGame
            animeName={gameState.currentAnime.name}
            selectedLetters={gameState.selectedLetters}
            availableLetters={gameState.availableLetters}
            userCoins={user.coins}
            onLetterSelect={handleLetterSelect}
            onLetterRemove={handleLetterRemove}
            onHintRequest={handleHintRequest}
          />
        </ScrollView>

        {showVictoryPopup && (
          <VictoryPopup
            rewards={currentAnime.rewards}
            onContinue={handleContinue}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

/* -------------------- STYLES -------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
});
