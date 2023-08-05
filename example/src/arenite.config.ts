const commonPallet = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F43F5E',
    secondary: '#FB923C',
    tertiary: '#FBBF24',
    accent: '#3B82F6',
    danger: '#EF4444',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#963ff4',
    secondary: '#3c62fb',
    tertiary: '#24dbfb',
    accent: '#3bf65a',
    danger: '#EF4444',
  },
};

const colorPallet = {
  light: {
    color0: '#FFFFFF',
    color1: '#070417',
    color2: '#C2C6D2',
    color9: '#FFFFFF',
  },
  dark: {
    color0: '#27272a',
    color1: '#FFFFFF',
    color2: '#A1A1AA',
    color9: '#000000',
  },
};
const bgPallet = {
  light: {
    bg0: '#ffffff00',
    bg1: '#F1F5F9',
    bg2: '#FFFFFF',
    // ...
    bg9: '#27272a',
  },
  dark: {
    bg0: '#00000000',
    bg1: '#27272a',
    bg2: '#3f3f45',
    // ...
    bg9: '#FFFFFF',
  },
};

const borderPallet = {
  light: {
    border1: '#C2C6D2',
    border2: '#E5E7EB',
  },
  dark: {
    border1: '#5a5a64',
    border2: '#3f3f45',
  },
};

const iconPallet = {
  light: {
    icon1: '#070417',
    icon2: '#ffffff',
  },
  dark: {
    icon1: '#ffffff',
    icon2: '#070417',
  },
};

export const myThemePallets = {
  common: commonPallet,
  color: colorPallet,
  bg: bgPallet,
  border: borderPallet,
  icon: iconPallet,
} as const;

declare module 'arenite-kit' {
  interface AreniteCustomTheme {
    pallets: typeof myThemePallets;
  }
}
