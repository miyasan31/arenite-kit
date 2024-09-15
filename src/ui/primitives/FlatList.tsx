import {
  FlatList as NativeFlatList,
  FlatListProps as NativeFlatListProps,
} from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { usePaletteColor } from '../../core';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';
import { ForwardedRef, forwardRef } from 'react';

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

const FlatListComponent = <Data,>(
  props: FlatListProps<Data>,
  ref: ForwardedRef<NativeFlatList>
) => {
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

  const backgroundColor = usePaletteColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePaletteColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });

  return (
    <NativeFlatList<Data>
      ref={ref}
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};

export const FlatList: <Data>(
  props: { ref?: ForwardedRef<NativeFlatList<Data>> } & FlatListProps<Data>
) => JSX.Element | null = forwardRef<NativeFlatList<any>, FlatListProps<any>>(
  FlatListComponent
);
