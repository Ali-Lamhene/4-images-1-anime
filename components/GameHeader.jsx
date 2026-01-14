import { useRouter } from 'expo-router';
import React from 'react';
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { RANKS } from '../constants/game';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';
import GoldCoinIcon from './icons/GoldCoinIcon';
import PotionIcon from './icons/PotionIcon';
import RankBadge from './RankBadge';

export default function GameHeader({
  user,
  showBackButton = false,
  variant = 'default',
}) {
  const router = useRouter();
  const { t } = useTranslation();
  const currentRank = RANKS.find(r => r.level === user.level) || RANKS[0];
  const nextRank = RANKS.find(r => r.level === user.level + 1);
  const xpProgress = nextRank
    ? ((user.xp - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100
    : 100;

  const isOverlay = variant === 'overlay';

  return (
    <View style={[styles.container, isOverlay && styles.overlayContainer]}>
      <View style={styles.mainRow}>
        <View style={styles.left}>
          {showBackButton && !isOverlay && (
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          )}
          <View style={styles.rankContainer}>
            <RankBadge level={user.level} size={38} />
            <View style={styles.rankInfo}>
              <Text style={styles.rankName}>{t(`rank_${currentRank.name.toLowerCase()}`)}</Text>
              <View style={styles.progressRow}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${xpProgress}%` }]} />
                </View>
                <View style={styles.xpWrapper}>
                  <PotionIcon width={18} height={18} />
                  <AnimatedCounter value={user.xp} style={styles.xpText} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.creditValueRow}>
            <GoldCoinIcon width={18} height={18} />
            <AnimatedCounter value={user.coins} style={styles.creditValue} />
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
      easing: Easing.out(Easing.quad),
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
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10, // More compact
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  overlayContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    position: 'absolute',
    top: 5,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    marginRight: -4,
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backText: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: '300',
  },
  rankInfo: {
    gap: 3,
  },
  rankName: {
    fontSize: 8,
    fontWeight: '700',
    color: COLORS.textSecondary,
    letterSpacing: 1.5,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBar: {
    width: 80,
    height: 6,
    backgroundColor: COLORS.secondary,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.accent,
  },
  xpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  xpText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  right: {
    alignItems: 'flex-end',
  },
  creditValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  creditValue: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
  }
});
