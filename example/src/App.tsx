import { AreniteThemeProvider, SafeAreaView, View } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { myTheme } from './arenite.config';
import { KeyboardAvoiding } from './components/KeyboardAvoiding';
import { ButtonExample } from './examples/Button';
import { IconButtonExample } from './examples/IconButton';
import { TextInputExample } from './examples/TextInput';
import { ThemingTextExample } from './examples/ThemingText';
import { getSafeAreaEdges } from './libs/react-native-safe-area-context/getSafeAreaEdges';

export default function App() {
  const edges = getSafeAreaEdges('top-horizontal');

  return (
    <AreniteThemeProvider value={myTheme}>
      <KeyboardAvoiding>
        <SafeAreaProvider>
          <SafeAreaView edges={edges}>
            <View style={style.view} bg={'bg1'}>
              <ThemingTextExample />
              <TextInputExample />
              <ButtonExample />
              <IconButtonExample />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
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
