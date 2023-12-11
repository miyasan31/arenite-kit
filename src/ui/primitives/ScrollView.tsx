import { ForwardedRef, forwardRef, Ref } from 'react';
import { ScrollView as NativeScrollView } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { usePaletteColor } from '../../core';
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

  const backgroundColor = usePaletteColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });

  const borderColor = usePaletteColor('border', border, {
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

export const ScrollView: (
  props: { ref?: Ref<NativeScrollView> } & ScrollViewProps
) => JSX.Element | null = forwardRef<NativeScrollView, ScrollViewProps>(
  ScrollViewComponent
);
