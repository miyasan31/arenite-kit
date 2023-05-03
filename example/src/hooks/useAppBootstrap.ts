import type { AreniteTheme } from 'arenite-kit';
import { useSystemTheme } from 'arenite-kit';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { myThemePallets } from '../arenite.config';

SplashScreen.preventAutoHideAsync();

export const useAppBootstrap = () => {
  const [isReady, setIsReady] = useState(false);

  const systemTheme = useSystemTheme();

  const areniteTheme: AreniteTheme = {
    theme: systemTheme,
    pallets: myThemePallets,
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        // load fonts, make API calls, etc...
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare().then();
  }, []);

  return { isReady, areniteTheme };
};
