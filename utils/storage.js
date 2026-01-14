import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
    USER_DATA: 'user_data',
    CURRENT_ANIME_INDEX: 'current_anime_index',
    SETTINGS: 'settings',
    TUTORIAL_SEEN: 'tutorial_seen',
    REVEALED_IMAGES: 'revealed_images',
};

export const INITIAL_SETTINGS = {
    sounds: true,
    notifications: false,
    language: 'en',
    namingType: 'original',
};

export const INITIAL_USER = {
    coins: 0,
    xp: 0,
    level: 1,
};

export const saveUserData = async (userData) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
    } catch (error) {
        console.error('Error saving user data:', error);
    }
};

export const getUserData = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
        return data ? JSON.parse(data) : INITIAL_USER;
    } catch (error) {
        console.error('Error getting user data:', error);
        return INITIAL_USER;
    }
};

export const saveCurrentAnimeIndex = async (index) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.CURRENT_ANIME_INDEX, index.toString());
    } catch (error) {
        console.error('Error saving anime index:', error);
    }
};

export const getCurrentAnimeIndex = async () => {
    try {
        const index = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_ANIME_INDEX);
        return index !== null ? parseInt(index, 10) : 0;
    } catch (error) {
        console.error('Error getting anime index:', error);
        return 0;
    }
};

export const clearAllData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error('Error clearing storage:', error);
    }
};

export const saveSettings = async (settings) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
        console.error('Error saving settings:', error);
    }
};

export const getSettings = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
        return data ? JSON.parse(data) : INITIAL_SETTINGS;
    } catch (error) {
        console.error('Error getting settings:', error);
        return INITIAL_SETTINGS;
    }
};
export const saveTutorialSeen = async (seen) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.TUTORIAL_SEEN, JSON.stringify(seen));
    } catch (error) {
        console.error('Error saving tutorial status:', error);
    }
};

export const getTutorialSeen = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEYS.TUTORIAL_SEEN);
        return data ? JSON.parse(data) : false;
    } catch (error) {
        console.error('Error getting tutorial status:', error);
        return false;
    }
};

export const saveRevealedImages = async (revealed) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.REVEALED_IMAGES, JSON.stringify(revealed));
    } catch (error) {
        console.error('Error saving revealed images:', error);
    }
};

export const getRevealedImages = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEYS.REVEALED_IMAGES);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting revealed images:', error);
        return [];
    }
};
