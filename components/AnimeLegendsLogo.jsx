import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, {
    Defs,
    G,
    LinearGradient,
    Path,
    Stop,
    Text as SvgText
} from 'react-native-svg';
import { COLORS } from '../constants/colors';

const AnimeLegendsLogo = ({ size = 280, showStar = true }) => {
    // Generate unique IDs for gradients to prevent invisibility issues during navigation
    const uniqueId = useMemo(() => Math.random().toString(36).substring(2, 9), []);
    const textGradId = `textGrad_${uniqueId}`;
    const starGlowId = `starGlow_${uniqueId}`;
    const starCoreId = `starCore_${uniqueId}`;

    return (
        <View style={[styles.container, { width: size, height: size * 0.6 }]}>
            <View>
                <Svg width={size} height={size * 0.6} viewBox="0 0 300 180">
                    <Defs>
                        <LinearGradient id={textGradId} x1="0%" y1="0%" x2="0%" y2="100%">
                            <Stop offset="0%" stopColor="#FFFFFF" />
                            <Stop offset="50%" stopColor={COLORS.accent} />
                            <Stop offset="100%" stopColor="#8A6EEF" />
                        </LinearGradient>

                        <LinearGradient id={starGlowId} x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor={COLORS.accent} stopOpacity="0.8" />
                            <Stop offset="50%" stopColor={COLORS.accent} stopOpacity="0.3" />
                            <Stop offset="100%" stopColor="transparent" />
                        </LinearGradient>

                        <LinearGradient id={starCoreId} x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
                            <Stop offset="100%" stopColor={COLORS.accent} stopOpacity="0" />
                        </LinearGradient>
                    </Defs>

                    {/* BACKGROUND STAR - Synchronized with icon (upright) */}
                    {showStar && (
                        <G transform="translate(150, 85)">
                            {/* Outer Glow */}
                            <Path
                                d="M0 -75 L18 -18 L75 0 L18 18 L0 75 L-18 18 L-75 0 L-18 -18 Z"
                                fill={`url(#${starGlowId})`}
                                transform="scale(1.2)"
                            />
                            {/* Inner Core */}
                            <Path
                                d="M0 -60 L12 -12 L60 0 L12 12 L0 60 L-12 12 L-60 0 L-12 -12 Z"
                                fill={`url(#${starCoreId})`}
                                opacity="0.6"
                            />
                        </G>
                    )}

                    {/* Main Title: ANIME */}
                    <SvgText
                        fill={`url(#${textGradId})`}
                        fontSize="52"
                        fontWeight="900"
                        x="150"
                        y="95"
                        textAnchor="middle"
                        letterSpacing="12"
                        style={{
                            fontFamily: 'System',
                            textShadow: '0px 0px 20px rgba(184, 161, 255, 0.5)'
                        }}
                    >
                        ANIME
                    </SvgText>

                    {/* Subtitle: LEGENDS */}
                    <SvgText
                        fill="#EDEDED"
                        fontSize="24"
                        fontWeight="300"
                        x="150"
                        y="125"
                        textAnchor="middle"
                        letterSpacing="18"
                        opacity="0.9"
                        style={{
                            textShadow: '0px 0px 10px rgba(184, 161, 255, 0.3)'
                        }}
                    >
                        LEGENDS
                    </SvgText>

                    {/* Decorative Triangle - Tightened */}
                    <G transform="translate(150, 138)">
                        <Path d="M-12 0 L12 0 L0 8 Z" fill={COLORS.accent} opacity="0.8" />
                    </G>
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AnimeLegendsLogo;
