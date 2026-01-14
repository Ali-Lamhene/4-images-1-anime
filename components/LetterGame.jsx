import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { HINT_COST } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import GoldCoinIcon from './icons/GoldCoinIcon';

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
          style={[
            styles.hintBtn,
            userCoins < HINT_COST && { opacity: 0.5 }
          ]}
          onPress={handleHint}
          activeOpacity={0.7}
        >
          <View style={styles.hintContent}>
            <View style={styles.hintLeft}>
              <MaterialCommunityIcons name="lightbulb-outline" size={16} color={COLORS.primary} />
              <Text style={styles.hintText}>{t('hint') || 'INDICE'}</Text>
            </View>
            <View style={styles.hintPrice}>
              <GoldCoinIcon width={12} height={12} />
              <Text style={styles.hintPriceText}>{HINT_COST}</Text>
            </View>
          </View>
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
    width: 32, // Slightly wider
    height: 42, // Slightly taller
    backgroundColor: 'rgba(26, 26, 34, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.1)', // Subtle accent border
  },
  answerBoxFilled: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
    elevation: 4,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  answerText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  keyboardSection: {
    marginTop: 20,
  },
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  letterBtn: {
    width: 44,
    height: 44,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  letterBtnUsed: {
    opacity: 0.25, // Increased visibility from 0.05
    backgroundColor: 'rgba(26, 26, 34, 0.4)',
    borderColor: 'transparent',
  },
  letterText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  hintBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
    minWidth: 160,
    elevation: 3,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  hintContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hintLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  hintText: {
    fontSize: 12,
    color: COLORS.primary,
    letterSpacing: 1.5,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  hintPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 15, 20, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  hintPriceText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '700',
  }

});