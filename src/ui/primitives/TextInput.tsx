import React, { ForwardedRef, forwardRef, memo } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
} from '../../core';
import { usePalletColor } from '../../core';
import { createAreniteStyle } from '../../style';
import type { AreniteTextStyleProps } from '../../style';
import type { OmitKeyReplacer } from '../types';

export type TextInputProps = OmitKeyReplacer<
  NativeTextInput['props'],
  {
    style?: AreniteTextStyleProps;
    selectionColor?: BorderThemeProps['border'];
    placeholderTextColor?: ColorThemeProps['color'];
  }
> &
  ColorThemeProps &
  BgThemeProps &
  BorderThemeProps;

const TextInputComponent = (
  props: TextInputProps,
  ref: ForwardedRef<NativeTextInput>
) => {
  const {
    color: textColor,
    lightColor,
    darkColor,
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
    selectionColor,
    placeholderTextColor,
    style,
    ...otherProps
  } = props;

  const color = usePalletColor('color', textColor, {
    light: lightColor,
    dark: darkColor,
  });
  const backgroundColor = usePalletColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });
  const borderColor = usePalletColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });
  const placeholderColor = usePalletColor('color', placeholderTextColor, {});
  const focusedColor = usePalletColor('border', selectionColor, {});

  return (
    <NativeTextInput
      ref={ref}
      selectionColor={focusedColor}
      placeholderTextColor={placeholderColor}
      style={[
        defaultStyle.textInput,
        style,
        { color, backgroundColor, borderColor },
      ]}
      {...otherProps}
    />
  );
};

const defaultStyle = createAreniteStyle({
  textInput: {
    fontSize: 18,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});

export const TextInput = memo(
  forwardRef<NativeTextInput, TextInputProps>(TextInputComponent)
);
