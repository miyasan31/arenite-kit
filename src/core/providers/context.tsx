import { createContext } from 'react';
import type { AreniteThemeContextValue } from '../hooks/useCreateAreniteThemeValue';

export const AreniteThemeContext = createContext<AreniteThemeContextValue>(
  null as any
);
