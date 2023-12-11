import React, { ForwardedRef, forwardRef, Ref } from 'react';
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
  PressableStateCallbackType,
  View as NativeView,
} from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { usePaletteColor } from '../../core';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type PressableRef = NativeView & PressableProps;

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
  ref: ForwardedRef<PressableRef>
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

  const backgroundColor = usePaletteColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePaletteColor('border', border, {
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

export const Pressable: (
  props: { ref?: Ref<PressableRef> } & PressableProps
) => JSX.Element | null = forwardRef<PressableRef, PressableProps>(
  PressableComponent
);
