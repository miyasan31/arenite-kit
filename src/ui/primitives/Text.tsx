import React from 'react';
import { Text as NativeText } from 'react-native';
import type { ColorThemeProps } from '../../core';
import { useThemeColor } from '../../core';
import type { AreniteTextStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type TextProps = OmitKeyReplacer<
  NativeText['props'],
  { style?: AreniteTextStyleProps }
> &
  ColorThemeProps;

export const Text = (props: TextProps) => {
  const {
    color: textColor,
    lightColor,
    darkColor,
    style,
    ...otherProps
  } = props;

  const color = useThemeColor('color', textColor, {
    light: lightColor,
    dark: darkColor,
  });

  return <NativeText style={[style, { color }]} {...otherProps} />;
};
