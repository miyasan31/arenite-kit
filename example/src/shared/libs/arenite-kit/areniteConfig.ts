const commonPalette = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F43F5E',
    secondary: '#FB923C',
    tertiary: '#FBBF24',
    info: '#3B82F6',
    infoA: '#3B82F626',
    success: '#2BDEA3',
    successA: '#2BDEA326',
    warning: '#FBBF24',
    warningA: '#FBBF2426',
    error: '#FF5B37',
    errorA: '#FF5B3726',
    danger: '#FF0000',
    dangerA: '#FF000026',
    chart1: '#ff6666',
    chart2: '#ff9966',
    chart3: '#ffbb66',
    chart4: '#ffcc66',
    chart5: '#ffea66',
    chart6: '#e5ff66',
    chart7: '#ccff66',
    chart8: '#a3ff66',
    chart9: '#66ff66',
    chart10: '#66ff80',
    chart11: '#66ff99',
    chart12: '#66ffbb',
    chart13: '#66ffcc',
    chart14: '#66ffea',
    chart15: '#66eaff',
    chart16: '#66ccff',
    chart17: '#6699ff',
    chart18: '#9966ff',
    chart19: '#bb66ff',
    chart20: '#d966ff',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#963FF4',
    secondary: '#3C62FB',
    tertiary: '#24DBFB',
    info: '#569AFF',
    infoA: '#569AFF26',
    success: '#10B981',
    successA: '#10B98126',
    warning: '#FBBF24',
    warningA: '#FBBF2426',
    error: '#FF6969',
    errorA: '#FF696926',
    danger: '#FF2A2A',
    dangerA: '#FF2A2A26',
    chart1: '#d966ff',
    chart2: '#bb66ff',
    chart3: '#9966ff',
    chart4: '#6699ff',
    chart5: '#66ccff',
    chart6: '#66eaff',
    chart7: '#66ffea',
    chart8: '#66ffcc',
    chart9: '#66ffbb',
    chart10: '#66ff99',
    chart11: '#66ff80',
    chart12: '#66ff66',
    chart13: '#a3ff66',
    chart14: '#ccff66',
    chart15: '#e5ff66',
    chart16: '#ffea66',
    chart17: '#ffcc66',
    chart18: '#ffbb66',
    chart19: '#ff9966',
    chart20: '#ff6666',
  },

  dracula: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#BD93F9',
    secondary: '#FF79C6',
    tertiary: '#F1FA8C',
    success: '#50FA7B',
    successA: '#50FA7B26',
    warning: '#FFB86C',
    warningA: '#FFB86C26',
    info: '#8BE9FD',
    infoA: '#8BE9FD26',
    error: '#FF5555',
    errorA: '#FF555526',
    danger: '#FF5555',
    dangerA: '#FF555526',
    chart1: '#d966ff',
    chart2: '#bb66ff',
    chart3: '#9966ff',
    chart4: '#6699ff',
    chart5: '#66ccff',
    chart6: '#66eaff',
    chart7: '#66ffea',
    chart8: '#66ffcc',
    chart9: '#66ffbb',
    chart10: '#66ff99',
    chart11: '#66ff80',
    chart12: '#66ff66',
    chart13: '#a3ff66',
    chart14: '#ccff66',
    chart15: '#e5ff66',
    chart16: '#ffea66',
    chart17: '#ffcc66',
    chart18: '#ffbb66',
    chart19: '#ff9966',
    chart20: '#ff6666',
  },
};

const colorPalette = {
  light: {
    color0: '#FFFFFF',
    color1: '#070417',
    color2: '#AAADB8',
    // ...
    color9: '#FFFFFF',
  },
  dark: {
    color0: '#27272A',
    color1: '#FFFFFF',
    color2: '#A1A1AA',
    // ...
    color9: '#000000',
  },
  dracula: {
    color0: '#FFFFFF',
    color1: '#C2C6D2',
    color2: '#6272A4',
    color9: '#070417',
  },
};

const bgPalette = {
  light: {
    bg0: '#FFFFFF00',
    bg1: '#F1F5F9',
    bg2: '#FFFFFF',
    bg3: '#B9BBC5',
    // ...
    bg9: '#27272A',
  },
  dark: {
    bg0: '#00000000',
    bg1: '#27272A',
    bg2: '#3F3F45',
    bg3: '#D9D9D9',
    // ...
    bg9: '#FFFFFF',
  },
  dracula: {
    bg0: '#FFFFFF00',
    bg1: '#282A36',
    bg2: '#44475A',
    bg3: '#6272A4',
    // ...
    bg9: '#FFFFFF',
  },
};

const borderPalette = {
  light: {
    border1: '#C2C6D2',
    border2: '#E5E7EB',
    border3: '#27272A',
  },
  dark: {
    border1: '#747481',
    border2: '#525259',
    border3: '#FFFFFF',
  },
  dracula: {
    border1: '#44475A',
    border2: '#344D5A',
    border3: '#6272A4',
  },
};

const iconPalette = {
  light: {
    icon1: '#070417',
    icon2: '#C2C6D2',
  },
  dark: {
    icon1: '#FFFFFF',
    icon2: '#A1A1AA',
  },
  dracula: {
    icon1: '#070417',
    icon2: '#C2C6D2',
  },
};

export const myThemePalettes = {
  common: commonPalette,
  color: colorPalette,
  bg: bgPalette,
  border: borderPalette,
  icon: iconPalette,
} as const;

declare module 'arenite-kit' {
  interface AreniteCustomTheme {
    theme: 'light' | 'dark' | 'auto' | 'dracula';
    palettes: typeof myThemePalettes;
  }
}
