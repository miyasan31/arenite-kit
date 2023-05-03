import React, { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { View } from '../primitives';

export type VStackProps = {
  children: ReactNode;
  style?: ViewStyle;
  gap?: ViewStyle['rowGap'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
} & BgThemeProps &
  BorderThemeProps;

export const VStack = (props: VStackProps) => {
  const { style, gap, align, justify, ...otherProps } = props;

  const fixedStyle: ViewStyle = {
    rowGap: gap,
    alignItems: align,
    justifyContent: justify,
  };

  return <View style={[style, fixedStyle]} {...otherProps} />;
};
