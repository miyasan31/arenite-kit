import { Dispatch, SetStateAction, useState } from 'react';
import type { AreniteTheme, Theme } from '../types';

export type AreniteThemeContextValue = [
  AreniteTheme,
  {
    setTheme: Dispatch<SetStateAction<Theme>>;
    toggleTheme: () => void;
  }
];

export const useCreateAreniteThemeValue = (
  customTheme: AreniteTheme
): AreniteThemeContextValue => {
  const [theme, setTheme] = useState<'light' | 'dark'>(customTheme.theme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return [
    { theme: theme, pallets: customTheme.pallets },
    { setTheme, toggleTheme },
  ];
};
