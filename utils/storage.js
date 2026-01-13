import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
    USER_DATA: 'user_data',
    CURRENT_ANIME_INDEX: 'current_anime_index',
    SETTINGS: 'settings',
};

export const INITIAL_SETTINGS = {
    sounds: true,
    notifications: false,
    language: 'en',
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
