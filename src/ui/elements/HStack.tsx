import React, { ReactNode } from 'react';
import type { View as NativeView, ViewStyle } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { View } from '../primitives';

export type HStackProps = {
  children: ReactNode;
  style?: ViewStyle;
  gap?: ViewStyle['rowGap'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
} & BgThemeProps &
  BorderThemeProps;

export const HStack = (props: HStackProps) => {
  const { style, gap, align, justify, ...otherProps } = props;

  const fixedStyle: NativeView['props']['style'] = {
    flexDirection: 'row',
    columnGap: gap,
    alignItems: align,
    justifyContent: justify,
  };

  return <View style={[style, fixedStyle]} {...otherProps} />;
};
