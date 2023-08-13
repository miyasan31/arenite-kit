import { areniteThemeStorageKey } from '$constants/asyncStorageKeys';
import { myThemePallets } from '$libs/arenite-kit/areniteConfig';
import { asyncStorage } from '$libs/react-native-async-storage/asyncStorage';
import type { AreniteTheme, AreniteThemeKey } from 'arenite-kit';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export const useAppBootstrap = () => {
  const [isReady, setIsReady] = useState(false);
  const [userTheme, setUserTheme] = useState<AreniteThemeKey>('auto');

  useEffect(() => {
    const prepare = async () => {
      try {
        // get user theme from async storage
        const areniteThemeResult = await asyncStorage.get<AreniteThemeKey>(
          areniteThemeStorageKey
        );
        if (!areniteThemeResult) {
          return;
        }
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

  const areniteTheme: AreniteTheme = {
    theme: userTheme,
    pallets: myThemePallets,
  };

  return { isReady, areniteTheme };
};
