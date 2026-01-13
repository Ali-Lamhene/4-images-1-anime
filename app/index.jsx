import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavBar from '../components/BottomNavBar';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { useTranslation } from '../context/LanguageContext';

const { width } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Background Decorative Glow */}
        <View style={styles.glow} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{t('title_top')}</Text>
          <View style={styles.subtitleRow}>
            <View style={styles.subtitleLine} />
            <Text style={styles.subtitle}>{t('title_bottom')}</Text>
            <View style={styles.subtitleLine} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => router.push('/play')}
            activeOpacity={0.9}
          >
            <Text style={styles.playButtonText}>{t('start_experience')}</Text>
            <View style={styles.buttonGlow} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{t('footer_text')}</Text>
        </View>
      </View>

      <BottomNavBar />
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
    paddingBottom: 80,
  },
  glow: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: COLORS.accent,
    opacity: 0.03,
    borderRadius: width,
    top: '15%',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: 12,
    textAlign: 'center',
    textShadowColor: 'rgba(184, 161, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 15,
  },
  subtitleLine: {
    width: 20,
    height: 1,
    backgroundColor: COLORS.accent,
    opacity: 0.3,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.accent,
    letterSpacing: 8,
    textAlign: 'center',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    gap: 15,
  },
  playButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: 22,
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  playButtonText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: 3,
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