import { AreniteThemeProvider, View } from 'arenite-kit';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { myTheme } from './arenite.config';
import { ButtonExample } from './examples/Button';
import { ThemingTextExample } from './examples/ThemingText';

export default function App() {
  return (
    <AreniteThemeProvider value={myTheme}>
      <SafeAreaView style={style.layout}>
        <View style={style.container} bg={'bg1'}>
          <ThemingTextExample />
          <ButtonExample />
        </View>
      </SafeAreaView>
    </AreniteThemeProvider>
  );
}

const style = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
});
