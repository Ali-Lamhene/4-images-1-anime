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
        id: 'eagle_eye',
        name: 'Eagle Eye',
        desc: 'badge_eagle_eye_desc',
        requirement: (stats) => stats.perfectReveals >= 10,
    },
    {
        id: 'silent_sage',
        name: 'Silent Sage',
        desc: 'badge_silent_sage_desc',
        requirement: (stats) => stats.noHintStreak >= 15,
    },
    {
        id: 'master_weeb',
        name: 'Master Weeb',
        desc: 'badge_master_weeb_desc',
        requirement: (stats) => stats.totalFound >= 50,
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
