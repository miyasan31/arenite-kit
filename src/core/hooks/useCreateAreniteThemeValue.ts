import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import type { AreniteThemeKey, AreniteTheme } from '../types';

export type AreniteThemeContextValue = [
  AreniteTheme,
  { setTheme: Dispatch<SetStateAction<AreniteThemeKey>> }
];

export const useCreateAreniteThemeValue = (
  customTheme: AreniteTheme
): AreniteThemeContextValue => {
  const [theme, setTheme] = useState<AreniteThemeKey>(customTheme.theme);

  useEffect(() => {
    setTheme(customTheme.theme);
  }, [customTheme.theme]);

  return [{ theme: theme, pallets: customTheme.pallets }, { setTheme }];
};
