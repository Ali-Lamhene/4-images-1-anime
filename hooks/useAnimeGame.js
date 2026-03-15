import { useState, useEffect } from 'react';
import * as Haptics from 'expo-haptics';
import { ANIME_DATA } from '../assets/data/data';
import { DEFAULT_REWARDS, HINT_COST } from '../constants/game';
import { calculateLevel, checkAnswer, normalizeString, shuffleLetters } from '../utils/gameUtils';
import { checkBadgeUnlocks } from '../utils/badgeUtils';
import {
  INITIAL_USER,
  getCurrentAnimeIndex,
  getRevealedImages,
  getSettings,
  getTutorialSeen,
  getUserData,
  saveCurrentAnimeIndex,
  saveRevealedImages,
  saveUserData
} from '../utils/storage';

export const useAnimeGame = (playSound) => {
    const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [user, setUser] = useState(INITIAL_USER);
    const [settings, setSettings] = useState(null);
    const [gameState, setGameState] = useState(null);
    const [revealedImages, setRevealedImages] = useState([]);
    const [potentialRewards, setPotentialRewards] = useState(DEFAULT_REWARDS);
    const [isError, setIsError] = useState(false);
    const [hintsUsedLevel, setHintsUsedLevel] = useState(0);
    const [rankUpLevel, setRankUpLevel] = useState(null);
    const [badgeQueue, setBadgeQueue] = useState([]);
    const [tutorialSeen, setTutorialSeen] = useState(true);

    // Initial Load
    useEffect(() => {
        const loadData = async () => {
            const savedUser = await getUserData();
            const savedIndex = await getCurrentAnimeIndex();
            const savedSettings = await getSettings();
            const seen = await getTutorialSeen();

            setUser(savedUser);
            setCurrentAnimeIndex(savedIndex);
            setSettings(savedSettings);
            setTutorialSeen(seen);

            if (savedIndex < ANIME_DATA.length) {
                initLevel(savedIndex, savedSettings, true);
            }
            setIsReady(true);
        };
        loadData();
    }, []);

    const initLevel = async (index, currentSettings, loadSavedReveals = false) => {
        const anime = ANIME_DATA[index];
        const namingType = currentSettings?.namingType || 'original';
        const preferredName = anime.names[namingType] || anime.names.original;
        
        let savedRevealed = [];
        if (loadSavedReveals) {
            savedRevealed = await getRevealedImages();
        }

        setGameState({
            currentAnime: anime,
            preferredName,
            selectedLetters: Array(normalizeString(preferredName).length).fill(null),
            availableLetters: shuffleLetters(preferredName).map(char => ({ char, used: false })),
        });

        setRevealedImages(savedRevealed);
        updateRewards(savedRevealed.length);
        setIsError(false);
        setHintsUsedLevel(0);
    };

    const updateRewards = (revealCount) => {
        const reductionFactor = revealCount * 0.25;
        setPotentialRewards({
            coins: Math.max(10, Math.floor(DEFAULT_REWARDS.coins * (1 - reductionFactor))),
            xp: Math.max(5, Math.floor(DEFAULT_REWARDS.xp * (1 - reductionFactor)))
        });
    };

    // Persistence Effects
    useEffect(() => {
        if (isReady) saveUserData(user);
    }, [user, isReady]);

    useEffect(() => {
        if (isReady) saveCurrentAnimeIndex(currentAnimeIndex);
    }, [currentAnimeIndex, isReady]);

    useEffect(() => {
        if (isReady) saveRevealedImages(revealedImages);
    }, [revealedImages, isReady]);

    // Validation
    useEffect(() => {
        if (gameState && gameState.selectedLetters.every(l => l !== null)) {
            if (checkAnswer(gameState.selectedLetters, gameState.preferredName)) {
                // Handled via state by play.jsx to show popup
            } else {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                setIsError(true);
            }
        }
    }, [gameState?.selectedLetters]);

    const handleLetterSelect = (letter, index) => {
        if (!gameState) return;
        const firstEmpty = gameState.selectedLetters.findIndex(l => l === null);
        if (firstEmpty === -1) return;
        if (isError) setIsError(false);
        
        const selectedLetters = [...gameState.selectedLetters];
        selectedLetters[firstEmpty] = letter;
        
        const availableLetters = [...gameState.availableLetters];
        availableLetters[index] = { ...availableLetters[index], used: true };
        
        setGameState({ ...gameState, selectedLetters, availableLetters });
    };

    const handleLetterRemove = (index) => {
        if (!gameState) return;
        const letter = gameState.selectedLetters[index];
        if (!letter) return;
        if (isError) setIsError(false);
        
        const selectedLetters = [...gameState.selectedLetters];
        selectedLetters[index] = null;
        
        const availableLetters = [...gameState.availableLetters];
        const restoreIndex = availableLetters.findIndex(item => item.char === letter && item.used);
        if (restoreIndex !== -1) {
            availableLetters[restoreIndex] = { ...availableLetters[restoreIndex], used: false };
        }
        
        setGameState({ ...gameState, selectedLetters, availableLetters });
    };

    const handleRevealImage = (index) => {
        if (revealedImages.includes(index)) return;
        if (playSound) playSound('reveal');
        
        const newRevealed = [...revealedImages, index];
        setRevealedImages(newRevealed);
        updateRewards(newRevealed.length);
    };

    const handleHintRequest = () => {
        if (!gameState || user.coins < HINT_COST) return;
        
        const correct = normalizeString(gameState.preferredName);
        const index = gameState.selectedLetters.findIndex(l => l === null);
        if (index === -1) return;
        
        const letter = correct[index];
        const letterIndex = gameState.availableLetters.findIndex(item => item.char === letter && !item.used);
        
        if (letterIndex !== -1) {
            if (playSound) playSound('hint');
            handleLetterSelect(letter, letterIndex);
            setHintsUsedLevel(prev => prev + 1);
            setUser(prev => ({
                ...prev,
                coins: prev.coins - HINT_COST,
                stats: { ...prev.stats, totalHintsUsed: (prev.stats?.totalHintsUsed || 0) + 1 }
            }));
        }
    };

    const handleContinue = () => {
        const nextIndex = currentAnimeIndex + 1;
        
        const isPerfect = revealedImages.length <= 1;
        const usedNoHints = hintsUsedLevel === 0;

        const newXP = user.xp + potentialRewards.xp;
        const newLevel = calculateLevel(newXP);
        
        const newStats = {
            ...(user.stats || INITIAL_USER.stats),
            perfectReveals: isPerfect ? (user.stats?.perfectReveals || 0) + 1 : (user.stats?.perfectReveals || 0),
            accumulatedCoins: (user.stats?.accumulatedCoins || 0) + potentialRewards.coins,
            currentStreak: (user.stats?.currentStreak || 0) + 1,
            noHintStreak: usedNoHints ? (user.stats?.noHintStreak || 0) + 1 : 0,
        };
        newStats.maxStreak = Math.max(newStats.currentStreak, user.stats?.maxStreak || 0);

        const updatedUser = {
            ...user,
            coins: user.coins + potentialRewards.coins,
            xp: newXP,
            level: newLevel,
            foundAnimes: [...(user.foundAnimes || []), gameState.currentAnime.id],
            stats: newStats
        };

        const newBadges = checkBadgeUnlocks(updatedUser, ANIME_DATA);
        if (newBadges.length > 0) {
            setBadgeQueue(prev => [...prev, ...newBadges]);
            updatedUser.unlockedBadges = [...(updatedUser.unlockedBadges || []), ...newBadges.map(b => b.id)];
        }

        if (newLevel > user.level) setRankUpLevel(newLevel);
        
        setUser(updatedUser);
        setCurrentAnimeIndex(nextIndex);

        if (nextIndex < ANIME_DATA.length) {
            initLevel(nextIndex, settings, false);
        }

        return nextIndex < ANIME_DATA.length;
    };

    const clearBadgeFromQueue = () => {
        setBadgeQueue(prev => prev.slice(1));
    };

    return {
        isReady,
        user,
        currentAnimeIndex,
        gameState,
        revealedImages,
        potentialRewards,
        isError,
        rankUpLevel,
        badgeQueue,
        tutorialSeen,
        setRankUpLevel,
        clearBadgeFromQueue,
        handleLetterSelect,
        handleLetterRemove,
        handleRevealImage,
        handleHintRequest,
        handleContinue
    };
};
