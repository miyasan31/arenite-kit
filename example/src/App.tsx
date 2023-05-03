import { AreniteThemeProvider, SafeAreaView, VStack } from 'arenite-kit';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { myTheme } from './arenite.config';
import { ButtonExample } from './examples/Button';
import { HStackExample } from './examples/Hstack';
import { IconButtonExample } from './examples/IconButton';
import { TextInputExample } from './examples/TextInput';
import { ThemingTextExample } from './examples/ThemingText';
import { VStackExample } from './examples/Vstack';
import { getSafeAreaEdges } from './libs/react-native-safe-area-context/getSafeAreaEdges';

export default function App() {
  const edges = getSafeAreaEdges('top-horizontal');

  return (
    <AreniteThemeProvider value={myTheme}>
      <SafeAreaProvider>
        <SafeAreaView edges={edges} bg={'bg1'}>
          <ScrollView>
            <VStack gap={32} style={style.vStack}>
              <ThemingTextExample />
              <TextInputExample />
              <ButtonExample />
              <IconButtonExample />
              <VStackExample />
              <HStackExample />
            </VStack>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </AreniteThemeProvider>
  );
}

const style = StyleSheet.create({
  layout: {
    flex: 1,
  },
  vStack: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 160,
  },
});
