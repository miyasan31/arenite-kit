import React from 'react';
import { Image as NativeImage } from 'react-native';
import { usePalletColor } from '../../core';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import type { AreniteImageStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type ImageProps = OmitKeyReplacer<
  NativeImage['props'],
  { style?: AreniteImageStyleProps }
> & {
  width: number;
  height: number;
} & BgThemeProps &
  BorderThemeProps;

export const Image = (props: ImageProps) => {
  const {
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
    width,
    height,
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
    <NativeImage
      style={[style, { width, height, backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};
