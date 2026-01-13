import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LanguageProvider } from '../context/LanguageContext';

export default function RootLayout() {
  return (
    <LanguageProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaProvider>
    </LanguageProvider>
  );
}