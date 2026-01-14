import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, Pattern, RadialGradient, Rect, Stop } from 'react-native-svg';
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
                        <RadialGradient id="vignette" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%">
                            <Stop offset="0%" stopColor={COLORS.primary} stopOpacity="0" />
                            <Stop offset="100%" stopColor={COLORS.primary} stopOpacity="0.5" />
                        </RadialGradient>
                        <Pattern
                            id="persistent-dots"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                            patternUnits="userSpaceOnUse"
                        >
                            {/* Balanced opacity for visibility vs aesthetics */}
                            <Circle cx="2" cy="2" r="1.1" fill={COLORS.accent} opacity="0.28" />
                        </Pattern>
                    </Defs>
                    {/* Background Pattern */}
                    <Rect width="100%" height="100%" fill="url(#persistent-dots)" />
                    {/* Subtle Vignette Overlay */}
                    <Rect width="100%" height="100%" fill="url(#vignette)" />
                </Svg>
            </View>

            {/* Subtle Noise / Ambient simulation overlay */}
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
