import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';
import AnimeLegendsLogo from './AnimeLegendsLogo';
import BackgroundTexture from './BackgroundTexture';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function CustomSplashScreen({ onFinish }) {
    const containerOpacity = useRef(new Animated.Value(1)).current; // For fading out the whole screen at the end

    // New animations for entrance
    const contentOpacity = useRef(new Animated.Value(0)).current;
    const contentScale = useRef(new Animated.Value(0.9)).current;

    const progressAnim = useRef(new Animated.Value(0)).current;
    const [isAnimationDone, setIsAnimationDone] = useState(false);

    useEffect(() => {
        // Sequence:
        // 1. Enter (Fade In + Scale Up)
        // 2. Load (Bar fills)
        // 3. Exit (Fade Out)

        Animated.sequence([
            // 1. Entrance
            Animated.parallel([
                Animated.timing(contentOpacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(contentScale, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                })
            ]),
            // 2. Loading Bar
            Animated.timing(progressAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false,
            }),
            // 3. Exit
            Animated.timing(containerOpacity, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            })
        ]).start(() => {
            setIsAnimationDone(true);
            if (onFinish) onFinish();
        });
    }, []);

    if (isAnimationDone) return null;

    const widthInterpolate = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <Animated.View style={[styles.container, { opacity: containerOpacity }]}>
            <BackgroundTexture />
            <Animated.View style={[
                styles.content,
                {
                    opacity: contentOpacity,
                    transform: [{ scale: contentScale }]
                }
            ]}>
                {/* Animated Logo */}
                <AnimeLegendsLogo size={260} showStar={true} />

                <View style={styles.loaderContainer}>
                    <View style={styles.loaderBar}>
                        <Animated.View
                            style={[
                                styles.loaderFill,
                                { width: widthInterpolate }
                            ]}
                        />
                    </View>
                </View>
            </Animated.View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject, // Covers the whole screen
        backgroundColor: COLORS.primary, // Matches app theme #0F0F14
        zIndex: 99999, // Stay on top of everything
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        gap: 40,
    },
    loaderContainer: {
        marginTop: 60,
        width: 200,
        alignItems: 'center',
    },
    loaderBar: {
        width: '100%',
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 2,
        overflow: 'hidden',
    },
    loaderFill: {
        height: '100%',
        backgroundColor: COLORS.accent,
        borderRadius: 2,
        shadowColor: COLORS.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    }
});
