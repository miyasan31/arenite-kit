import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

// type CustomColorStyle<Style extends ViewStyle | TextStyle | ImageStyle> = Omit<
//   Style,
//   Extract<keyof Style, 'color' | `${string}${'Color'}`>
// >;

type ExtractKeys = 'color' | 'backgroundColor' | 'borderColor';

type CustomColorStyle<Style extends ViewStyle | TextStyle | ImageStyle> = Omit<
  Style,
  Extract<keyof Style, ExtractKeys>
>;

export type AreniteViewStyle = CustomColorStyle<ViewStyle>;
export type AreniteTextStyle = CustomColorStyle<TextStyle>;
export type AreniteImageStyle = CustomColorStyle<ImageStyle>;

export type AreniteViewStyleProps = StyleProp<AreniteViewStyle>;
export type AreniteTextStyleProps = StyleProp<AreniteTextStyle>;
export type AreniteImageStyleProps = StyleProp<AreniteImageStyle>;

export type AreniteNamedStyles<T> = {
  [P in keyof T]: AreniteViewStyle & AreniteTextStyle & AreniteImageStyle;
};
