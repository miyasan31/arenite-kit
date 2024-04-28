export type ThemeKey = 'light' | 'dark';
export type SizeKeys = 's' | 'm' | 'l';
export type PaletteKeys = 'common' | 'color' | 'bg' | 'border';
export type Palette = Record<ThemeKey, Record<string, string>>;

export interface AreniteBaseTheme {
  theme: ThemeKey | 'auto';
  palettes: Record<PaletteKeys, Palette>;
}

export interface AreniteCustomTheme {}

export interface AreniteTheme
  extends Omit<AreniteBaseTheme, keyof AreniteCustomTheme>,
    AreniteCustomTheme {}

export type AreniteThemeKey = AreniteTheme['theme'];

type Colors<T extends PaletteKeys> =
  keyof AreniteTheme['palettes'][T][ThemeKey];

export type CommonToken = Colors<'common'>;
export type BgToken = Colors<'bg'>;
export type ColorToken = Colors<'color'>;
export type BorderToken = Colors<'border'>;

/** Component Style Props */

export type OverrideColor<T> = T extends string
  ? {
      [C in `${Exclude<AreniteThemeKey, 'auto'>}${T}`]?: string;
    }
  : never;

export type ColorThemeProps = {
  color?: CommonToken | ColorToken;
} & OverrideColor<'Color'>;

export type BgThemeProps = {
  bg?: CommonToken | BgToken;
} & OverrideColor<'Bg'>;

export type BorderThemeProps = {
  border?: CommonToken | BorderToken;
} & OverrideColor<'Border'>;
