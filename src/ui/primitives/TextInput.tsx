import { ForwardedRef, forwardRef, Ref } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
} from '../../core';
import { usePaletteColor, useSystemTheme } from '../../core';
import type { AreniteTextStyleProps } from '../../style';
import { createAreniteStyle } from '../../style';
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
    keyboardAppearance,
    ...otherProps
  } = props;

  const systemTheme = useSystemTheme();

  const color = usePaletteColor('color', textColor, {
    light: lightColor,
    dark: darkColor,
  });
  const backgroundColor = usePaletteColor('bg', bg, {
    light: lightBg,
    dark: darkBg,
  });
  const borderColor = usePaletteColor('border', border, {
    light: lightBorder,
    dark: darkBorder,
  });
  const placeholderColor = usePaletteColor('color', placeholderTextColor, {});
  const focusedColor = usePaletteColor('border', selectionColor, {});

  return (
    <NativeTextInput
      ref={ref}
      selectionColor={focusedColor}
      keyboardAppearance={keyboardAppearance ?? systemTheme}
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
    fontSize: 16,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
});

export const TextInput: (
  props: { ref?: Ref<NativeTextInput> } & TextInputProps
) => JSX.Element | null = forwardRef<NativeTextInput, TextInputProps>(
  TextInputComponent
);
