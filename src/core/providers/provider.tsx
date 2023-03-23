import { AreniteThemeContext } from './context';
import type { FC, ReactNode } from 'react';
import React from 'react';
import type { AreniteTheme } from '$/core';

const defaultAreniteTheme = {
  theme: 'light',
  colors: {
    common: {
      light: {},
      dark: {},
    },
    color: {
      light: {},
      dark: {},
    },
    bg: {
      light: {},
      dark: {},
    },
    icon: {
      light: {},
      dark: {},
    },
    border: {
      light: {},
      dark: {},
    },
  },
};

export type AreniteThemeProviderProps = {
  children: ReactNode;
  theme: AreniteTheme;
};

export const AreniteThemeProvider: FC<AreniteThemeProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <AreniteThemeContext.Provider
      value={{
        ...defaultAreniteTheme,
        ...theme,
      }}
    >
      {children}
    </AreniteThemeContext.Provider>
  );
};
