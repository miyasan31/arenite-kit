import React from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
} from '../../core';
import { useThemeColor } from '../../core';

export type TextInputProps = NativeTextInput['props'] &
  ColorThemeProps &
  BgThemeProps & {
    selectionColor?: BorderThemeProps['border'];
    placeholderTextColor?: ColorThemeProps['color'];
  };

export const TextInput = (props: TextInputProps) => {
  const {
    color: textColor,
    lightColor,
    darkColor,
    bg,
    lightBg,
    darkBg,
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
  const placeholderColor = useThemeColor('color', placeholderTextColor, {});
  const focusedColor = useThemeColor('border', selectionColor, {});

  return (
    <NativeTextInput
      selectionColor={focusedColor}
      placeholderTextColor={placeholderColor}
      style={[defaultStyle.textInput, style, { color, backgroundColor }]}
      {...otherProps}
    />
  );
};

const defaultStyle = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});
