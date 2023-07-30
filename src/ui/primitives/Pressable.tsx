import React from 'react';
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from 'react-native';
import { usePalletColor } from '../../core';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type PressableProps = OmitKeyReplacer<
  NativePressableProps,
  { style?: AreniteViewStyleProps }
> &
  BgThemeProps &
  BorderThemeProps;

export const Pressable = (props: PressableProps) => {
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
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};
