import React from 'react';
import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-safe-area-context';
import type { BgThemeProps } from '../../core';
import { usePaletteColor } from '../../core';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type SafeAreaViewProps = OmitKeyReplacer<
  NativeSafeAreaViewProps,
  { style?: AreniteViewStyleProps }
> & {
  isCenter?: boolean;
} & BgThemeProps;

const SafeAreaViewComponent = (props: SafeAreaViewProps) => {
  const { bg, lightBg, darkBg, style, isCenter = false, ...otherProps } = props;

  const backgroundColor = usePaletteColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const centerStyle = isCenter ? defaultStyle.center : undefined;

  return (
    <NativeSafeAreaView
      style={[defaultStyle.view, centerStyle, style, { backgroundColor }]}
      {...otherProps}
    />
  );
};

const defaultStyle = createAreniteStyle({
  view: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SafeAreaView: (props: SafeAreaViewProps) => JSX.Element | null =
  SafeAreaViewComponent;
