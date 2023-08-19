import React, { ForwardedRef, forwardRef, memo } from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { CommonToken } from '../../core';
import { BgThemeProps, BorderThemeProps, usePaletteColor } from '../../core';
import type { AreniteViewStyle } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type ActivityIndicatorProps = OmitKeyReplacer<
  NativeActivityIndicator['props'],
  { style?: AreniteViewStyle; color?: CommonToken }
> &
  BgThemeProps &
  BorderThemeProps;

const ActivityIndicatorComponent = (
  props: ActivityIndicatorProps,
  ref: ForwardedRef<NativeActivityIndicator>
) => {
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

  const iconColor = usePaletteColor('icon', color, {});

  const backgroundColor = usePaletteColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePaletteColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });

  return (
    <NativeActivityIndicator
      ref={ref}
      color={iconColor}
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};

export const ActivityIndicator = memo(
  forwardRef<NativeActivityIndicator, ActivityIndicatorProps>(
    ActivityIndicatorComponent
  )
);
