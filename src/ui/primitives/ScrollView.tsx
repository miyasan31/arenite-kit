import React from 'react';
import { ScrollView as NativeScrollView } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { usePalletColor } from '../../core';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type ScrollViewProps = OmitKeyReplacer<
  NativeScrollView['props'],
  { style?: AreniteViewStyleProps }
> &
  BgThemeProps &
  BorderThemeProps;

export const ScrollView = (props: ScrollViewProps) => {
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

  const backgroundColor = usePalletColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePalletColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });

  return (
    <NativeScrollView
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};
