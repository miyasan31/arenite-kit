import { createContext } from 'react';
import type { AreniteTheme } from '$/core';

export const AreniteThemeContext = createContext<AreniteTheme>(null as any);
