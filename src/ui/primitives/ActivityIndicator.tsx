import { ForwardedRef, forwardRef, memo, Ref } from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { ColorThemeProps, CommonToken } from '../../core';
import { BgThemeProps, BorderThemeProps, usePaletteColor } from '../../core';
import type { AreniteViewStyle } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type ActivityIndicatorProps = OmitKeyReplacer<
  NativeActivityIndicator['props'],
  { style?: AreniteViewStyle; color?: CommonToken }
> &
  ColorThemeProps &
  BgThemeProps &
  BorderThemeProps;

const ActivityIndicatorComponent = (
  props: ActivityIndicatorProps,
  ref: ForwardedRef<NativeActivityIndicator>
) => {
  const {
    color,
    lightColor,
    darkColor,
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
    style,
    ...otherProps
  } = props;

  const iconColor = usePaletteColor('color', color, {
    light: lightColor,
    dark: darkColor,
  });

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

export const ActivityIndicator: (
  props: { ref?: Ref<NativeActivityIndicator> } & ActivityIndicatorProps
) => JSX.Element | null = memo(
  forwardRef<NativeActivityIndicator, ActivityIndicatorProps>(
    ActivityIndicatorComponent
  )
);
