import React, { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { PressableStateCallbackType } from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';
import type { AreniteViewStyleProps } from '../../style';
import { Pressable, PressableRef } from '../primitives';
import type { OmitKeyReplacer } from '../types';

type AnimatedViewProps = OmitKeyReplacer<
  Animated.View['props'],
  {
    children?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
    style?: AreniteViewStyleProps;
  }
> & {
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
    style,
    ...otherProps
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
    <Animated.View style={[!noBounce && animatedStyle, style]} {...otherProps}>
      {typeof children === 'function' ? children(state) : children}
    </Animated.View>
  );
};

type PureFunction = () => void;

export type BounceableProps = OmitKeyReplacer<
  Omit<AnimatedViewProps, 'state'>,
  {
    style?: {
      pressable?:
        | AreniteViewStyleProps
        | ((state: PressableStateCallbackType) => AreniteViewStyleProps);
      animatedView?: AreniteViewStyleProps;
    };
  }
> & {
  onPress?: PureFunction;
  onLongPress?: PureFunction;
  disabled?: boolean;
};

const BounceableComponent = (
  props: BounceableProps,
  ref: ForwardedRef<PressableRef>
) => {
  const { onPress, onLongPress, disabled, style, ...otherProps } = props;

  return (
    <Pressable
      ref={ref}
      style={style?.pressable}
      disabled={disabled}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {(state) => (
        <AnimatedView
          state={state}
          style={style?.animatedView}
          {...otherProps}
        />
      )}
    </Pressable>
  );
};

export const Bounceable: (
  props: { ref?: Ref<PressableRef> } & BounceableProps
) => JSX.Element | null = forwardRef<PressableRef, BounceableProps>(
  BounceableComponent
);
