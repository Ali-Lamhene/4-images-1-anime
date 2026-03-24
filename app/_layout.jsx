import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BackgroundTexture from '../components/ui/BackgroundTexture';
import CustomSplashScreen from '../components/branding/CustomSplashScreen';
import { LanguageProvider } from '../context/LanguageContext';
import { SoundProvider, useSound } from '../context/SoundContext';
import { 
  requestNotificationPermissions, 
  scheduleDailyChallengeNotification,
  checkAndGrantDailyReward 
} from '../utils/notificationService';
import DailyRewardPopup from '../components/popups/DailyRewardPopup';

// Prevent the native splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);
  const [showDailyReward, setShowDailyReward] = useState(false);

  useEffect(() => {
    // Simulate asset loading or initialization checks
    async function prepare() {
      try {
        // Here we could load fonts, api calls etc.
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsAppReady(true);
        // Hide native splash immediately so our CustomSplashScreen takes over
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isAppReady) {
    return null; // Native splash is still visible
  }

  return (
    <LanguageProvider>
      <SoundProvider>
        <MainLayout 
          showCustomSplash={showCustomSplash} 
          setShowCustomSplash={setShowCustomSplash}
          showDailyReward={showDailyReward}
          setShowDailyReward={setShowDailyReward}
        />
      </SoundProvider>
    </LanguageProvider>
  );
}

let isInitialized = false;

// Inner component to use SoundContext
function MainLayout({ showCustomSplash, setShowCustomSplash, showDailyReward, setShowDailyReward }) {
  const { playSound } = useSound();
  
  useEffect(() => {
    if (isInitialized) return;
    isInitialized = true;
    
    const init = async () => {
      // Setup Notifications
      const hasPermission = await requestNotificationPermissions();
      if (hasPermission) {
        await scheduleDailyChallengeNotification();
      }

      // Check Reward
      const granted = await checkAndGrantDailyReward();
      if (granted) {
        // Wait for splash to start hiding before showing popup
        setTimeout(() => {
          setShowDailyReward(true);
          playSound('reward');
        }, 1500);
      }
    };

    init();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <BackgroundTexture />

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
          }}
        />

        {showCustomSplash && (
          <CustomSplashScreen
            onFinish={() => setShowCustomSplash(false)}
          />
        )}

        <DailyRewardPopup 
          visible={showDailyReward}
          onClose={() => setShowDailyReward(false)}
          onCollect={() => {
            playSound('success');
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F14', // Match COLORS.primary
  }
});