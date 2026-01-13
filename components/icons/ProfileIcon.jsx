import Svg, { Circle, Path } from 'react-native-svg';

export default function ProfileIcon({ width = 24, height = 24, color = "#FFF" }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <Circle
                cx="12"
                cy="8"
                r="4"
                stroke={color}
                strokeWidth="1.5"
            />
        </Svg>
    );
}
