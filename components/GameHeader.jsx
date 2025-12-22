import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { RANKS } from '../constants/game';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { TYPOGRAPHY } from '../constants/typography';
import { SHADOWS } from '../constants/shadows';

export default function GameHeader({ user, showBackButton = false }) {
  const router = useRouter();
  const currentRank = RANKS.find(rank => rank.level === user.level) || RANKS[0];
  const nextRank = RANKS.find(rank => rank.level === user.level + 1);
  
  const xpProgress = nextRank 
    ? ((user.xp - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100
    : 100;

  return (
    <View style={styles.container}>
      <View style={styles.mainRow}>
        {/* Left side: Back button, Rank & XP */}
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
          )}
          
          <View style={styles.rankXpContainer}>
            <View style={styles.rankRow}>
              <Text style={styles.rankIcon}>⭐</Text>
              <Text style={styles.rankText}>{currentRank.name}</Text>
              
              <View style={styles.xpBarContainer}>
                <View style={styles.xpBarBackground}>
                  <View style={[styles.xpBarFill, { width: `${xpProgress}%` }]} />
                </View>
              </View>
              
              <Text style={styles.xpText}>
                {user.xp}/{nextRank ? nextRank.minXP : currentRank.minXP}
              </Text>
            </View>
          </View>
        </View>

        {/* Right side: Coins */}
        <View style={styles.coinsContainer}>
          <Text style={styles.coinIcon}>🪙</Text>
          <Text style={styles.coinsText}>{user.coins}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: SPACING.borderThin,
    borderBottomColor: COLORS.border,
    ...SHADOWS.medium,
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
    borderRadius: SPACING.radiusFull,
  },
  backIcon: {
    fontSize: TYPOGRAPHY.xl,
    color: COLORS.textPrimary,
  },
  rankXpContainer: {
    flex: 1,
  },
  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.gapSm,
  },
  rankIcon: {
    fontSize: TYPOGRAPHY.lg,
  },
  rankText: {
    fontSize: TYPOGRAPHY.md,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.gold,
  },
  xpBarContainer: {
    flex: 1,
    marginHorizontal: SPACING.sm,
  },
  xpBarBackground: {
    height: 12,
    backgroundColor: COLORS.primary,
    borderRadius: SPACING.radiusXs,
    overflow: 'hidden',
    borderWidth: SPACING.borderThin,
    borderColor: COLORS.border,
  },
  xpBarFill: {
    height: '100%',
    backgroundColor: COLORS.success,
    borderRadius: SPACING.radiusXs,
  },
  xpText: {
    fontSize: TYPOGRAPHY.xs,
    fontWeight: TYPOGRAPHY.semiBold,
    color: COLORS.textSecondary,
  },
  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.goldLight,
    paddingHorizontal: SPACING.md,
    paddingVertical: 2,
    borderRadius: SPACING.radiusXl,
    borderWidth: SPACING.borderMedium,
    borderColor: COLORS.gold,
    ...SHADOWS.gold,
  },
  coinIcon: {
    fontSize: TYPOGRAPHY.xl,
    marginRight: SPACING.gapSm,
  },
  coinsText: {
    fontSize: TYPOGRAPHY.lg,
    fontWeight: TYPOGRAPHY.bold,
    color: COLORS.goldDark,
  },
});