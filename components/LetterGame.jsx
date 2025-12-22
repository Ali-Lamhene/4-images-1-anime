import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { HINT_COST } from '../constants/game';

export default function LetterGame({
  animeName,
  selectedLetters,
  availableLetters,
  userCoins,
  onLetterSelect,
  onLetterRemove,
  onHintRequest,
}) {
  const handleHint = () => {
    if (userCoins < HINT_COST) {
      Alert.alert(
        'Pièces insuffisantes',
        `Vous avez besoin de ${HINT_COST} pièces pour obtenir un indice.`,
        [{ text: 'OK' }]
      );
      return;
    }
    onHintRequest();
  };

  return (
    <View style={styles.container}>
      {/* Zone de réponse */}
      <View style={styles.answerContainer}>
        {selectedLetters.map((letter, index) => (
          <TouchableOpacity
            key={index}
            style={styles.answerBox}
            onPress={() => letter && onLetterRemove(index)}
          >
            <Text style={styles.answerLetter}>{letter || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bouton Indice */}
      <TouchableOpacity
        style={[
          styles.hintButton,
          userCoins < HINT_COST && styles.hintButtonDisabled,
        ]}
        onPress={handleHint}
        disabled={userCoins < HINT_COST}
      >
        <Text style={styles.hintIcon}>💡</Text>
        <Text style={styles.hintText}>Indice</Text>
        <Text style={styles.hintCost}>{HINT_COST} 🪙</Text>
      </TouchableOpacity>

      {/* Lettres disponibles */}
      <View style={styles.lettersContainer}>
        {availableLetters.map((letter, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.letterBox,
              !letter && styles.letterBoxUsed,
            ]}
            onPress={() => letter && onLetterSelect(letter, index)}
            disabled={!letter}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  answerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  answerBox: {
    width: 45,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#4A90E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  answerLetter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  hintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  hintButtonDisabled: {
    backgroundColor: '#ccc',
    opacity: 0.6,
  },
  hintIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  hintText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 8,
  },
  hintCost: {
    fontSize: 14,
    color: '#fff',
  },
  lettersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  letterBox: {
    width: 50,
    height: 55,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  letterBoxUsed: {
    backgroundColor: '#E0E0E0',
    opacity: 0.5,
  },
  letterText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});