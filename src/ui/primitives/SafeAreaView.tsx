import React from 'react';
import { StyleSheet } from 'react-native';
import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-safe-area-context';
import type { BgThemeProps } from '../../core';
import { useThemeColor } from '../../core';

export type SafeAreaViewProps = NativeSafeAreaViewProps & BgThemeProps;

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

const defaultStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
});
