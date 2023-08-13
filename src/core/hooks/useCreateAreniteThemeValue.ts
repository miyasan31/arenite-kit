import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import type { AreniteTheme, Theme } from '../types';

export type AreniteThemeContextValue = [
  AreniteTheme,
  {
    setTheme: Dispatch<SetStateAction<Theme>>;
    toggleTheme: () => Theme;
  }
];

export const useCreateAreniteThemeValue = (
  customTheme: AreniteTheme
): AreniteThemeContextValue => {
  const [theme, setTheme] = useState<Theme>(customTheme.theme);

  const toggleTheme = useCallback((prevTheme: Theme): Theme => {
    const toggledTheme = prevTheme === 'light' ? 'dark' : 'light';
    setTheme(toggledTheme);
    return toggledTheme;
  }, []);

  useEffect(() => {
    setTheme(customTheme.theme);
  }, [customTheme.theme]);

  return [
    { theme: theme, pallets: customTheme.pallets },
    { setTheme, toggleTheme: toggleTheme.bind(null, theme) },
  ];
};
