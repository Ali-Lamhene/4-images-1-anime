import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>4 Images 1 Anime</Text>
      <Text style={styles.subtitle}>Devinez l'anime à partir de 4 images !</Text>
      
      <TouchableOpacity 
        style={styles.playButton}
        onPress={() => router.push('/play')}
      >
        <Text style={styles.playButtonText}>Jouer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#4A90E2',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  playButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  playButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});