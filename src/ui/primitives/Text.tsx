import React from 'react';
import { Text as NativeText } from 'react-native';
import type { ColorThemeProps } from '../../core';
import { useThemeColor } from '../../core';

export type TextProps = NativeText['props'] & ColorThemeProps;

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
