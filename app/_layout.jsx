import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BackgroundTexture from '../components/BackgroundTexture';
import { LanguageProvider } from '../context/LanguageContext';
import { SoundProvider } from '../context/SoundContext';

export default function RootLayout() {
  return (
    <LanguageProvider>
      <SoundProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <BackgroundTexture />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: 'transparent' }, // Transparent background for stack screens
              }}
            />
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