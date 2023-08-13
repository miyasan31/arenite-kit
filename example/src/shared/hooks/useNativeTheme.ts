import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { useAreniteTheme } from 'arenite-kit';

export const useNativeTheme = (): Theme => {
  const [{ theme, pallets }] = useAreniteTheme();

  const defaultTheme: Theme = theme === 'dark' ? DarkTheme : DefaultTheme;

  return {
    ...defaultTheme,
    dark: theme === 'dark',
    colors: {
      primary: pallets.common[theme].primary,
      background: pallets.bg[theme].bg1,
      card: pallets.bg[theme].bg2,
      text: pallets.color[theme].color1,
      border: pallets.border[theme].border1,
      notification: pallets.common[theme].accent,
    },
  };
};
