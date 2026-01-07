import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

export default function PotionIcon({ width = 24, height = 24, style }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 48 48" style={style}>
            <Defs>
                {/* Green gradient for potion liquid */}
                <RadialGradient id="greenPotion" cx="50%" cy="40%" r="60%">
                    <Stop offset="0%" stopColor="#7FFF7F" />
                    <Stop offset="50%" stopColor="#3FD13F" />
                    <Stop offset="100%" stopColor="#2A9D2A" />
                </RadialGradient>

                {/* Glass gradient */}
                <RadialGradient id="glassGrad" cx="30%" cy="30%" r="70%">
                    <Stop offset="0%" stopColor="#E8F4F8" stopOpacity="0.9" />
                    <Stop offset="50%" stopColor="#B8D8E8" stopOpacity="0.7" />
                    <Stop offset="100%" stopColor="#8AACBE" stopOpacity="0.8" />
                </RadialGradient>

                {/* Shine effect */}
                <RadialGradient id="potionShine" cx="30%" cy="25%" r="40%">
                    <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <Stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.2" />
                    <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </RadialGradient>
            </Defs>

            {/* Bottle body - rounded flask shape */}
            <Path
                d="M18 10 L18 16 Q18 19 15 24 Q12 29 12 37 Q12 44 24 44 Q36 44 36 37 Q36 29 33 24 Q30 19 30 16 L30 10 Z"
                fill="url(#glassGrad)"
                stroke="#6E839A"
                strokeWidth="0.5"
            />

            {/* Green liquid inside */}
            <Path
                d="M16 26 Q14 31 14 37 Q14 42 24 42 Q34 42 34 37 Q34 31 32 26 Z"
                fill="url(#greenPotion)"
            />

            {/* Liquid surface with slight wave */}
            <Path
                d="M16 26 Q20 25 24 26 Q28 27 32 26 L32 27 Q28 28 24 27 Q20 26 16 27 Z"
                fill="#5FE15F"
                opacity="0.8"
            />

            {/* Bottle neck opening */}
            <Path
                d="M18 10 L30 10 L30 16 Q30 19 27 21 L21 21 Q18 19 18 16 Z"
                fill="url(#glassGrad)"
                stroke="#6E839A"
                strokeWidth="0.5"
            />

            {/* Glass shine effect */}
            <Path
                d="M18 10 L18 16 Q18 19 15 24 Q12 29 12 37 Q12 44 24 44 Q36 44 36 37 Q36 29 33 24 Q30 19 30 16 L30 10 Z"
                fill="url(#potionShine)"
            />

            {/* Bright highlight on glass */}
            <Path
                d="M19 16 Q19 19 18 21 Q16 24 16 29"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeLinecap="round"
            />

            {/* Small bubble in liquid */}
            <Path
                d="M21 37 Q21 36 22 36 Q23 36 23 37 Q23 38 22 38 Q21 38 21 37 Z"
                fill="#FFFFFF"
                opacity="0.4"
            />

            {/* Another small bubble */}
            <Path
                d="M27 32 Q27 31.5 27.5 31.5 Q28 31.5 28 32 Q28 32.5 27.5 32.5 Q27 32.5 27 32 Z"
                fill="#FFFFFF"
                opacity="0.5"
            />
        </Svg>
    );
}
