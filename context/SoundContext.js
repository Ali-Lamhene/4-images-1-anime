import { Audio } from 'expo-av';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { getSettings } from '../utils/storage';

const SoundContext = createContext();

const SOUND_FILES = {
    click: require('../assets/sounds/click.wav'),
    failure: require('../assets/sounds/failure.wav'),
    levelup: require('../assets/sounds/levelup.wav'),
    reward: require('../assets/sounds/reward.wav'),
    success: require('../assets/sounds/success.wav'),
    start: require('../assets/sounds/start.wav'),
    reveal: require('../assets/sounds/reveal.wav'),
    back: require('../assets/sounds/back.wav'),
    hint: require('../assets/sounds/hint.wav'),
    switch: require('../assets/sounds/switch.wav'),
};

export const SoundProvider = ({ children }) => {
    const [soundsEnabled, setSoundsEnabled] = useState(true);
    const soundsRef = useRef({});

    useEffect(() => {
        const loadSettings = async () => {
            const settings = await getSettings();
            setSoundsEnabled(settings.sounds ?? true);
        };
        loadSettings();

        // Configure audio for the app
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: false,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            playThroughEarpieceAndroid: false,
        });

        // Preload sounds for better performance
        const preloadSounds = async () => {
            for (const [key, value] of Object.entries(SOUND_FILES)) {
                try {
                    const { sound } = await Audio.Sound.createAsync(value);
                    soundsRef.current[key] = sound;
                } catch (error) {
                    console.error(`Error loading sound ${key}:`, error);
                }
            }
        };

        preloadSounds();

        return () => {
            // Unload all sounds on unmount
            Object.values(soundsRef.current).forEach(sound => {
                sound.unloadAsync();
            });
        };
    }, []);

    const playSound = async (soundName) => {
        if (!soundsEnabled) return;

        try {
            const sound = soundsRef.current[soundName];
            if (sound) {
                // Use replayAsync to restart sound if it's already playing
                await sound.replayAsync();
            } else {
                const { sound: newSound } = await Audio.Sound.createAsync(SOUND_FILES[soundName]);
                await newSound.playAsync();
            }
        } catch (error) {
            console.error(`Error playing sound ${soundName}:`, error);
        }
    };

    const refreshSettings = async () => {
        const settings = await getSettings();
        setSoundsEnabled(settings.sounds ?? true);
    };

    return (
        <SoundContext.Provider value={{ playSound, soundsEnabled, refreshSettings }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};
