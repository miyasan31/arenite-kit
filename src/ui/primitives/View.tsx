import { useThemeColor, BgThemeProps, BorderThemeProps } from '$/core';
import React from 'react';
import { View as NativeView } from 'react-native';

export type ViewProps = NativeView['props'] & BgThemeProps & BorderThemeProps;

export const View = (props: ViewProps) => {
  const {
    bg = 'bg1',
    lightBg,
    darkBg,
    border = 'border1',
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

  return (
    <NativeView
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};
