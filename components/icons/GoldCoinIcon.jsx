import Svg, { Circle, Defs, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';

export default function GoldCoinIcon({ width = 24, height = 24, style }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 48 48" style={style}>
            <Defs>
                {/* Main gold gradient */}
                <RadialGradient id="goldMain" cx="40%" cy="35%" r="65%">
                    <Stop offset="0%" stopColor="#FFF9E6" />
                    <Stop offset="30%" stopColor="#FFE55C" />
                    <Stop offset="70%" stopColor="#FFD700" />
                    <Stop offset="100%" stopColor="#CC9900" />
                </RadialGradient>

                {/* Edge gradient for 3D effect */}
                <LinearGradient id="goldEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="#D4AF37" />
                    <Stop offset="50%" stopColor="#8B6914" />
                    <Stop offset="100%" stopColor="#D4AF37" />
                </LinearGradient>

                {/* Inner circle gradient */}
                <RadialGradient id="goldInner" cx="45%" cy="40%" r="60%">
                    <Stop offset="0%" stopColor="#FFF4A3" />
                    <Stop offset="40%" stopColor="#FFD700" />
                    <Stop offset="100%" stopColor="#DAA520" />
                </RadialGradient>

                {/* Shine effect */}
                <RadialGradient id="coinShine" cx="35%" cy="30%" r="45%">
                    <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <Stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.2" />
                    <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </RadialGradient>
            </Defs>

            {/* Shadow for depth */}
            <Circle cx="24" cy="25" r="16" fill="#8B6914" opacity="0.3" />

            {/* Main coin body */}
            <Circle cx="24" cy="24" r="16" fill="url(#goldMain)" />

            {/* Metallic rim */}
            <Circle cx="24" cy="24" r="16" fill="none" stroke="url(#goldEdge)" strokeWidth="1.2" />
            <Circle cx="24" cy="24" r="14.5" fill="none" stroke="#D4AF37" strokeWidth="0.6" opacity="0.6" />

            {/* Inner decorative circles */}
            <Circle cx="24" cy="24" r="13" fill="none" stroke="#CC9900" strokeWidth="0.3" opacity="0.4" />
            <Circle cx="24" cy="24" r="11" fill="url(#goldInner)" />

            {/* Star emblem in center */}
            <Path
                d="M24 18 L25.2 21.5 L29 21.5 L26 23.5 L27.2 27 L24 25 L20.8 27 L22 23.5 L19 21.5 L22.8 21.5 Z"
                fill="#FFE87C"
                stroke="#C68400"
                strokeWidth="0.6"
                strokeLinejoin="round"
            />

            {/* Star highlight */}
            <Path
                d="M24 18 L25.2 21.5 L29 21.5 L26 23.5 L27.2 27 L24 25 L20.8 27 L22 23.5 L19 21.5 L22.8 21.5 Z"
                fill="#FFFACD"
                opacity="0.5"
            />

            {/* Decorative dots around the edge */}
            <Circle cx="24" cy="10" r="0.8" fill="#C68400" />
            <Circle cx="34" cy="15" r="0.8" fill="#C68400" />
            <Circle cx="34" cy="33" r="0.8" fill="#C68400" />
            <Circle cx="14" cy="15" r="0.8" fill="#C68400" />
            <Circle cx="14" cy="33" r="0.8" fill="#C68400" />
            <Circle cx="24" cy="38" r="0.8" fill="#C68400" />

            {/* Top shine effect */}
            <Circle cx="24" cy="24" r="16" fill="url(#coinShine)" />

            {/* Bright sparkle on top left */}
            <Circle cx="19" cy="19" r="1.6" fill="#FFFFFF" opacity="0.9" />
            <Circle cx="19" cy="19" r="0.8" fill="#FFFFFF" />

            {/* Small sparkles */}
            <Circle cx="29" cy="21" r="0.8" fill="#FFFFFF" opacity="0.7" />
            <Circle cx="27" cy="29" r="0.6" fill="#FFFFFF" opacity="0.6" />
        </Svg>
    );
}
