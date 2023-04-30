import React, { ReactNode } from 'react';
import { Pressable, PressableStateCallbackType } from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

type AnimatedViewProps = {
  children: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  state: PressableStateCallbackType;
  noBounce?: boolean;
  scaleTo?: number;
  timingConfig?: WithTimingConfig;
};

const AnimatedView = (props: AnimatedViewProps) => {
  const {
    state,
    children,
    timingConfig = { duration: 50, easing: Easing.linear },
    scaleTo = 0.975,
    noBounce = false,
  } = props;

  const progress = useDerivedValue(() => {
    return state.pressed
      ? withTiming(1, timingConfig)
      : withTiming(0, timingConfig);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, scaleTo],
      Extrapolate.CLAMP
    );
    return { transform: [{ scale }] };
  });

  return (
    <Animated.View style={[!noBounce && animatedStyle]}>
      {typeof children === 'function' ? children(state) : children}
    </Animated.View>
  );
};

type PureFunction = () => void;
export type BounceableProps = Omit<AnimatedViewProps, 'state'> & {
  onPress: PureFunction;
  onLongPress?: PureFunction;
  disabled?: boolean;
};

export const Bounceable = (props: BounceableProps) => {
  const {
    onPress,
    onLongPress,
    disabled,
    children,
    noBounce,
    scaleTo,
    timingConfig,
  } = props;

  return (
    <Pressable disabled={disabled} onPress={onPress} onLongPress={onLongPress}>
      {(state) => (
        <AnimatedView
          state={state}
          noBounce={noBounce}
          scaleTo={scaleTo}
          timingConfig={timingConfig}
        >
          {typeof children === 'function' ? children(state) : children}
        </AnimatedView>
      )}
    </Pressable>
  );
};
