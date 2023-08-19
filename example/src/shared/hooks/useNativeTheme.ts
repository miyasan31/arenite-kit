import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { useAreniteTheme, useSystemTheme } from 'arenite-kit';

export const useNativeTheme = (): Theme => {
  const systemTheme = useSystemTheme();
  const [{ theme, palettes }] = useAreniteTheme();

  const themeKey = theme === 'auto' ? systemTheme : theme;
  const defaultTheme: Theme = themeKey === 'dark' ? DarkTheme : DefaultTheme;

  return {
    ...defaultTheme,
    dark: themeKey === 'dark',
    colors: {
      primary: palettes.common[themeKey].primary,
      background: palettes.bg[themeKey].bg1,
      card: palettes.bg[themeKey].bg2,
      text: palettes.color[themeKey].color1,
      border: palettes.border[themeKey].border1,
      notification: palettes.common[themeKey].accent,
    },
  };
};
