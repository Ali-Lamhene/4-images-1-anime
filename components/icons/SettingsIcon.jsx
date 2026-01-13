import Svg, { Path } from 'react-native-svg';

export default function SettingsIcon({ width = 24, height = 24, color = "#FFF" }) {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M19.4 15V9L17.2 8.4C16.9 7.4 16.4 6.5 15.8 5.7L16.5 3.5L12.9 1.4L11.1 3.1C10.1 3 9.1 3 8.1 3.1L6.3 1.4L2.7 3.5L3.4 5.7C2.8 6.5 2.3 7.4 2 8.4L0 9V15L2.2 15.6C2.5 16.6 3 17.5 3.6 18.3L2.9 20.5L6.5 22.6L8.3 20.9C9.3 21 10.3 21 11.3 20.9L13.1 22.6L16.7 20.5L16 18.3C16.6 17.5 17.1 16.6 17.4 15.6L19.4 15Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
