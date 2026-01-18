import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Alert, Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { HINT_COST } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import GoldCoinIcon from './icons/GoldCoinIcon';

const LetterGame = React.forwardRef(({
  animeName,
  selectedLetters,
  availableLetters,
  userCoins,
  isError,
  onLetterSelect,
  onLetterRemove,
  onHintRequest,
  hintRef,
  keyboardRef,
}, ref) => {
  const { t } = useTranslation();
  const { playSound } = useSound();
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isError) {
      playSound('failure');
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  }, [isError]);

  const handleHint = () => {
    if (userCoins < HINT_COST) {
      Alert.alert('INFO', t('hint_need_credits', { cost: HINT_COST }));
      return;
    }
    onHintRequest();
  };

  return (
    <View ref={ref} style={styles.container}>
      {/* Answer Area - Compacted */}
      <Animated.View
        style={[
          styles.answerContainer,
          { transform: [{ translateX: shakeAnim }] }
        ]}
      >
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
                        letter && styles.answerBoxFilled,
                        isError && letter && styles.answerBoxError
                      ]}
                      onPress={() => {
                        if (letter) {
                          playSound('click');
                          onLetterRemove(idx);
                        }
                      }}
                      activeOpacity={0.8}
                    >
                      <Text style={[styles.answerText, isError && letter && styles.answerTextError]}>
                        {letter || ''}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
            cursor += word.length;
          });

          return nodes;
        })()}
      </Animated.View>

      <View style={styles.keyboardSection}>
        <View
          ref={keyboardRef}
          collapsable={false}
          style={styles.lettersGrid}
        >
          {availableLetters.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.letterBtn,
                item.used && styles.letterBtnUsed
              ]}
              onPress={() => {
                if (!item.used) {
                  playSound('click');
                  onLetterSelect(item.char, index);
                }
              }}
              disabled={item.used}
              activeOpacity={0.8}
            >
              <Text style={styles.letterText}>{item.char}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          ref={hintRef}
          collapsable={false}
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
              <GoldCoinIcon width={28} height={28} />
              <Text style={styles.hintPriceText}>{HINT_COST}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default LetterGame;

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
    gap: 20,
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
  answerBoxError: {
    backgroundColor: '#FF3B30',
    borderColor: '#FF3B30',
    shadowColor: '#FF3B30',
    shadowOpacity: 0.5,
  },
  answerText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  answerTextError: {
    color: '#FFFFFF',
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
    paddingHorizontal: 4,
    paddingVertical: 0,
    borderRadius: 12,
    gap: 4,
  },
  hintPriceText: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '800',
  }
});