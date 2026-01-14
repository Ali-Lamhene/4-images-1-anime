import { useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, G, LinearGradient, Path, Polygon, RadialGradient, Rect, Stop, Text } from 'react-native-svg';
import { COLORS } from '../constants/colors';

const BadgeIcon = ({ id, size = 100, locked = false }) => {
    const idPrefix = useMemo(() => Math.random().toString(36).substr(2, 9), [id]);

    const getColors = () => {
        if (locked) return {
            primary: '#1A1A22',
            secondary: '#333333',
            accent: '#444444',
            stops: ['#333333', '#1A1A22', '#111118']
        };

        switch (id) {
            case 'anime_legend':
                return {
                    primary: '#FFD700',
                    secondary: '#FFA500',
                    accent: '#FFFFFF',
                    stops: ['#FDE047', '#EAB308', '#854D0E']
                };
            case 'streak_master':
            case 'sharp_eye':
                return {
                    primary: COLORS.accent,
                    secondary: '#9179ff',
                    accent: '#FFFFFF',
                    stops: ['#DDD6FE', COLORS.accent, '#5B21B6']
                };
            case 'wealthy_traveler':
            case 'coin_collector':
                return {
                    primary: '#FDE047',
                    secondary: '#CA8A04',
                    accent: '#FFFFFF',
                    stops: ['#FFF9C4', '#FBC02D', '#F9A825']
                };
            case 'anime_scholar':
                return {
                    primary: '#67E8F9',
                    secondary: '#0891B2',
                    accent: '#FFFFFF',
                    stops: ['#CFFAFE', '#06B6D4', '#164E63']
                };
            default:
                return {
                    primary: '#E0E0E0',
                    secondary: '#BDBDBD',
                    accent: '#FFFFFF',
                    stops: ['#F8F9FA', '#ADB5BD', '#495057']
                };
        }
    };

    const palette = getColors();

    const renderIconContent = () => {
        const iconGradId = `iconGrad-${idPrefix}`;
        switch (id) {
            case 'first_guess':
                return (
                    <G transform="translate(30, 30) scale(0.4)">
                        <Path d="M50 10 L90 90 L50 70 L10 90 Z" fill={`url(#${iconGradId})`} stroke={palette.primary} strokeWidth="4" />
                        <Circle cx="50" cy="45" r="10" fill="white" opacity="0.5" />
                    </G>
                );
            case 'sharp_eye':
                return (
                    <G transform="translate(25, 25) scale(0.5)">
                        <Path d="M10 50 Q50 10 90 50 Q50 90 10 50" stroke={`url(#${iconGradId})`} strokeWidth="6" fill="none" />
                        <Circle cx="50" cy="50" r="15" fill={`url(#${iconGradId})`} />
                        <Circle cx="45" cy="45" r="5" fill="white" opacity="0.6" />
                    </G>
                );
            case 'rising_star':
                return (
                    <G transform="translate(30,30) scale(0.4)">
                        <Polygon points="50,5 63,35 95,35 70,55 80,85 50,65 20,85 30,55 5,35 37,35" fill={`url(#${iconGradId})`} stroke={palette.primary} strokeWidth="3" />
                    </G>
                );
            case 'anime_scholar':
                return (
                    <G transform="translate(28, 28) scale(0.45)">
                        <Rect x="15" y="20" width="70" height="55" rx="5" fill={`url(#${iconGradId})`} stroke={palette.primary} strokeWidth="4" />
                        <Path d="M15 45 H85 M15 35 H85 M15 55 H85" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
                        <Path d="M50 20 V75" stroke={palette.primary} strokeWidth="2" opacity="0.3" />
                    </G>
                );
            case 'coin_collector':
                return (
                    <G transform="translate(30, 30) scale(0.4)">
                        <Circle cx="50" cy="50" r="40" fill={`url(#${iconGradId})`} stroke={palette.primary} strokeWidth="4" />
                        <Text x="50" y="65" textAnchor="middle" fontSize="40" fontWeight="900" fill={palette.secondary}>C</Text>
                    </G>
                );
            case 'wealthy_traveler':
                return (
                    <G transform="translate(28, 28) scale(0.45)">
                        <Path d="M20 30 V70 Q50 90 80 70 V30 Q50 10 20 30" fill={`url(#${iconGradId})`} stroke={palette.primary} strokeWidth="4" />
                        <Path d="M35 45 H65 M35 55 H65" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                    </G>
                );
            case 'streak_master':
                return (
                    <G transform="translate(30, 25) scale(0.4)">
                        <Path d="M40 90 L70 40 L45 40 L60 10" stroke={`url(#${iconGradId})`} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <Path d="M40 90 L70 40 L45 40 L60 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
                    </G>
                );
            case 'no_help_needed':
                return (
                    <G transform="translate(30, 30) scale(0.4)">
                        <Circle cx="50" cy="50" r="40" stroke={`url(#${iconGradId})`} strokeWidth="8" fill="none" />
                        <Path d="M30 50 L45 65 L70 35" stroke={`url(#${iconGradId})`} strokeWidth="8" strokeLinecap="round" fill="none" />
                    </G>
                );
            case 'fast_learner':
                return (
                    <G transform="translate(28, 28) scale(0.45)">
                        <Path d="M50 10 L90 80 H10 Z" fill="none" stroke={`url(#${iconGradId})`} strokeWidth="6" />
                        <Path d="M50 30 V65 M50 75 V75" stroke={`url(#${iconGradId})`} strokeWidth="6" strokeLinecap="round" />
                    </G>
                );
            case 'anime_legend':
                return (
                    <G transform="translate(25, 25) scale(0.5)">
                        <Path d="M50 5 L90 25 V75 L50 95 L10 75 V25 Z" fill={`url(#${iconGradId})`} stroke="white" strokeWidth="2" />
                        <Circle cx="50" cy="50" r="20" fill="rgba(255,255,255,0.2)" />
                        <Path d="M40 50 L47 57 L60 43" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
                    </G>
                );
            default:
                return <Circle cx="50" cy="50" r="20" fill={`url(#${iconGradId})`} />;
        }
    };

    return (
        <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
            <Svg width={size} height={size} viewBox="0 0 100 100">
                <Defs>
                    <LinearGradient id={`mainGrad-${idPrefix}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <Stop offset="0%" stopColor={palette.stops[0]} stopOpacity={locked ? 0.4 : 1} />
                        <Stop offset="50%" stopColor={palette.stops[1]} stopOpacity={locked ? 0.2 : 1} />
                        <Stop offset="100%" stopColor={palette.stops[2]} stopOpacity={locked ? 0.1 : 1} />
                    </LinearGradient>
                    <RadialGradient id={`innerGlow-${idPrefix}`} cx="50%" cy="40%" r="50%">
                        <Stop offset="0%" stopColor={palette.accent} stopOpacity={locked ? 0.05 : 0.4} />
                        <Stop offset="100%" stopColor={palette.primary} stopOpacity="0" />
                    </RadialGradient>
                    <LinearGradient id={`iconGrad-${idPrefix}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0%" stopColor={palette.accent} stopOpacity={locked ? 0.2 : 1} />
                        <Stop offset="100%" stopColor={palette.primary} stopOpacity={locked ? 0.1 : 0.7} />
                    </LinearGradient>
                </Defs>

                <G opacity={locked ? 0.6 : 1}>
                    {/* Outer Frame */}
                    <Path
                        d="M50 2 L92 20 V50 C92 75 50 98 50 98 C50 98 8 75 8 50 V20 L50 2Z"
                        fill="#0F0F14"
                        stroke={`url(#mainGrad-${idPrefix})`}
                        strokeWidth="1.5"
                    />

                    {/* Main Shield Body */}
                    <Path
                        d="M50 7 L86 24 V50 C86 70 50 92 50 92 C50 92 14 70 14 50 V24 L50 7Z"
                        fill={`url(#mainGrad-${idPrefix})`}
                    />

                    {/* Inner Decorative Bezel */}
                    <Path
                        d="M50 12 L80 27 V48 C80 65 50 85 50 85 C50 85 20 65 20 48 V27 L50 12Z"
                        fill="rgba(0,0,0,0.15)"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                    />

                    {/* Atmospheric Glow */}
                    <Path
                        d="M50 7 L86 24 V50 C86 70 50 92 50 92 C50 92 14 70 14 50 V24 L50 7Z"
                        fill={`url(#innerGlow-${idPrefix})`}
                    />

                    {/* Decorative details (bolts/studs) */}
                    <Circle cx="50" cy="15" r="1.5" fill="white" opacity="0.3" />
                    <Circle cx="80" cy="28" r="1.5" fill="white" opacity="0.3" />
                    <Circle cx="20" cy="28" r="1.5" fill="white" opacity="0.3" />

                    {/* The Icon */}
                    {renderIconContent()}
                </G>
            </Svg>
        </View>
    );
};

export default BadgeIcon;
