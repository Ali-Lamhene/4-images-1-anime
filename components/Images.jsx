import { MaterialCommunityIcons } from '@expo/vector-icons';
import { forwardRef, useMemo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';

const Images = forwardRef(({ images, revealedImages = [], onReveal }, ref) => {
  // Pseudo-random generator to ensure consistent transforms for everyone
  const pseudoRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Generate stable random drastic transforms for each image
  const imageTransforms = useMemo(() => {
    return images.map((_, index) => {
      // Create a unique seed for this image position (using index + string length as simplistic seed)
      // Ideally, use anime ID if available, but consistent index is enough for stability across reloads
      const seed = (index + 1) * 123.45;

      // 1. MICROSCOPIC ZOOM: Scale between 5.0 and 9.5
      // This is practically pixel-peeping. Recognizability drops to near zero.
      const baseScale = 5.0 + pseudoRandom(seed) * 4.5; // Range: [5.0, 9.5]

      // 2. Heavy Distortion:
      // Aspect ratio can change by factor of 2 (0.5 to 1.5)
      // This turns circles into flat ovals.
      const stretchFactor = 0.5 + pseudoRandom(seed + 1) * 1.0;
      const scaleX = baseScale * stretchFactor;
      const scaleY = baseScale;

      // 3. Vertigo Rotation: +/- 60 degrees
      // Up becomes sideways/diagonal.
      const rotate = `${(pseudoRandom(seed + 2) * 120 - 60).toFixed(0)}deg`;

      // 4. Aggressive Panning:
      // With high scale, we can push the "center" (where the face usually is) completely off the view
      const minEffectiveScale = Math.min(scaleX, scaleY);
      // We can shift up to 98% of the available overflow
      const maxTranslate = ((minEffectiveScale - 1) / 2) * 98; // Use 98% of available overflow

      const translateX = (pseudoRandom(seed + 3) * 2 - 1) * maxTranslate;
      const translateY = (pseudoRandom(seed + 4) * 2 - 1) * maxTranslate;

      return {
        transform: [
          { translateX },
          { translateY },
          { scaleX },
          { scaleY },
          { rotate }
        ]
      };
    });
  }, [images]);

  return (
    <View ref={ref} style={styles.container}>
      <View style={styles.grid}>
        {images.slice(0, 4).map((imageUrl, index) => {
          const isRevealed = revealedImages.includes(index);
          const transformStyle = imageTransforms[index];

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
                style={[
                  styles.image,
                  !isRevealed && styles.blurredImage,
                  isRevealed && transformStyle // Apply extreme transform only when revealed
                ]}
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
    paddingVertical: 5, // Targeted reduction for tutorial visibility
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