import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BackgroundTexture from '../components/BackgroundTexture';
import CustomSplashScreen from '../components/CustomSplashScreen';
import { LanguageProvider } from '../context/LanguageContext';
import { SoundProvider } from '../context/SoundContext';

// Prevent the native splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);

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
          </View>
        </SafeAreaProvider>
      </SoundProvider>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F14', // Match COLORS.primary
  }
});