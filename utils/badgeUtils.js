import { BADGES } from '../constants/badges';

/**
 * Checks if any new badges should be unlocked based on current user data
 * @param {Object} userData Current user data
 * @param {Array} animeData All anime data (for total count)
 * @returns {Array} List of newly unlocked badge objects
 */
export const checkBadgeUnlocks = (userData, animeData = []) => {
    const unlockedIds = userData.unlockedBadges || [];
    const newUnlocks = [];

    // Prepare stats object for requirements check
    const stats = {
        totalFound: userData.foundAnimes?.length || 0,
        perfectReveals: userData.stats?.perfectReveals || 0,
        accumulatedCoins: userData.stats?.accumulatedCoins || 0,
        currentCoins: userData.coins || 0,
        currentStreak: userData.stats?.maxStreak || 0,
        noHintStreak: userData.stats?.noHintStreak || 0,
        level: userData.level || 1,
        completedAll: (userData.foundAnimes?.length || 0) >= animeData.length && animeData.length > 0
    };

    BADGES.forEach(badge => {
        if (!unlockedIds.includes(badge.id)) {
            if (badge.requirement(stats)) {
                newUnlocks.push(badge);
            }
        }
    });

    return newUnlocks;
};
