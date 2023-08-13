export type ThemeKey = 'light' | 'dark';
export type SizeKeys = 'sm' | 'md' | 'lg';
export type PalletKeys = 'common' | 'color' | 'bg' | 'border' | 'icon';
export type Pallet = Record<ThemeKey, Record<string, string>>;

export interface AreniteBaseTheme {
  theme: ThemeKey | 'auto';
  pallets: Record<PalletKeys, Pallet>;
}

export interface AreniteCustomTheme {}

export interface AreniteTheme
  extends Omit<AreniteBaseTheme, keyof AreniteCustomTheme>,
    AreniteCustomTheme {}

export type AreniteThemeKey = AreniteTheme['theme'];

type Colors<T extends PalletKeys> = keyof AreniteTheme['pallets'][T][ThemeKey];

export type CommonToken = Colors<'common'>;
export type BgToken = Colors<'bg'>;
export type ColorToken = Colors<'color'>;
export type IconToken = Colors<'icon'>;
export type BorderToken = Colors<'border'>;

/** Component Style Props */

type OverrideColor<T> = T extends string
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

export type IconThemeProps = {
  icon?: CommonToken | IconToken;
} & OverrideColor<'Icon'>;
