import React from 'react';
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

const StarIcon = ({ width = 24, height = 24, color = COLORS.accent }) => {
    // Generate unique IDs for gradients to prevent invisibility issues during navigation
    const uniqueId = React.useMemo(() => Math.random().toString(36).substring(2, 9), []);
    const starGlowId = `starGlow_${uniqueId}`;
    const starCoreId = `starCore_${uniqueId}`;

    return (
        <Svg width={width} height={height} viewBox="0 0 150 150">
            <Defs>
                <LinearGradient id={starGlowId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor={color} stopOpacity="0.8" />
                    <Stop offset="50%" stopColor={color} stopOpacity="0.3" />
                    <Stop offset="100%" stopColor="transparent" />
                </LinearGradient>
                <LinearGradient id={starCoreId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                    <Stop offset="100%" stopColor={color} stopOpacity="0.2" />
                </LinearGradient>
            </Defs>

            <G transform="translate(75, 75)">
                {/* Outer Glow */}
                <Path
                    d="M0 -75 L18 -18 L75 0 L18 18 L0 75 L-18 18 L-75 0 L-18 -18 Z"
                    fill={`url(#${starGlowId})`}
                    transform="scale(1)"
                />
                {/* Inner Core */}
                <Path
                    d="M0 -60 L12 -12 L60 0 L12 12 L0 60 L-12 12 L-60 0 L-12 -12 Z"
                    fill={`url(#${starCoreId})`}
                    opacity="0.8"
                />
            </G>
        </Svg>
    );
};

export default StarIcon;
