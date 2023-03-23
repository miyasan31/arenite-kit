export type Theme = 'light' | 'dark';
export type PalletKeys = 'common' | 'color' | 'bg' | 'border' | 'icon';
export type Pallet = Record<Theme, Record<string, string>>;

export interface AreniteBaseTheme {
  theme: Theme;
  pallets: Record<PalletKeys, Pallet>;
}

export interface AreniteCustomTheme {}

export interface AreniteTheme
  extends Omit<AreniteBaseTheme, keyof AreniteCustomTheme>,
    AreniteCustomTheme {}

type Colors<T extends PalletKeys> = keyof AreniteTheme['pallets'][T][Theme];

export type CommonToken = Colors<'common'>;
export type BgToken = Colors<'bg'>;
export type ColorToken = Colors<'color'>;
export type IconToken = Colors<'icon'>;
export type BorderToken = Colors<'border'>;

/** Component Style Props */

export type StyleProps = {
  color?: CommonToken | ColorToken;
  lightColor?: string;
  darkColor?: string;

  bg?: CommonToken | BgToken;
  lightBg?: string;
  darkBg?: string;

  icon?: CommonToken | IconToken;
  lightIcon?: string;
  darkIcon?: string;

  border?: CommonToken | BorderToken;
  lightBorder?: string;
  darkBorder?: string;
};

export type ColorThemeProps = Pick<
  StyleProps,
  'color' | 'lightColor' | 'darkColor'
>;

export type BgThemeProps = Pick<StyleProps, 'bg' | 'lightBg' | 'darkBg'>;

export type IconThemeProps = Pick<
  StyleProps,
  'icon' | 'lightIcon' | 'darkIcon'
>;

export type BorderThemeProps = Pick<
  StyleProps,
  'border' | 'lightBorder' | 'darkBorder'
>;
