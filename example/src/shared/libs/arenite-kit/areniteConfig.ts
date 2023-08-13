const commonPallet = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F43F5E',
    secondary: '#FB923C',
    tertiary: '#FBBF24',
    success: '#10B981',
    warning: '#FBBF24',
    info: '#3B82F6',
    error: '#EF4444',
    accent: '#3B82F6',
    danger: '#EF4444',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#963ff4',
    secondary: '#3c62fb',
    tertiary: '#24dbfb',
    success: '#10B981',
    warning: '#FBBF24',
    info: '#3B82F6',
    error: '#EF4444',
    accent: '#3bf65a',
    danger: '#EF4444',
  },
  dracula: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#BD93F9',
    secondary: '#FF79C6',
    tertiary: '#F1FA8C',
    success: '#50FA7B',
    warning: '#FFB86C',
    info: '#8BE9FD',
    error: '#FF5555',
    accent: '#8BE9FD',
    danger: '#FF5555',
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
  dracula: {
    color0: '#FFFFFF',
    color1: '#C2C6D2',
    color2: '#6272A4',
    color9: '#070417',
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
  dracula: {
    bg0: '#ffffff00',
    bg1: '#282a36',
    bg2: '#44475a',
    // ...
    bg9: '#ffffff',
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
  dracula: {
    border1: '#44475a',
    border2: '#344d5a',
  },
};

const iconPallet = {
  light: {
    icon1: '#070417',
    icon2: '#C2C6D2',
  },
  dark: {
    icon1: '#ffffff',
    icon2: '#A1A1AA',
  },
  dracula: {
    icon1: '#070417',
    icon2: '#C2C6D2',
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
    theme: 'light' | 'dark' | 'auto' | 'dracula';
    pallets: typeof myThemePallets;
  }
}
