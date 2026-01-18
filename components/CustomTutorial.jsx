import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Modal, StyleSheet, View } from 'react-native';
import Svg, { Defs, Mask, Rect } from 'react-native-svg';
import { TutorialTooltip } from './TutorialTooltip';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const CustomTutorial = ({
    isVisible,
    step,
    layout,
    onNext,
    onStop,
    t,
    isFirstStep,
    isLastStep
}) => {
    const spotX = useRef(new Animated.Value(0)).current;
    const spotY = useRef(new Animated.Value(0)).current;
    const spotW = useRef(new Animated.Value(0)).current;
    const spotH = useRef(new Animated.Value(0)).current;
    const spotOpacity = useRef(new Animated.Value(0)).current;
    const tooltipOpacity = useRef(new Animated.Value(0)).current;
    const [displayStep, setDisplayStep] = useState(step);

    useEffect(() => {
        if (!isVisible) {
            spotWeight(0, 0, 0, 0, 0, 0);
            return;
        }

        const needsLayout = step >= 4;

        if (needsLayout) {
            if (layout) {
                Animated.parallel([
                    Animated.timing(spotX, { toValue: layout.x - 8, duration: 400, useNativeDriver: false }),
                    Animated.timing(spotY, { toValue: layout.y - 8, duration: 400, useNativeDriver: false }),
                    Animated.timing(spotW, { toValue: layout.width + 16, duration: 400, useNativeDriver: false }),
                    Animated.timing(spotH, { toValue: layout.height + 16, duration: 400, useNativeDriver: false }),
                    Animated.timing(spotOpacity, { toValue: 1, duration: 300, useNativeDriver: false }),
                ]).start();

                setDisplayStep(step);
                Animated.timing(tooltipOpacity, { toValue: 1, duration: 300, useNativeDriver: true }).start();
            } else {
                Animated.timing(tooltipOpacity, { toValue: 0, duration: 150, useNativeDriver: true }).start();
                Animated.timing(spotOpacity, { toValue: 0, duration: 150, useNativeDriver: false }).start();
            }
        } else {
            Animated.timing(spotOpacity, { toValue: 0, duration: 200, useNativeDriver: false }).start();
            setDisplayStep(step);
            Animated.timing(tooltipOpacity, { toValue: 1, duration: 300, useNativeDriver: true }).start();
        }
    }, [isVisible, step, layout]);

    const spotWeight = (x, y, w, h, opacity, tooltipOp) => {
        spotX.setValue(x);
        spotY.setValue(y);
        spotW.setValue(w);
        spotH.setValue(h);
        spotOpacity.setValue(opacity);
        tooltipOpacity.setValue(tooltipOp);
    }

    if (!isVisible) return null;

    // Enhanced Tooltip Positioning
    let tooltipTop = SCREEN_HEIGHT / 2 - 100;
    if (layout && layout.width > 0) {
        const spaceBelow = SCREEN_HEIGHT - (layout.y + layout.height);
        const spaceAbove = layout.y;

        const TOOLTIP_HEIGHT = 220; // Estimated height including margin

        if (spaceBelow > TOOLTIP_HEIGHT) {
            // Priority 1: Below the element
            tooltipTop = layout.y + layout.height + 20;
        } else if (spaceAbove > TOOLTIP_HEIGHT) {
            // Priority 2: Above the element
            tooltipTop = layout.y - TOOLTIP_HEIGHT - 10;
        } else {
            // Priority 3: Case where element is huge (like images grid)
            // Push it to the side with more space, and slightly overlap if necessary
            tooltipTop = spaceBelow > spaceAbove
                ? SCREEN_HEIGHT - TOOLTIP_HEIGHT - 40 // Near bottom
                : 40; // Near top
        }
    }

    return (
        <Modal transparent visible={isVisible} animationType="none" statusBarTranslucent>
            <View style={styles.container}>
                <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
                    <Defs>
                        <Mask id="mask">
                            <Rect height="100%" width="100%" fill="#fff" />
                            <AnimatedRect
                                x={spotX}
                                y={spotY}
                                width={spotW}
                                height={spotH}
                                rx={12}
                                fill="#000"
                                opacity={spotOpacity}
                            />
                        </Mask>
                    </Defs>
                    <Rect
                        height="100%"
                        width="100%"
                        fill="rgba(5, 5, 12, 0.97)"
                        mask="url(#mask)"
                    />
                </Svg>

                <Animated.View style={[
                    styles.tooltipWrapper,
                    { top: tooltipTop, opacity: tooltipOpacity }
                ]}>
                    <TutorialTooltip
                        currentStep={{
                            order: displayStep,
                            name: t(`tutorial_${getStepName(displayStep)}_title`),
                            text: t(`tutorial_${getStepName(displayStep)}_desc`)
                        }}
                        isFirstStep={isFirstStep}
                        isLastStep={isLastStep}
                        manualIntro={true}
                        handleNext={onNext}
                        handleStop={onStop}
                    />
                </Animated.View>
            </View>
        </Modal>
    );
};

const getStepName = (step) => {
    switch (step) {
        case 1: return 'welcome';
        case 2: return 'goal';
        case 3: return 'naming';
        case 4: return 'rewards';
        case 5: return 'reveal';
        case 6: return 'letters';
        case 7: return 'hints';
        default: return 'welcome';
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    tooltipWrapper: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});

export default CustomTutorial;
