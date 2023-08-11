import { AreniteThemeProvider, Toast } from 'arenite-kit';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppBootstrap } from './hooks/useAppBootstrap';
import { TopScreen } from './screens/TopScreen';

export default function App() {
  const { isReady, areniteTheme } = useAppBootstrap();

  if (!isReady) {
    return null;
  }

  return (
    <AreniteThemeProvider value={areniteTheme}>
      <Toast.Provider topOffset={58}>
        <SafeAreaProvider>
          <TopScreen />
        </SafeAreaProvider>
        <Toast />
      </Toast.Provider>
    </AreniteThemeProvider>
  );
}
