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
    const uniqueId = useMemo(() => Math.random().toString(36).substring(2, 9), []);
    const textGradId = `textGrad_${uniqueId}`;
    const starGlowId = `starGlow_${uniqueId}`;
    const starCoreId = `starCore_${uniqueId}`;

    // Optical centering adjustments
    // letterSpacing adds space AFTER each char, so we shift RIGHT by half that space
    const titleLetterSpacing = 12;
    const subtitleLetterSpacing = 18;
    const titleOffset = titleLetterSpacing / 2;
    const subtitleOffset = subtitleLetterSpacing / 2;

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
                            <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                            <Stop offset="100%" stopColor={COLORS.accent} stopOpacity="0" />
                        </LinearGradient>
                    </Defs>

                    {/* SHARP ICON STAR */}
                    {showStar && (
                        <G transform="translate(150, 85)">
                            <Path
                                d="M0 -80 L18 -18 L80 0 L18 18 L0 80 L-18 18 L-80 0 L-18 -18 Z"
                                fill={`url(#${starGlowId})`}
                                transform="scale(1.1)"
                                opacity="0.6"
                            />
                            <Path
                                d="M0 -65 L14 -14 L65 0 L14 14 L0 65 L-14 14 L-65 0 L-14 -14 Z"
                                fill={`url(#${starCoreId})`}
                                opacity="0.9"
                            />
                            <Path
                                d="M-15 -5 L0 10 L15 -5"
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth="4"
                                strokeLinecap="round"
                                opacity="0.8"
                                transform="translate(0, -5)"
                            />
                        </G>
                    )}

                    {/* Main Title: ANIME - Optically Centered with dx */}
                    <SvgText
                        fill={`url(#${textGradId})`}
                        fontSize="52"
                        fontWeight="900"
                        x="150"
                        y="95"
                        dx={titleOffset}
                        textAnchor="middle"
                        letterSpacing={titleLetterSpacing}
                        style={{
                            fontFamily: 'System',
                            textShadow: '0px 0px 20px rgba(184, 161, 255, 0.5)'
                        }}
                    >
                        ANIME
                    </SvgText>

                    {/* Subtitle: LEGENDS - Optically Centered with dx */}
                    <SvgText
                        fill="#EDEDED"
                        fontSize="24"
                        fontWeight="300"
                        x="150"
                        y="125"
                        dx={subtitleOffset}
                        textAnchor="middle"
                        letterSpacing={subtitleLetterSpacing}
                        opacity="0.9"
                        style={{
                            textShadow: '0px 0px 10px rgba(184, 161, 255, 0.3)'
                        }}
                    >
                        LEGENDS
                    </SvgText>

                    {/* Decorative Triangle */}
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
