import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
} from '../../core';
import { useThemeColor } from '../../core';
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

export const TextInput = (props: TextInputProps) => {
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

  const color = useThemeColor('color', textColor, {
    light: lightColor,
    dark: darkColor,
  });
  const backgroundColor = useThemeColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });
  const borderColor = useThemeColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });
  const placeholderColor = useThemeColor('color', placeholderTextColor, {});
  const focusedColor = useThemeColor('border', selectionColor, {});

  return (
    <NativeTextInput
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
