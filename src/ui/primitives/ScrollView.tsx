import React, { ForwardedRef, forwardRef, memo } from 'react';
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

const ScrollViewComponent = (
  props: ScrollViewProps,
  ref: ForwardedRef<NativeScrollView>
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
      ref={ref}
      style={[style, { backgroundColor, borderColor }]}
      {...otherProps}
    />
  );
};

export const ScrollView = memo(
  forwardRef<NativeScrollView, ScrollViewProps>(ScrollViewComponent)
);
