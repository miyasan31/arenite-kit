import { useAppBootstrap } from '$hooks/useAppBootstrap';
import { AreniteThemeProvider, Toast } from 'arenite-kit';
import type { ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { isReady, areniteTheme } = useAppBootstrap();

  if (!isReady) {
    return null;
  }

  return (
    <AreniteThemeProvider value={areniteTheme}>
      <Toast.Provider topOffset={104}>
        {children}
        <Toast />
      </Toast.Provider>
    </AreniteThemeProvider>
  );
};
