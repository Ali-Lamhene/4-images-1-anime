import { MaterialCommunityIcons } from '@expo/vector-icons';
import { forwardRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';

const Images = forwardRef(({ images, revealedImages = [], onReveal }, ref) => {
  return (
    <View ref={ref} style={styles.container}>
      <View style={styles.grid}>
        {images.slice(0, 4).map((imageUrl, index) => {
          const isRevealed = revealedImages.includes(index);

          return (
            <TouchableOpacity
              key={index}
              style={styles.imageCard}
              onPress={() => !isRevealed && onReveal(index)}
              activeOpacity={0.8}
              disabled={isRevealed}
            >
              <Image
                source={{ uri: imageUrl }}
                style={[styles.image, !isRevealed && styles.blurredImage]}
                resizeMode="cover"
              />

              {!isRevealed && (
                <View style={styles.hiddenOverlay}>
                  <MaterialCommunityIcons
                    name="gesture-tap"
                    size={32}
                    color="rgba(184, 161, 255, 0.8)"
                  />
                </View>
              )}

              <View style={styles.overlay} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});

export default Images;

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
    opacity: 0.9,
  },
  blurredImage: {
    opacity: 0,
  },
  hiddenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(26, 26, 34, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(184, 161, 255, 0.05)',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.imageOverlay,
  }
});