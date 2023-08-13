import { areniteThemeStorageKey } from '$constants/asyncStorageKeys';
import { myThemePallets } from '$libs/arenite-kit/areniteConfig';
import { asyncStorage } from '$libs/react-native-async-storage/asyncStorage';
import type { AreniteTheme, Theme } from 'arenite-kit';
import { useSystemTheme } from 'arenite-kit';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export const useAppBootstrap = () => {
  const [isReady, setIsReady] = useState(false);
  const [userTheme, setUserTheme] = useState<Theme | null>(null);

  const systemTheme = useSystemTheme();

  const areniteTheme: AreniteTheme = {
    theme: userTheme ?? systemTheme,
    pallets: myThemePallets,
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        // get user theme from async storage
        const areniteThemeResult = await asyncStorage.get<Theme>(
          areniteThemeStorageKey
        );
        setUserTheme(areniteThemeResult);
      } catch (e) {
        console.error(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare().then();
  }, []);

  return { isReady, areniteTheme };
};
