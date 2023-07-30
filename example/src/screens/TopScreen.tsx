import { SafeAreaView, VStack, createAreniteStyle } from 'arenite-kit';
import React from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';
import { ActivityIndicatorExample } from '../examples/ActivityIndicator';
import { ButtonExample } from '../examples/Button';
import { DividerExample } from '../examples/Divider';
import { HStackExample } from '../examples/Hstack';
import { IconButtonExample } from '../examples/IconButton';
import { TextExample } from '../examples/Text';
import { TextInputExample } from '../examples/TextInput';
import { VStackExample } from '../examples/Vstack';
import { getSafeAreaEdges } from '../libs/react-native-safe-area-context/getSafeAreaEdges';

export const TopScreen = () => {
  const edges = getSafeAreaEdges('top-horizontal');

  return (
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
  );
};

const style = createAreniteStyle({
  vStack: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 160,
  },
});
