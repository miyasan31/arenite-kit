import React from 'react';
import {
  FlatList as NativeFlatList,
  FlatListProps as NativeFlatListProps,
} from 'react-native';
import { usePalletColor } from '../../core';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type FlatListProps<Data> = OmitKeyReplacer<
  NativeFlatListProps<Data>,
  {
    style?: AreniteViewStyleProps;
    contentContainerStyle?: AreniteViewStyleProps;
    columnWrapperStyle?: AreniteViewStyleProps;
    ListHeaderComponentStyle?: AreniteViewStyleProps;
    ListFooterComponentStyle?: AreniteViewStyleProps;
  }
> &
  BgThemeProps &
  BorderThemeProps;

export const FlatList = <Data extends any>(props: FlatListProps<Data>) => {
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
    <NativeFlatList<Data>
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};
