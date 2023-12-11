import {
  FlatList as NativeFlatList,
  FlatListProps as NativeFlatListProps,
} from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { usePaletteColor } from '../../core';
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

const FlatListComponent = <Data,>(props: FlatListProps<Data>) => {
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
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};

export const FlatList = FlatListComponent;
