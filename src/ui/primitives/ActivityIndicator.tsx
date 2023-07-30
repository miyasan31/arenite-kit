import React from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { CommonToken } from '../../core';
import { BgThemeProps, BorderThemeProps, useThemeColor } from '../../core';
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

  const iconColor = useThemeColor('icon', color, {});

  const backgroundColor = useThemeColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = useThemeColor('border', border, {
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
