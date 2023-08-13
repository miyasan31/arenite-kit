import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { useAreniteTheme, useSystemTheme } from 'arenite-kit';

export const useNativeTheme = (): Theme => {
  const systemTheme = useSystemTheme();
  const [{ theme, pallets }] = useAreniteTheme();

  const themeKey = theme === 'auto' ? systemTheme : theme;
  const defaultTheme: Theme = themeKey === 'dark' ? DarkTheme : DefaultTheme;

  return {
    ...defaultTheme,
    dark: themeKey === 'dark',
    colors: {
      primary: pallets.common[themeKey].primary,
      background: pallets.bg[themeKey].bg1,
      card: pallets.bg[themeKey].bg2,
      text: pallets.color[themeKey].color1,
      border: pallets.border[themeKey].border1,
      notification: pallets.common[themeKey].accent,
    },
  };
};
