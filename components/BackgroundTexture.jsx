import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, Pattern, Rect } from 'react-native-svg';
import { COLORS } from '../constants/colors';

export default function BackgroundTexture() {
    return (
        <View style={styles.container} pointerEvents="none">
            {/* Base Background (Solid color) */}
            <View style={[StyleSheet.absoluteFill, { backgroundColor: COLORS.primary }]} />

            {/* Decorative Glows (Atmospheric light) */}
            <View style={[styles.glow, { top: -80, left: -80, backgroundColor: COLORS.accent, opacity: 0.1 }]} />
            <View style={[styles.glow, { bottom: -80, right: -80, backgroundColor: COLORS.accent, opacity: 0.1 }]} />

            {/* Stylized Fine Dot Grid */}
            <View style={StyleSheet.absoluteFill}>
                <Svg height="100%" width="100%">
                    <Defs>
                        <Pattern
                            id="persistent-dots"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                            patternUnits="userSpaceOnUse"
                        >
                            {/* Very fine and sharp dots */}
                            <Circle cx="2" cy="2" r="1.1" fill={COLORS.accent} opacity="0.45" />
                        </Pattern>
                    </Defs>
                    <Rect width="100%" height="100%" fill="url(#persistent-dots)" />
                </Svg>
            </View>

            {/* Subtle Scanlines / Noise simulation overlay */}
            <View style={styles.overlay} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        backgroundColor: COLORS.primary,
        zIndex: -1,
    },
    glow: {
        position: 'absolute',
        width: 450,
        height: 450,
        borderRadius: 225,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15, 15, 20, 0.1)',
    }
});
