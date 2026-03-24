import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLastDailyRewardDate, saveLastDailyRewardDate, getUserData, saveUserData } from './storage';
import { DAILY_REWARD_COINS } from '../constants/game';

// Configure how notifications should be handled when the app is running
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const requestNotificationPermissions = async () => {
  if (!Device.isDevice) {
    return false;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return false;
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return true;
};

export const scheduleDailyChallengeNotification = async () => {
  try {
    const HAS_SCHEDULED_KEY = 'has_scheduled_notif';
    const alreadyDone = await AsyncStorage.getItem(HAS_SCHEDULED_KEY);
    
    // Si on l'a déjà fait une fois dans l'histoire de l'app sur ce tel, ON NE TOUCHE PLUS À RIEN
    if (alreadyDone === 'true') {
      console.log('Notifications déjà configurées historiquement. Passage.');
      return;
    }

    // Sinon, on fait un grand ménage de printemps
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.dismissAllNotificationsAsync();

    // On programme la notif récurrente
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Défis du jour ! 🎮",
        body: "Tes 60 pièces t'attendent en jeu ! 🏆",
        data: { type: 'daily_reward' },
        sound: true,
        priority: Notifications.AndroidNotificationPriority.MAX,
      },
      trigger: {
        hour: 9,
        minute: 5,
        repeats: true,
        channelId: 'default',
      },
    });

    // On marque comme fait POUR TOUJOURS
    await AsyncStorage.setItem(HAS_SCHEDULED_KEY, 'true');
    console.log('Notifications configurées pour la toute première fois.');
  } catch (error) {
    console.error('Error in extreme schedule logic:', error);
  }
};

export const checkAndGrantDailyReward = async () => {
  const lastRewardDate = await getLastDailyRewardDate();
  const today = new Date().toISOString().split('T')[0];

  if (lastRewardDate !== today) {
    const userData = await getUserData();
    const updatedUser = {
      ...userData,
      coins: (userData.coins || 0) + DAILY_REWARD_COINS,
      stats: {
        ...userData.stats,
        accumulatedCoins: (userData.stats?.accumulatedCoins || 0) + DAILY_REWARD_COINS,
      }
    };

    await saveUserData(updatedUser);
    await saveLastDailyRewardDate(today);
    
    return true; // Reward granted
  }

  return false; // No reward today (already claimed)
};
