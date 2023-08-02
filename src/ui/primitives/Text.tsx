import React, { ForwardedRef, forwardRef, memo } from 'react';
import { Text as NativeText } from 'react-native';
import type { ColorThemeProps } from '../../core';
import { usePalletColor } from '../../core';
import type { AreniteTextStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type TextProps = OmitKeyReplacer<
  NativeText['props'],
  { style?: AreniteTextStyleProps }
> &
  ColorThemeProps;

const TextComponent = (props: TextProps, ref: ForwardedRef<NativeText>) => {
  const {
    color: textColor,
    lightColor,
    darkColor,
    style,
    ...otherProps
  } = props;

  const color = usePalletColor('color', textColor, {
    light: lightColor,
    dark: darkColor,
  });

  return <NativeText ref={ref} style={[style, { color }]} {...otherProps} />;
};

export const Text = memo(forwardRef<NativeText, TextProps>(TextComponent));
