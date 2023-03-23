import { useThemeColor, ColorThemeProps } from '$/core';
import React from 'react';
import { Text as NativeText } from 'react-native';

export type TextProps = NativeText['props'] & ColorThemeProps;

export const Text = (props: TextProps) => {
  const {
    color: textColor = 'color1',
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
