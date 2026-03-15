import { useState, useEffect } from 'react';
import { saveTutorialSeen } from '../utils/storage';

export const useTutorial = (isReady, currentAnimeIndex, alreadySeen, refs) => {
    const [tutorialStep, setTutorialStep] = useState(0);
    const [tutorialActive, setTutorialActive] = useState(false);
    const [tutorialLayouts, setTutorialLayouts] = useState({});

    // Auto-trigger tutorial on first level
    useEffect(() => {
        if (isReady && currentAnimeIndex === 0 && !alreadySeen) {
            setTutorialStep(1);
            setTutorialActive(true);
        }
    }, [isReady, currentAnimeIndex, alreadySeen]);

    const captureLayout = (step, ref) => {
        if (ref && ref.current) {
            ref.current.measure((x, y, width, height, px, py) => {
                if (width > 0 && height > 0) {
                    setTutorialLayouts(prev => ({
                        ...prev,
                        [step]: { x: px, y: py, width, height }
                    }));
                }
            });
        }
    };

    // Measurement logic tied to step changes
    useEffect(() => {
        if (tutorialActive && tutorialStep >= 4 && refs) {
            const timer = setTimeout(() => {
                switch (tutorialStep) {
                    case 4: captureLayout(4, refs.rewards); break;
                    case 5: captureLayout(5, refs.images); break;
                    case 6: captureLayout(6, refs.keyboard); break;
                    case 7: captureLayout(7, refs.hint); break;
                }
            }, 60);
            return () => clearTimeout(timer);
        }
    }, [tutorialStep, tutorialActive, refs]);

    const nextStep = () => {
        if (tutorialStep < 7) {
            setTutorialStep(prev => prev + 1);
        } else {
            completeTutorial();
        }
    };

    const stopTutorial = () => {
        completeTutorial();
    };

    const completeTutorial = () => {
        setTutorialActive(false);
        saveTutorialSeen(true);
    };

    return {
        tutorialStep,
        tutorialActive,
        tutorialLayouts,
        nextStep,
        stopTutorial
    };
};
