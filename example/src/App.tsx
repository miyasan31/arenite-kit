import { AreniteThemeProvider, SafeAreaView, VStack } from 'arenite-kit';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicatorExample } from './examples/ActivityIndicator';
import { ButtonExample } from './examples/Button';
import { DividerExample } from './examples/Divider';
import { HStackExample } from './examples/Hstack';
import { IconButtonExample } from './examples/IconButton';
import { TextExample } from './examples/Text';
import { TextInputExample } from './examples/TextInput';
import { VStackExample } from './examples/Vstack';
import { useAppBootstrap } from './hooks/useAppBootstrap';
import { getSafeAreaEdges } from './libs/react-native-safe-area-context/getSafeAreaEdges';

export default function App() {
  const edges = getSafeAreaEdges('top-horizontal');
  const { isReady, areniteTheme } = useAppBootstrap();

  if (!isReady) {
    return null;
  }

  return (
    <AreniteThemeProvider value={areniteTheme}>
      <SafeAreaProvider>
        <SafeAreaView edges={edges} bg={'bg1'}>
          <ScrollView>
            <KeyboardAvoidingView>
              <VStack gap={32} style={style.vStack}>
                <TextExample />
                <TextInputExample />
                <ButtonExample />
                <IconButtonExample />
                <VStackExample />
                <HStackExample />
                <DividerExample />
                <ActivityIndicatorExample />
              </VStack>
            </KeyboardAvoidingView>
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
