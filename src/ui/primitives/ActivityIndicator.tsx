import React from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { CommonToken } from '../../core';
import { BgThemeProps, BorderThemeProps, usePalletColor } from '../../core';
import type { AreniteViewStyle } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type ActivityIndicatorProps = OmitKeyReplacer<
  NativeActivityIndicator['props'],
  { style?: AreniteViewStyle; color?: CommonToken }
> &
  BgThemeProps &
  BorderThemeProps;

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
  const {
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
    color,
    style,
    ...otherProps
  } = props;

  const iconColor = usePalletColor('icon', color, {});

  const backgroundColor = usePalletColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePalletColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });

  return (
    <NativeActivityIndicator
      color={iconColor}
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};
