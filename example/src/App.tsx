import { AreniteThemeProvider, View } from 'arenite-kit';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { myTheme } from './arenite.config';
import { KeyboardAvoiding } from './components/KeyboardAvoiding';
import { ButtonExample } from './examples/Button';
import { TextInputExample } from './examples/TextInput';
import { ThemingTextExample } from './examples/ThemingText';

export default function App() {
  return (
    <AreniteThemeProvider value={myTheme}>
      <KeyboardAvoiding>
        <SafeAreaView style={style.layout}>
          <View style={style.view} bg={'bg1'}>
            <ThemingTextExample />
            <TextInputExample />
            <ButtonExample />
          </View>
        </SafeAreaView>
      </KeyboardAvoiding>
    </AreniteThemeProvider>
  );
}

const style = StyleSheet.create({
  layout: {
    flex: 1,
  },
  view: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
});
