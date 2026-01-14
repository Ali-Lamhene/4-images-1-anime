export const BADGES = [
    {
        id: 'first_guess',
        name: 'First Blood',
        desc: 'badge_first_guess_desc',
        requirement: (stats) => stats.totalFound >= 1,
    },
    {
        id: 'sharp_eye',
        name: 'Sharp Eye',
        desc: 'badge_sharp_eye_desc',
        requirement: (stats) => stats.perfectReveals >= 1,
    },
    {
        id: 'rising_star',
        name: 'Rising Star',
        desc: 'badge_rising_star_desc',
        requirement: (stats) => stats.totalFound >= 10,
    },
    {
        id: 'anime_scholar',
        name: 'Anime Scholar',
        desc: 'badge_anime_scholar_desc',
        requirement: (stats) => stats.totalFound >= 25,
    },
    {
        id: 'coin_collector',
        name: 'Coin Collector',
        desc: 'badge_coin_collector_desc',
        requirement: (stats) => stats.accumulatedCoins >= 500,
    },
    {
        id: 'wealthy_traveler',
        name: 'Wealthy Traveler',
        desc: 'badge_wealthy_traveler_desc',
        requirement: (stats) => stats.currentCoins >= 1000,
    },
    {
        id: 'streak_master',
        name: 'Streak Master',
        desc: 'badge_streak_master_desc',
        requirement: (stats) => stats.currentStreak >= 5,
    },
    {
        id: 'no_help_needed',
        name: 'No Help Needed',
        desc: 'badge_no_help_needed_desc',
        requirement: (stats) => stats.noHintStreak >= 5,
    },
    {
        id: 'fast_learner',
        name: 'Fast Learner',
        desc: 'badge_fast_learner_desc',
        requirement: (stats) => stats.level >= 10,
    },
    {
        id: 'anime_legend',
        name: 'Anime Legend',
        desc: 'badge_anime_legend_desc',
        requirement: (stats) => stats.completedAll === true,
    }
];
