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
import { useTranslation } from '../context/LanguageContext';
import { useSound } from '../context/SoundContext';
import GoldCoinIcon from './icons/GoldCoinIcon';
import PotionIcon from './icons/PotionIcon';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function VictoryPopup({ rewards, animeName, onContinue }) {
  const { t } = useTranslation();
  const { playSound } = useSound();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(20));
  const [activeIcons, setActiveIcons] = useState(null);

  useEffect(() => {
    playSound('success');
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleContinue = () => {
    playSound('click');
    setActiveIcons(null);

    setTimeout(() => {
      playSound('reward');
      const runId = Date.now();
      const coins = [...Array(10)].map((_, i) => ({
        id: `coin-${runId}-${i}`,
        progress: new Animated.Value(0),
        scatter: {
          x: 60 + (Math.random() * 60 - 30),
          y: 30 - (Math.random() * 30 + 30),
        }
      }));

      const xp = [...Array(6)].map((_, i) => ({
        id: `xp-${runId}-${i}`,
        progress: new Animated.Value(0),
        scatter: {
          x: -60 + (Math.random() * 60 - 30),
          y: 30 - (Math.random() * 30 + 30),
        }
      }));

      setActiveIcons({ coins, xp });

      const coinAnimations = coins.map((coin, index) => {
        return Animated.sequence([
          Animated.delay(index * 40),
          Animated.timing(coin.progress, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
          }),
        ]);
      });

      const xpAnimations = xp.map((item, index) => {
        return Animated.sequence([
          Animated.delay(index * 50),
          Animated.timing(item.progress, {
            toValue: 1,
            duration: 1600,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
          }),
        ]);
      });

      Animated.parallel([...coinAnimations, ...xpAnimations]).start();
    }, 20);

    setTimeout(() => {
      onContinue();
    }, 2000);
  };

  return (
    <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: slideAnim }] }
        ]}
      >
        <Text style={styles.title}>{t('success')}</Text>
        <Text style={styles.animeResult}>{animeName.toUpperCase()}</Text>
        <View style={styles.divider} />

        <View style={styles.rewardsRow}>
          <View style={styles.rewardItem}>
            <PotionIcon width={24} height={24} />
            <Text style={styles.rewardVal}>+{rewards.xp}</Text>
            <Text style={styles.rewardLab}>{t('experience')}</Text>
          </View>
          <View style={[styles.rewardItem, styles.rewardBorder]}>
            <GoldCoinIcon width={24} height={24} />
            <Text style={styles.rewardVal}>+{rewards.coins}</Text>
            <Text style={styles.rewardLab}>{t('credits')}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue} activeOpacity={0.8}>
          <Text style={styles.buttonText}>{t('continue')}</Text>
        </TouchableOpacity>
      </Animated.View>

      {activeIcons && (
        <View style={styles.flyingIconsContainer} pointerEvents="none">
          {activeIcons.coins.map((coin) => {
            const translateX = coin.progress.interpolate({
              inputRange: [0, 0.3, 1],
              outputRange: [60, coin.scatter.x, SCREEN_WIDTH / 2 - 40],
            });
            const translateY = coin.progress.interpolate({
              inputRange: [0, 0.3, 1],
              outputRange: [30, coin.scatter.y, -SCREEN_HEIGHT / 2 + 50],
            });
            const scale = coin.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.3],
            });
            const opacity = coin.progress.interpolate({
              inputRange: [0, 0.1, 0.9, 1],
              outputRange: [0, 1, 1, 0],
            });
            return (
              <Animated.View key={coin.id} style={[styles.flyingIcon, { transform: [{ translateX }, { translateY }, { scale }], opacity }]}>
                <GoldCoinIcon width={24} height={24} />
              </Animated.View>
            );
          })}
          {activeIcons.xp.map((xp) => {
            const translateX = xp.progress.interpolate({
              inputRange: [0, 0.3, 1],
              outputRange: [-60, xp.scatter.x, -SCREEN_WIDTH / 2 + 80],
            });
            const translateY = xp.progress.interpolate({
              inputRange: [0, 0.3, 1],
              outputRange: [30, xp.scatter.y, -SCREEN_HEIGHT / 2 + 50],
            });
            const scale = xp.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.3],
            });
            const opacity = xp.progress.interpolate({
              inputRange: [0, 0.1, 0.9, 1],
              outputRange: [0, 1, 1, 0],
            });
            return (
              <Animated.View key={xp.id} style={[styles.flyingIcon, { transform: [{ translateX }, { translateY }, { scale }], opacity }]}>
                <PotionIcon width={24} height={24} />
              </Animated.View>
            );
          })}
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 15, 20, 0.98)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xxl,
  },
  container: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: COLORS.secondary,
    padding: 40,
    alignItems: 'center',
    borderRadius: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textPrimary,
    letterSpacing: 8,
    marginBottom: 5,
  },
  animeResult: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.accent,
    letterSpacing: 2,
    marginBottom: 20,
    textAlign: 'center',
  },
  divider: {
    width: 20,
    height: 1,
    backgroundColor: COLORS.accent,
    marginBottom: 40,
  },
  rewardsRow: {
    flexDirection: 'row',
    marginBottom: 60,
    width: '100%',
  },
  rewardItem: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  rewardBorder: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.border,
  },
  rewardVal: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  rewardLab: {
    fontSize: 9,
    fontWeight: '400',
    color: COLORS.textSecondary,
    letterSpacing: 2,
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.accent,
    paddingVertical: 18,
    borderRadius: 2,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 4,
  },
  flyingIconsContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flyingIcon: {
    position: 'absolute',
  }
});
