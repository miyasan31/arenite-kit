import type { FC, ReactNode } from 'react';
import { useCreateAreniteThemeValue } from '../hooks/useCreateAreniteThemeValue';
import type { AreniteTheme } from '../types';
import { AreniteThemeContext } from './context';

export type AreniteThemeProviderProps = {
  children: ReactNode;
  value: AreniteTheme;
};

export const AreniteThemeProvider: FC<AreniteThemeProviderProps> = ({
  children,
  value,
}) => {
  const [areniteTheme, actions] = useCreateAreniteThemeValue(value);

  return (
    <AreniteThemeContext.Provider value={[areniteTheme, actions]}>
      {children}
    </AreniteThemeContext.Provider>
  );
};
