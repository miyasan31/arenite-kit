import { AreniteThemeProvider } from 'arenite-kit';
import React from 'react';
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
      <SafeAreaProvider>
        <TopScreen />
      </SafeAreaProvider>
    </AreniteThemeProvider>
  );
}
