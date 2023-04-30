import React from 'react';
import { StyleProp, View as NativeView, ViewStyle } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { useThemeColor } from '../../core';

export type ViewProps = NativeView['props'] & BgThemeProps & BorderThemeProps;

export const View = (props: ViewProps) => {
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

  const backgroundColor = useThemeColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = useThemeColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });

  const viewStyle: StyleProp<ViewStyle> = [
    style,
    {
      backgroundColor,
      borderColor,
      borderWidth: borderColor ? 1 : 0,
    },
  ];

  return <NativeView style={viewStyle} {...otherProps} />;
};
