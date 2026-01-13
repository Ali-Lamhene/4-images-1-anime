import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';

export default function Images({ images }) {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {images.slice(0, 4).map((imageUrl, index) => (
          <View key={index} style={styles.imageCard}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.overlay} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md, // Reduced vertical padding
    alignItems: 'center',
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 500, // Tablet constraint
  },
  imageCard: {
    // Force 2 per row: (Total Width - Gap) / 2
    width: '49%',
    aspectRatio: 1,
    backgroundColor: COLORS.secondary,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.imageOverlay,
  }
});