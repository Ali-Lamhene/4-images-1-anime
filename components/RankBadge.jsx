import { useId } from 'react';
import { View } from 'react-native';
import Svg, {
    Circle,
    Defs,
    Ellipse,
    G,
    LinearGradient,
    Path,
    Polygon,
    RadialGradient,
    Rect,
    Stop
} from 'react-native-svg';

const BadgeBeginner = ({ size, idPrefix }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
            <LinearGradient id={`${idPrefix}_stoneGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#8E8E93" />
                <Stop offset="50%" stopColor="#636366" />
                <Stop offset="100%" stopColor="#3A3A3C" />
            </LinearGradient>
            <RadialGradient id={`${idPrefix}_woodGrad`} cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor="#A67C52" />
                <Stop offset="70%" stopColor="#8B5E3C" />
                <Stop offset="100%" stopColor="#5D3F28" />
            </RadialGradient>
        </Defs>&&
        {/* Outer Stone Ring with individual stones */}
        <G>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <Path
                    key={i}
                    d="M50 2 A48 48 0 0 1 84 16 L76 24 A36 36 0 0 0 50 14 Z"
                    fill={`url(#${idPrefix}_stoneGrad)`}
                    stroke="#2C2C2E"
                    strokeWidth="1"
                    transform={`rotate(${angle} 50 50)`}
                />
            ))}
        </G>
        {/* Inner Wood Circle */}
        <Circle cx="50" cy="50" r="35" fill={`url(#${idPrefix}_woodGrad)`} stroke="#3D2B1F" strokeWidth="3" />
        {/* Grain detail */}
        <Path d="M30 50 Q50 45 70 50" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        <Path d="M35 60 Q50 55 65 60" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        {/* Sprout Icon */}
        <G transform="translate(50, 50)">
            <Path d="M-5 5 Q0 -10 5 -5" fill="#4ADE80" />
            <Path d="M5 5 Q0 -8 -5 -2" fill="#22C55E" />
            <Rect x="-1" y="-2" width="2" height="10" fill="#714B23" rx="1" />
        </G>
    </Svg>
);

const BadgeNovice = ({ size, idPrefix }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
            <LinearGradient id={`${idPrefix}_bronze`} x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#CD7F32" />
                <Stop offset="50%" stopColor="#A0522D" />
                <Stop offset="100%" stopColor="#8B4513" />
            </LinearGradient>
        </Defs>
        <Path d="M10 50 Q5 30 25 35 Q10 40 15 60 Z" fill="#A0522D" />
        <Path d="M90 50 Q95 30 75 35 Q90 40 85 60 Z" fill="#A0522D" />
        <Path d="M30 20 L70 20 L75 50 Q75 80 50 90 Q25 80 25 50 Z" fill={`url(#${idPrefix}_bronze)`} stroke="#5D2E17" strokeWidth="2" />
        <Path d="M40 30 L60 30 L58 50 Q58 70 50 78 Q42 70 42 50 Z" fill="rgba(255,255,255,0.1)" />
        <Circle cx="50" cy="45" r="8" fill="#FDE047" opacity="0.8" />
    </Svg>
);

const BadgeAmateur = ({ size, idPrefix }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
            <LinearGradient id={`${idPrefix}_silver`} x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#F8F9FA" />
                <Stop offset="50%" stopColor="#ADB5BD" />
                <Stop offset="100%" stopColor="#495057" />
            </LinearGradient>
            <RadialGradient id={`${idPrefix}_gem`} cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor="#74C0FC" />
                <Stop offset="100%" stopColor="#1971C2" />
            </RadialGradient>
        </Defs>
        <G transform="translate(50,50)">
            <Polygon points="0,-48 12,-15 45,-12 18,12 25,45 0,25 -25,45 -18,12 -45,-12 -12,-15" fill={`url(#${idPrefix}_silver)`} stroke="#DEE2E6" strokeWidth="2" />
        </G>
        <Circle cx="50" cy="50" r="18" fill={`url(#${idPrefix}_gem)`} stroke="#1864AB" strokeWidth="1" />
        <Ellipse cx="45" cy="42" rx="5" ry="3" fill="white" opacity="0.4" transform="rotate(-30 45 42)" />
    </Svg>
);

const BadgeConnoisseur = ({ size, idPrefix }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
            <LinearGradient id={`${idPrefix}_gold`} x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#FDE047" />
                <Stop offset="45%" stopColor="#EAB308" />
                <Stop offset="55%" stopColor="#CA8A04" />
                <Stop offset="100%" stopColor="#854D0E" />
            </LinearGradient>
        </Defs>
        <Polygon points="50,5 92,28 92,72 50,95 8,72 8,28" fill={`url(#${idPrefix}_gold)`} stroke="#713F12" strokeWidth="2" />
        <Polygon points="50,15 82,32 82,68 50,85 18,68 18,32" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <Path d="M35 60 L30 40 L40 50 L50 35 L60 50 L70 40 L65 60 Z" fill="#713F12" opacity="0.8" />
        <Circle cx="50" cy="65" r="3" fill="#FDE047" />
    </Svg>
);

const BadgeExpert = ({ size, idPrefix }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
            <LinearGradient id={`${idPrefix}_expert`} x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#DDD6FE" />
                <Stop offset="50%" stopColor="#8B5CF6" />
                <Stop offset="100%" stopColor="#5B21B6" />
            </LinearGradient>
        </Defs>
        <G transform="translate(50,50)">
            <Polygon points="0,-45 15,-10 -15,-10" fill={`url(#${idPrefix}_expert)`} />
            <Polygon points="0,45 15,10 -15,10" fill={`url(#${idPrefix}_expert)`} transform="rotate(180)" />
            <Polygon points="40,20 10,15 15,-5" fill={`url(#${idPrefix}_expert)`} transform="rotate(45)" />
            <Polygon points="40,20 10,15 15,-5" fill={`url(#${idPrefix}_expert)`} transform="rotate(135)" />
            <Polygon points="40,20 10,15 15,-5" fill={`url(#${idPrefix}_expert)`} transform="rotate(225)" />
            <Polygon points="40,20 10,15 15,-5" fill={`url(#${idPrefix}_expert)`} transform="rotate(315)" />
            <Circle r="18" fill="#1E1B4B" stroke="#8B5CF6" strokeWidth="2" />
            <Path d="M-8 -5 L8 -5 L0 12 Z" fill="#DDD6FE" />
        </G>
    </Svg>
);

const BadgeMaster = ({ size, idPrefix }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
            <LinearGradient id={`${idPrefix}_master`} x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#67E8F9" />
                <Stop offset="50%" stopColor="#0891B2" />
                <Stop offset="100%" stopColor="#164E63" />
            </LinearGradient>
        </Defs>
        <Path d="M50 5 L85 20 L95 50 L85 80 L50 95 L15 80 L5 50 L15 20 Z" fill={`url(#${idPrefix}_master)`} stroke="#A5F3FC" strokeWidth="2" />
        <Circle cx="50" cy="50" r="15" fill="#ECFEFF" opacity="0.9" />
        <Circle cx="50" cy="50" r="12" fill={`url(#${idPrefix}_master)`} />
        <Rect x="48" y="42" width="4" height="16" fill="white" rx="2" />
    </Svg>
);

const BadgeLegend = ({ size, idPrefix }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
            <LinearGradient id={`${idPrefix}_legend`} x1="0%" y1="100%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#F43F5E" />
                <Stop offset="33%" stopColor="#F59E0B" />
                <Stop offset="66%" stopColor="#3B82F6" />
                <Stop offset="100%" stopColor="#8B5CF6" />
            </LinearGradient>
        </Defs>
        <Circle cx="50" cy="50" r="48" fill="none" stroke={`url(#${idPrefix}_legend)`} strokeWidth="1" strokeDasharray="2 4" />
        <G transform="translate(50,50)">
            <Polygon points="0,-42 35,0 0,42 -35,0" fill={`url(#${idPrefix}_legend)`} stroke="white" strokeWidth="1" />
            <Circle r="5" fill="white" />
        </G>
    </Svg>
);

export default function RankBadge({ level, size = 60, style }) {
    const rawId = useId();
    // Clean ID for standard CSS/SVG selector compatibility (remove colons)
    const idPrefix = `badge_${rawId.replace(/:/g, '')}`;

    const renderBadge = () => {
        const lvl = parseInt(level, 10) || 1;
        switch (lvl) {
            case 1: return <BadgeBeginner size={size} idPrefix={idPrefix} />;
            case 2: return <BadgeNovice size={size} idPrefix={idPrefix} />;
            case 3: return <BadgeAmateur size={size} idPrefix={idPrefix} />;
            case 4: return <BadgeConnoisseur size={size} idPrefix={idPrefix} />;
            case 5: return <BadgeExpert size={size} idPrefix={idPrefix} />;
            case 6: return <BadgeMaster size={size} idPrefix={idPrefix} />;
            case 7: return <BadgeLegend size={size} idPrefix={idPrefix} />;
            default: return <BadgeBeginner size={size} idPrefix={idPrefix} />;
        }
    };

    return (
        <View style={[{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }, style]}>
            {renderBadge()}
        </View>
    );
}
