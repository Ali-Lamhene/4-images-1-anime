import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { RANKS } from '../constants/game';

export default function GameHeader({ user, showBackButton = false }) {
  const router = useRouter();
  const currentRank = RANKS.find(rank => rank.level === user.level) || RANKS[0];
  const nextRank = RANKS.find(rank => rank.level === user.level + 1);
  
  const xpProgress = nextRank 
    ? ((user.xp - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100
    : 100;

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backIcon}>←</Text>
          <Text style={styles.backText}>Retour</Text>
        </TouchableOpacity>
      )}

      <View style={styles.topRow}>
        <View style={styles.coinsContainer}>
          <Text style={styles.coinIcon}>🪙</Text>
          <Text style={styles.coinsText}>{user.coins}</Text>
        </View>
        
        <View style={styles.rankContainer}>
          <Text style={styles.rankBadge}>⭐</Text>
          <Text style={styles.rankText}>{currentRank.name}</Text>
        </View>
      </View>

      <View style={styles.xpContainer}>
        <View style={styles.xpBarBackground}>
          <View style={[styles.xpBarFill, { width: `${xpProgress}%` }]} />
        </View>
        <Text style={styles.xpText}>
          {user.xp} / {nextRank ? nextRank.minXP : currentRank.minXP} XP
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  backIcon: {
    fontSize: 24,
    color: '#4A90E2',
    marginRight: 5,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  coinIcon: {
    fontSize: 20,
    marginRight: 5,
  },
  coinsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F4FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  rankBadge: {
    fontSize: 18,
    marginRight: 5,
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  xpContainer: {
    marginTop: 5,
  },
  xpBarBackground: {
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 5,
  },
  xpBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 6,
  },
  xpText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});