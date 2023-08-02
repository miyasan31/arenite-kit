import React, { ForwardedRef, forwardRef, memo } from 'react';
import { View as NativeView } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { usePalletColor } from '../../core';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type BoxProps = OmitKeyReplacer<
  NativeView['props'],
  { style?: AreniteViewStyleProps }
> &
  BgThemeProps &
  BorderThemeProps;

const BoxComponent = (props: BoxProps, ref: ForwardedRef<NativeView>) => {
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
    <NativeView
      ref={ref}
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};

export const Box = memo(forwardRef<NativeView, BoxProps>(BoxComponent));
