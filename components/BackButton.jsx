import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSound } from '../context/SoundContext';

export default function BackButton() {
  const router = useRouter();
  const { playSound } = useSound();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => {
        playSound('back');
        router.back();
      }}
    >
      <Text style={styles.backIcon}>←</Text>
      <Text style={styles.backText}>Retour</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    alignSelf: 'flex-start',
    margin: 15,
  },
  backIcon: {
    fontSize: 24,
    color: '#4A90E2',
    marginRight: 5,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
});