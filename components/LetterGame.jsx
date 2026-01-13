import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { HINT_COST } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';

export default function LetterGame({
  animeName,
  selectedLetters,
  availableLetters,
  userCoins,
  onLetterSelect,
  onLetterRemove,
  onHintRequest,
}) {
  const { t } = useTranslation();

  const handleHint = () => {
    if (userCoins < HINT_COST) {
      Alert.alert('INFO', t('hint_need_credits', { cost: HINT_COST }));
      return;
    }
    onHintRequest();
  };

  return (
    <View style={styles.container}>
      {/* Answer Area - Compacted */}
      <View style={styles.answerContainer}>
        {(() => {
          const words = animeName.toUpperCase().split(' ');
          let cursor = 0;
          const nodes = [];

          words.forEach((word, wIdx) => {
            nodes.push(
              <View key={`word-${wIdx}`} style={styles.answerWord}>
                {word.split('').map((_, j) => {
                  const idx = cursor + j;
                  const letter = selectedLetters[idx];

                  return (
                    <TouchableOpacity
                      key={`ans-${idx}`}
                      style={[
                        styles.answerBox,
                        letter && styles.answerBoxFilled
                      ]}
                      onPress={() => letter && onLetterRemove(idx)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.answerText}>{letter || ''}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
            cursor += word.length;
          });

          return nodes;
        })()}
      </View>

      <View style={styles.keyboardSection}>
        <View style={styles.lettersGrid}>
          {availableLetters.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.letterBtn,
                item.used && styles.letterBtnUsed
              ]}
              onPress={() => !item.used && onLetterSelect(item.char, index)}
              disabled={item.used}
              activeOpacity={0.8}
            >
              <Text style={styles.letterText}>{item.char}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.hintBtn, userCoins < HINT_COST && { opacity: 0.3 }]}
          onPress={handleHint}
        >
          <Text style={styles.hintText}>{t('hint_cost', { cost: HINT_COST })}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  answerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  answerWord: {
    flexDirection: 'row',
    gap: 4,
  },
  answerBox: {
    width: 28,
    height: 38,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  answerBoxFilled: {
    backgroundColor: COLORS.accent, // Lavande discret pour les lettres ajoutées
  },
  answerText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary, // Texte sombre sur fond lavande pour contraste
  },
  keyboardSection: {
    marginTop: 10,
  },
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 20,
  },
  letterBtn: {
    width: 42,
    height: 42,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  letterBtnUsed: {
    opacity: 0.05,
  },
  letterText: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.textPrimary,
  },
  hintBtn: {
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: COLORS.secondary,
    borderRadius: 4,
    marginTop: 10,
  },
  hintText: {
    fontSize: 10,
    color: COLORS.accent, // Accent Lavande pour le bouton indice
    letterSpacing: 2,
    fontWeight: '700',
  }
});