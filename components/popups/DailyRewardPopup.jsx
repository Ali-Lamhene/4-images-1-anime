import React, { useEffect, useState, useRef } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions, Easing } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';
import { DAILY_REWARD_COINS } from '../../constants/game';
import { COLORS } from '../../constants/colors';

const { width, height } = Dimensions.get('screen');

const DailyRewardPopup = ({ visible, onClose, onCollect }) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      setAnimationStarted(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();

      // Subtle pulse for the icon
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      setAnimationStarted(false);
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.8);
    }
  }, [visible]);

  const handleCollect = () => {
    if (onCollect) onCollect();
    
    // Close with animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <Animated.View 
          style={[
            styles.container,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <BlurView intensity={60} tint="dark" style={styles.blurContainer}>
            <View style={styles.content}>
              {/* Header */}
              <Text style={styles.headerTitle}>CADEAU QUOTIDIEN</Text>
              
              <View style={styles.divider} />

              {/* Icon Section */}
              <View style={styles.iconWrapper}>
                <View style={styles.glow} />
                <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                  <Ionicons name="gift-outline" size={80} color={COLORS.accent} />
                </Animated.View>
              </View>

              {/* Reward Info */}
              <View style={styles.rewardContainer}>
                <Text style={styles.rewardAmount}>+{DAILY_REWARD_COINS}</Text>
                <Text style={styles.rewardText}>PIÈCES D'OR</Text>
              </View>

              <Text style={styles.description}>
                Reviens demain pour un nouveau cadeau et de nouveaux défis !
              </Text>

              {/* Button */}
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleCollect}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>RÉCUPÉRER</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Animated.View>

        {animationStarted && (
          <ConfettiCannon
            count={50}
            origin={{ x: width / 2, y: height / 3 }}
            autoStart={true}
            fadeOut={true}
            fallSpeed={3000}
            colors={[COLORS.accent, '#FFFFFF', '#0F0F14']}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.85,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.2)',
  },
  blurContainer: {
    padding: 24,
    backgroundColor: 'rgba(26, 26, 34, 0.8)',
  },
  content: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    fontFamily: 'Outfit-Bold',
    color: 'rgba(255, 255, 255, 0.6)',
    letterSpacing: 3,
    marginBottom: 12,
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: COLORS.accent,
    marginBottom: 24,
  },
  iconWrapper: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  glow: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.accent,
    opacity: 0.15,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 20,
  },
  rewardContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  rewardAmount: {
    fontSize: 48,
    fontFamily: 'Outfit-Black',
    color: '#FFFFFF',
    textShadowColor: 'rgba(184, 161, 255, 0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  rewardText: {
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
    color: COLORS.accent,
    letterSpacing: 2,
    marginTop: -4,
  },
  description: {
    fontSize: 13,
    fontFamily: 'Outfit-Regular',
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
    marginBottom: 24,
  },
  button: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#0F0F14',
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
    letterSpacing: 1,
  },
});

export default DailyRewardPopup;
