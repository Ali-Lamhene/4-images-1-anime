import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, {
    Circle,
    Defs,
    LinearGradient,
    Path,
    Stop
} from 'react-native-svg';
import { COLORS } from '../constants/colors';
import AnimeLegendsLogo from './AnimeLegendsLogo';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * APP ICON MOCKUP
 */
export const AppIconMockup = ({ size = 120 }) => (
    <View style={[styles.iconContainer, { width: size, height: size }]}>
        <Svg width={size * 0.8} height={size * 0.8} viewBox="0 0 100 100">
            <Defs>
                <LinearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor="#1C1C26" />
                    <Stop offset="100%" stopColor="#0F0F14" />
                </LinearGradient>
            </Defs>
            <Circle cx="50" cy="50" r="48" fill="url(#iconBg)" />
            <Path
                d="M50 15 L58 42 L85 50 L58 58 L50 85 L42 58 L15 50 L42 42 Z"
                fill={COLORS.accent}
            />
            <Path
                d="M35 45 L50 60 L65 45"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </Svg>
    </View>
);

/**
 * SPLASH SCREEN MOCKUP
 * Now uses the AnimeLegendsLogo (V1 typography) inside the splash
 */
export const SplashScreenMockup = () => (
    <View style={styles.splashContainer}>
        <View style={styles.splashInner}>
            <AppIconMockup size={140} />
            <View style={{ height: 40 }} />

            {/* Integrated V1 Logo styling for Splash */}
            <AnimeLegendsLogo size={300} showStar={false} />

            <View style={styles.loaderBar}>
                <View style={styles.loaderFill} />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#0F0F14',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(184, 161, 255, 0.2)',
        overflow: 'hidden',
        elevation: 8,
        shadowColor: COLORS.accent,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    splashContainer: {
        width: 320,
        height: 580,
        backgroundColor: '#0F0F14',
        borderRadius: 40,
        borderWidth: 8,
        borderColor: '#1A1A22',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    splashInner: {
        alignItems: 'center',
        width: '100%',
    },
    loaderBar: {
        width: 120,
        height: 2,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginTop: 20,
        borderRadius: 1,
    },
    loaderFill: {
        width: '60%',
        height: '100%',
        backgroundColor: COLORS.accent,
        borderRadius: 1,
    }
});
