import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Désactive le header par défaut pour toutes les pages
      }}
    />
  );
}