import { ThemeProvider } from '$components/providers/ThemeProvider';
import { RootNavigator } from './navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
