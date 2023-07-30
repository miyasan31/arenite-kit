import React from 'react';
import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-safe-area-context';
import type { BgThemeProps } from '../../core';
import { useThemeColor } from '../../core';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type SafeAreaViewProps = OmitKeyReplacer<
  NativeSafeAreaViewProps,
  { style?: AreniteViewStyleProps }
> &
  BgThemeProps;

export const SafeAreaView = (props: SafeAreaViewProps) => {
  const { bg, lightBg, darkBg, style, ...otherProps } = props;

  const backgroundColor = useThemeColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  return (
    <NativeSafeAreaView
      style={[defaultStyle.view, style, { backgroundColor }]}
      {...otherProps}
    />
  );
};

const defaultStyle = createAreniteStyle({
  view: {
    flex: 1,
  },
});
