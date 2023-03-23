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
    primary: '#FB923C',
    secondary: '#FB923C',
    tertiary: '#FBBF24',
    accent: '#3B82F6',
    danger: '#EF4444',
  },
};

const colorPallet = {
  light: {
    color1: '#333333',
    color2: '#333333',
  },
  dark: {
    color1: '#FFFFFF',
    color2: '#333333',
  },
};
const bgPallet = {
  light: {
    bg1: '#FFFFFF',
  },
  dark: {
    bg1: '#27272a',
  },
};

const borderPallet = {
  light: {
    border1: '#C2C6D2',
  },
  dark: {
    border1: '#A1A1AA',
  },
};

const iconPallet = {
  light: {
    icon1: '#C2C6D2',
  },
  dark: {
    icon1: '#A1A1AA',
  },
};

export const myTheme = {
  theme: 'light',
  pallets: {
    common: commonPallet,
    color: colorPallet,
    bg: bgPallet,
    border: borderPallet,
    icon: iconPallet,
  },
} as const;

declare module 'arenite-kit' {
  interface AreniteCustomTheme {
    pallets: typeof myTheme.pallets;
  }
}
