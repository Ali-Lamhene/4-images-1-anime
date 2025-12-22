import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { TYPOGRAPHY } from '../constants/typography';
import { SHADOWS } from '../constants/shadows';

export default function VictoryPopup({ rewards, onContinue }) {
  const scaleAnim = useState(new Animated.Value(0.85))[0];
  const opacityAnim = useState(new Animated.Value(0))[0];
  const coinsAnim = useState(new Animated.Value(0))[0];
  const xpAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 7,
        tension: 60,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(120),
        Animated.spring(coinsAnim, {
          toValue: 1,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.delay(120),
        Animated.spring(xpAnim, {
          toValue: 1,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
      <Animated.View
        style={[
          styles.popupContainer,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.popupTitle}>🎉 Bravo ! 🎉</Text>
        <Text style={styles.popupSubtitle}>
          Vous avez trouvé la bonne réponse !
        </Text>

        <View style={styles.rewardsContainer}>

          <Animated.View style={[styles.rewardItem, animatedItem(xpAnim)]}>
            <Text style={styles.rewardIcon}>🧪</Text>
            <Text style={styles.rewardValue}>+{rewards.xp}</Text>
            <Text style={styles.rewardLabel}>XP</Text>
          </Animated.View>

          <Animated.View style={[styles.rewardItem, animatedItem(coinsAnim)]}>
            <Text style={styles.rewardIcon}>💰</Text>
            <Text style={styles.rewardValue}>+{rewards.coins}</Text>
            <Text style={styles.rewardLabel}>Pièces d’or</Text>
          </Animated.View>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={onContinue}
          activeOpacity={0.85}
        >
          <Text style={styles.continueButtonText}>Continuer</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

const animatedItem = anim => ({
  opacity: anim,
  transform: [
    {
      translateY: anim.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 0],
      }),
    },
  ],
});

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.secondaryOp,
    justifyContent: 'center',
    alignItems: 'center',
  },

  popupContainer: {
    borderRadius: SPACING.radiusXl,
    padding: SPACING.xxl,
    width: '100%',
    maxWidth: 400,
    marginHorizontal: SPACING.xl,
    alignItems: 'center',
  },

  popupTitle: {
    fontSize: 32,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },

  popupSubtitle: {
    fontSize: TYPOGRAPHY.lg,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xxl,
    textAlign: 'center',
  },

  rewardsContainer: {
    flexDirection: 'row',
    gap: SPACING.lg,
    width: '100%',
    marginBottom: SPACING.xxl,
  },

  rewardItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    padding: SPACING.lg,
    borderRadius: SPACING.radiusLg,
  },

  rewardIcon: {
    fontSize: 48,
  },

  rewardValue: {
    fontSize: 28,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.gold,
  },

  rewardLabel: {
    fontSize: TYPOGRAPHY.sm,
    color: COLORS.textSecondary,
  },

  continueButton: {
    backgroundColor: COLORS.success,
    paddingVertical: SPACING.md,
    borderRadius: SPACING.radiusLg,
    width: '100%',
  },

  continueButtonText: {
    fontSize: TYPOGRAPHY.xl,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});
