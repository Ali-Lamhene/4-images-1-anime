import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants/colors';
import { SPACING } from '../constants/spacing';
import { SHADOWS } from '../constants/shadows';

const { width } = Dimensions.get('window');
const imageSize = (width - (SPACING.lg * 2) - SPACING.gapMd) / 2;

export default function Images({ images }) {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {images.slice(0, 4).map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.gapMd,
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    borderRadius: SPACING.radiusMd,
    overflow: 'hidden',
    backgroundColor: COLORS.secondary,
    ...SHADOWS.medium,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});