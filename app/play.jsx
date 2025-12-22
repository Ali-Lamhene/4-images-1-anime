import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameHeader from '../components/GameHeader';
import Images from '../components/Images';
import LetterGame from '../components/LetterGame';
import { shuffleLetters, normalizeString, checkAnswer } from '../utils/gameUtils';
import { HINT_COST } from '../constants/game';

// Données de test
const TEST_ANIME = {
  id: '1',
  name: 'NARUTO',
  images: [
    'https://via.placeholder.com/300/FF6347/FFFFFF?text=Image+1',
    'https://via.placeholder.com/300/4682B4/FFFFFF?text=Image+2',
    'https://via.placeholder.com/300/32CD32/FFFFFF?text=Image+3',
    'https://via.placeholder.com/300/FFD700/FFFFFF?text=Image+4',
  ],
  difficulty: 'easy',
};

export default function PlayScreen() {
  const [user, setUser] = useState({
    coins: 500,
    xp: 150,
    rank: 'Novice',
    level: 2,
  });

  const [gameState, setGameState] = useState({
    currentAnime: TEST_ANIME,
    selectedLetters: Array(TEST_ANIME.name.replace(/\s/g, '').length).fill(null),
    availableLetters: shuffleLetters(TEST_ANIME.name),
    hintsUsed: 0,
  });

  useEffect(() => {
    // Vérifier la réponse à chaque changement
    if (gameState.selectedLetters.every(l => l !== null)) {
      if (checkAnswer(gameState.selectedLetters, gameState.currentAnime.name)) {
        handleCorrectAnswer();
      } else {
        handleWrongAnswer();
      }
    }
  }, [gameState.selectedLetters]);

  const handleLetterSelect = (letter, letterIndex) => {
    const firstEmptyIndex = gameState.selectedLetters.findIndex(l => l === null);
    
    if (firstEmptyIndex !== -1) {
      const newSelectedLetters = [...gameState.selectedLetters];
      newSelectedLetters[firstEmptyIndex] = letter;
      
      const newAvailableLetters = [...gameState.availableLetters];
      newAvailableLetters[letterIndex] = '';
      
      setGameState({
        ...gameState,
        selectedLetters: newSelectedLetters,
        availableLetters: newAvailableLetters,
      });
    }
  };

  const handleLetterRemove = (index) => {
    const letter = gameState.selectedLetters[index];
    if (!letter) return;

    const newSelectedLetters = [...gameState.selectedLetters];
    newSelectedLetters[index] = null;

    const emptyIndex = gameState.availableLetters.findIndex(l => l === '');
    const newAvailableLetters = [...gameState.availableLetters];
    if (emptyIndex !== -1) {
      newAvailableLetters[emptyIndex] = letter;
    }

    setGameState({
      ...gameState,
      selectedLetters: newSelectedLetters,
      availableLetters: newAvailableLetters,
    });
  };

  const handleHintRequest = () => {
    if (user.coins < HINT_COST) return;

    const correctAnswer = normalizeString(gameState.currentAnime.name);
    const firstEmptyIndex = gameState.selectedLetters.findIndex(l => l === null);
    
    if (firstEmptyIndex === -1) return;

    const correctLetter = correctAnswer[firstEmptyIndex];
    const letterIndex = gameState.availableLetters.findIndex(l => l === correctLetter);
    
    if (letterIndex !== -1) {
      handleLetterSelect(correctLetter, letterIndex);
      setUser({ ...user, coins: user.coins - HINT_COST });
    }
  };

  const handleCorrectAnswer = () => {
    Alert.alert(
      'Bravo ! 🎉',
      'Vous avez trouvé la bonne réponse !',
      [
        {
          text: 'Continuer',
          onPress: () => {
            // Récompenses
            setUser({
              ...user,
              coins: user.coins + 100,
              xp: user.xp + 50,
            });
            // Charger le prochain anime
          },
        },
      ]
    );
  };

  const handleWrongAnswer = () => {
    Alert.alert(
      'Incorrect',
      'Ce n\'est pas la bonne réponse. Réessayez !',
      [{ text: 'OK' }]
    );
    
    // Réinitialiser la réponse
    setTimeout(() => {
      setGameState({
        ...gameState,
        selectedLetters: Array(gameState.currentAnime.name.replace(/\s/g, '').length).fill(null),
        availableLetters: shuffleLetters(gameState.currentAnime.name),
      });
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <GameHeader user={user} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
});