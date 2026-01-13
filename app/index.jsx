import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>4 IMAGES</Text>
          <Text style={styles.subtitle}>UN ANIME</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => router.push('/play')}
            activeOpacity={0.8}
          >
            <Text style={styles.playButtonText}>COMMENCER L'EXPÉRIENCE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => { }}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryButtonText}>COLLECTIONS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>FOUR IMAGES • ONE ANIME</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.xxl,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: '600',
    color: COLORS.textPrimary,
    letterSpacing: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
    letterSpacing: 12,
    textAlign: 'center',
    fontWeight: '300',
  },
  divider: {
    height: 1,
    width: 30,
    backgroundColor: COLORS.accent,
    marginBottom: 60,
    opacity: 0.5,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    gap: 8,
  },
  playButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 2,
  },
  playButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textPrimary,
    letterSpacing: 2,
  },
  secondaryButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.textSecondary,
    letterSpacing: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  footerText: {
    fontSize: 9,
    color: COLORS.textSecondary,
    letterSpacing: 4,
    fontWeight: '300',
  }
});