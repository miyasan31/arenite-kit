import React, { ForwardedRef, forwardRef, memo } from 'react';
import { Image as NativeImage } from 'react-native';
import { usePaletteColor } from '../../core';
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

const ImageComponent = (props: ImageProps, ref: ForwardedRef<NativeImage>) => {
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

  const backgroundColor = usePaletteColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePaletteColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });

  return (
    <NativeImage
      ref={ref}
      style={[style, { width, height, backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};

export const Image = memo(forwardRef<NativeImage, ImageProps>(ImageComponent));
