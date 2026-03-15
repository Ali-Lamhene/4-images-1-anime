import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoldCoinIcon from './icons/GoldCoinIcon';
import PotionIcon from './icons/PotionIcon';
import { COLORS } from '../constants/colors';
import { useGame } from '../context/GameContext';

const StageIndicator = ({ t }) => {
    const { currentAnimeIndex, potentialRewards } = useGame();
    
    return (
        <View style={styles.stageIndicator}>
            <View style={styles.stageContent}>
                <Text style={styles.stageText}>{t('current_stage', { n: currentAnimeIndex + 1 })}</Text>
                <View style={styles.rewardIndicator}>
                    <View style={styles.stageLine} />
                    <View style={styles.rewardBadge}>
                        <GoldCoinIcon width={10} height={10} />
                        <Text style={styles.rewardBadgeText}>{potentialRewards.coins}</Text>
                    </View>
                    <View style={styles.rewardBadge}>
                        <PotionIcon width={10} height={10} />
                        <Text style={styles.rewardBadgeText}>{potentialRewards.xp}</Text>
                    </View>
                    <View style={styles.stageLine} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    stageIndicator: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 15, 
        marginBottom: 10 
    },
    stageContent: { 
        alignItems: 'center', 
        gap: 10 
    },
    stageText: { 
        fontSize: 10, 
        fontWeight: '700', 
        color: COLORS.accent, 
        letterSpacing: 4 
    },
    rewardIndicator: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10 
    },
    stageLine: { 
        height: 1, 
        width: 30, 
        backgroundColor: COLORS.accent, 
        opacity: 0.2 
    },
    rewardBadge: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 4, 
        backgroundColor: 'rgba(184, 161, 255, 0.1)', 
        paddingHorizontal: 8, 
        paddingVertical: 2, 
        borderRadius: 10 
    },
    rewardBadgeText: { 
        fontSize: 9, 
        color: COLORS.textPrimary, 
        fontWeight: '700' 
    },
});

export default StageIndicator;
