import React, { ForwardedRef, forwardRef, memo } from 'react';
import {
  View as NativeView,
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
  PressableStateCallbackType,
} from 'react-native';
import { usePalletColor } from '../../core';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type PressableProps = OmitKeyReplacer<
  NativePressableProps,
  {
    style?:
      | AreniteViewStyleProps
      | ((state: PressableStateCallbackType) => AreniteViewStyleProps);
  }
> &
  BgThemeProps &
  BorderThemeProps;

const PressableComponent = (
  props: PressableProps,
  ref: ForwardedRef<NativeView>
) => {
  const {
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
    style,
    ...otherProps
  } = props;

  const backgroundColor = usePalletColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePalletColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });

  return (
    <NativePressable
      ref={ref}
      style={
        typeof style === 'function'
          ? (state) => [style(state), { backgroundColor, borderColor }]
          : [style, { backgroundColor, borderColor }]
      }
      {...otherProps}
    />
  );
};

export const Pressable = memo(
  forwardRef<NativeView, PressableProps>(PressableComponent)
);
