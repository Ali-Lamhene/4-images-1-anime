import { useRouter } from 'expo-router';
import React from 'react';
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants/colors';
import { RANKS } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { TYPOGRAPHY } from '../constants/typography';
import GoldCoinIcon from './icons/GoldCoinIcon';
import PotionIcon from './icons/PotionIcon';

export default function GameHeader({
  user,
  showBackButton = false,
  variant = 'default',
}) {
  const router = useRouter();

  const currentRank = RANKS.find(r => r.level === user.level) || RANKS[0];
  const nextRank = RANKS.find(r => r.level === user.level + 1);

  const xpProgress = nextRank
    ? ((user.xp - currentRank.minXP) /
      (nextRank.minXP - currentRank.minXP)) * 100
    : 100;

  const isOverlay = variant === 'overlay';

  return (
    <View
      pointerEvents={isOverlay ? 'none' : 'auto'}
      style={[
        styles.container,
        isOverlay && styles.overlayContainer,
      ]}
    >
      <View style={styles.mainRow}>
        {/* LEFT — TOUJOURS VISIBLE */}
        <View style={styles.leftSection}>
          {/* BACK BUTTON — MASQUÉ EN OVERLAY */}
          {showBackButton && !isOverlay && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
          )}

          {/* RANK + XP */}
          <View style={styles.rankXpContainer}>
            <View style={styles.xpWrapper}>
              <Text style={styles.rankText}>{currentRank.name}</Text>

              <View style={styles.xpCompact}>
                <PotionIcon width={14} height={14} style={{ marginRight: 2 }} />
                <AnimatedCounter value={user.xp} style={styles.xpValue} />
                <Text style={styles.xpLabel}>XP</Text>
              </View>
            </View>

            <View style={styles.xpBarBackground}>
              <View
                style={[
                  styles.xpBarFill,
                  { width: `${xpProgress}%` },
                ]}
              />
            </View>
          </View>
        </View>

        {/* RIGHT — TOUJOURS VISIBLE */}
        <View style={styles.rightSection}>
          <View style={styles.coinsContainer}>
            <GoldCoinIcon width={24} height={24} style={{ marginRight: 2 }} />
            <AnimatedCounter value={user.coins} style={styles.coinsText} />
          </View>
        </View>
      </View>
    </View>
  );
}

const AnimatedCounter = ({ value, style }) => {
  const animatedValue = React.useRef(new Animated.Value(value)).current;
  const [displayValue, setDisplayValue] = React.useState(value);

  React.useEffect(() => {
    const listener = animatedValue.addListener(({ value: v }) => {
      setDisplayValue(Math.floor(v));
    });

    Animated.timing(animatedValue, {
      toValue: value,
      duration: 1000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    return () => {
      animatedValue.removeListener(listener);
    };
  }, [value]);

  return <Text style={style}>{displayValue}</Text>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: SPACING.borderThin,
    borderBottomColor: COLORS.border,
  },

  overlayContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,

    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    zIndex: 10,
  },


  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: SPACING.md,
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
    backgroundColor: COLORS.accent,
    borderRadius: 18,
  },

  backIcon: {
    fontSize: TYPOGRAPHY.xl,
    color: COLORS.textPrimary,
  },

  rankXpContainer: {
    flex: 1,
    maxWidth: 180,
  },

  rankText: {
    fontSize: TYPOGRAPHY.sm,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.gold,
    marginBottom: 4,
  },

  xpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  xpBarBackground: {
    height: 8,
    backgroundColor: COLORS.accent,
    borderRadius: 4,
    overflow: 'hidden',
  },

  xpBarFill: {
    height: '100%',
    backgroundColor: COLORS.success,
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },

  xpCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2, // Slightly tighter for icon
  },

  xpLabel: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.textSecondary,
  },

  xpValue: {
    fontSize: TYPOGRAPHY.xs,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.success,
  },

  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.goldLight,
    paddingHorizontal: SPACING.xs,
    paddingRight: SPACING.xs + 3,
    paddingVertical: 1,
    borderRadius: SPACING.radiusXl,
    borderWidth: SPACING.borderThin,
    borderColor: COLORS.gold,
  },

  coinsText: {
    fontSize: TYPOGRAPHY.lg,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.goldDark,
  },
});
