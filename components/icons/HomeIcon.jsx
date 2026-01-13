import Svg, { Path } from 'react-native-svg';

export default function HomeIcon({ width = 24, height = 24, color = "#FFF" }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9 21V12H15V21"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
