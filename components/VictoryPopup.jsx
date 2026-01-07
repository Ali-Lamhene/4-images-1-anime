import { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { TYPOGRAPHY } from '../constants/typography';
import GoldCoinIcon from './icons/GoldCoinIcon';
import PotionIcon from './icons/PotionIcon';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function VictoryPopup({ rewards, onContinue }) {
  const scaleAnim = useState(new Animated.Value(0.85))[0];
  const opacityAnim = useState(new Animated.Value(0))[0];
  const coinsAnim = useState(new Animated.Value(0))[0];
  const xpAnim = useState(new Animated.Value(0))[0];

  // State for active flying icons - fresh instances every time!
  const [activeIcons, setActiveIcons] = useState(null);

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
      Animated.spring(coinsAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.spring(xpAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleContinue = () => {
    // 1. Clear previous icons first to ensure a clean slate
    setActiveIcons(null);

    // 2. Short delay to ensure React has unmounted previous icons
    setTimeout(() => {
      const runId = Date.now();

      const coins = [...Array(15)].map((_, i) => ({
        id: `coin-${runId}-${i}`,
        progress: new Animated.Value(0),
        scatter: {
          x: 70 + (Math.random() * 80 - 40),
          y: 40 - (Math.random() * 40 + 40),
        }
      }));

      const xp = [...Array(10)].map((_, i) => ({
        id: `xp-${runId}-${i}`,
        progress: new Animated.Value(0),
        scatter: {
          x: -70 + (Math.random() * 80 - 40),
          y: 40 - (Math.random() * 40 + 40),
        }
      }));

      setActiveIcons({ coins, xp });

      // 3. Start animations - MATCHING XP behavior for coins (added +100 delay)
      const coinAnimations = coins.map((coin, index) => {
        return Animated.sequence([
          Animated.delay(index * 20 + 100), // Added 100ms base delay like XP
          Animated.timing(coin.progress, {
            toValue: 1,
            duration: 1200,
            easing: Easing.bezier(0.2, 0, 0.2, 1),
            useNativeDriver: true,
          }),
        ]);
      });

      const xpAnimations = xp.map((item, index) => {
        return Animated.sequence([
          Animated.delay(index * 30 + 120), // Slightly offset from coins
          Animated.timing(item.progress, {
            toValue: 1,
            duration: 1300,
            easing: Easing.bezier(0.2, 0, 0.2, 1),
            useNativeDriver: true,
          }),
        ]);
      });

      Animated.parallel([...coinAnimations, ...xpAnimations]).start();
    }, 50);

    // 4. Move to next level after a delay
    setTimeout(() => {
      onContinue();
    }, 1850);
  };

  return (
    <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
      <Animated.View
        style={[
          styles.popupContainer,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.popupTitle}>Bravo ! </Text>
        <Text style={styles.popupSubtitle}>
          Vous avez trouvé la bonne réponse !
        </Text>

        <View style={styles.rewardsContainer}>

          <Animated.View style={[styles.rewardItem, animatedItem(xpAnim)]}>
            <View style={styles.iconContainer}>
              <PotionIcon width={48} height={48} />
            </View>
            <Text style={styles.rewardValue}>+{rewards.xp}</Text>
            <Text style={styles.rewardLabel}>XP</Text>
          </Animated.View>

          <Animated.View style={[styles.rewardItem, animatedItem(coinsAnim)]}>
            <View style={styles.iconContainer}>
              <GoldCoinIcon width={48} height={48} />
            </View>
            <Text style={styles.rewardValue}>+{rewards.coins}</Text>
            <Text style={styles.rewardLabel}>Pièces d'or</Text>
          </Animated.View>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.85}
        >
          <Text style={styles.continueButtonText}>Continuer</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Flying icons overlay */}
      {activeIcons && (
        <View style={styles.flyingIconsContainer} pointerEvents="none">
          {/* Flying coins */}
          {activeIcons.coins.map((coin) => {
            const translateX = coin.progress.interpolate({
              inputRange: [0, 0.25, 1],
              outputRange: [70, coin.scatter.x, SCREEN_WIDTH / 2 - 45],
            });
            const translateY = coin.progress.interpolate({
              inputRange: [0, 0.25, 1],
              outputRange: [40, coin.scatter.y, -SCREEN_HEIGHT / 2 + 55],
            });
            const scale = coin.progress.interpolate({
              inputRange: [0, 0.1, 0.25, 1],
              outputRange: [0, 1.4, 1.2, 0.4],
            });
            const opacity = coin.progress.interpolate({
              inputRange: [0, 0.05, 0.9, 1],
              outputRange: [0, 1, 1, 0],
            });
            const rotate = coin.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '1440deg'],
            });

            return (
              <Animated.View
                key={coin.id}
                style={[
                  styles.flyingIcon,
                  {
                    transform: [{ translateX }, { translateY }, { scale }, { rotate }],
                    opacity,
                  },
                ]}
              >
                <GoldCoinIcon width={32} height={32} />
              </Animated.View>
            );
          })}

          {/* Flying XP potions */}
          {activeIcons.xp.map((xp) => {
            const translateX = xp.progress.interpolate({
              inputRange: [0, 0.25, 1],
              outputRange: [-70, xp.scatter.x, -SCREEN_WIDTH / 2 + 60],
            });
            const translateY = xp.progress.interpolate({
              inputRange: [0, 0.25, 1],
              outputRange: [40, xp.scatter.y, -SCREEN_HEIGHT / 2 + 55],
            });
            const scale = xp.progress.interpolate({
              inputRange: [0, 0.1, 0.25, 1],
              outputRange: [0, 1.4, 1.2, 0.4],
            });
            const opacity = xp.progress.interpolate({
              inputRange: [0, 0.05, 0.9, 1],
              outputRange: [0, 1, 1, 0],
            });

            return (
              <Animated.View
                key={xp.id}
                style={[
                  styles.flyingIcon,
                  {
                    transform: [{ translateX }, { translateY }, { scale }],
                    opacity,
                  },
                ]}
              >
                <PotionIcon width={32} height={32} />
              </Animated.View>
            );
          })}
        </View>
      )}
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
    fontSize: 38,
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

  flyingIconsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flyingIcon: {
    position: 'absolute',
  },
});
