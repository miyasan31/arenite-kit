import {
  SafeAreaView,
  VStack,
  createAreniteStyle,
  ScrollView,
} from 'arenite-kit';
import React from 'react';
import { ActivityIndicatorExample } from '../examples/ActivityIndicator';
import { ButtonExample } from '../examples/Button';
import { DividerExample } from '../examples/Divider';
import { FlatListExample } from '../examples/FlatList';
import { HStackExample } from '../examples/Hstack';
import { IconButtonExample } from '../examples/IconButton';
import { ImageExample } from '../examples/Image';
import { TextExample } from '../examples/Text';
import { TextInputExample } from '../examples/TextInput';
import { VStackExample } from '../examples/Vstack';
import { getSafeAreaEdges } from '../libs/react-native-safe-area-context/getSafeAreaEdges';

export const TopScreen = () => {
  const edges = getSafeAreaEdges('top-horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <ScrollView>
        <VStack gap={32} style={style.vStack}>
          <TextExample />
          <TextInputExample />
          <ButtonExample />
          <IconButtonExample />
          <ImageExample />
          <FlatListExample />
          <VStackExample />
          <HStackExample />
          <DividerExample />
          <ActivityIndicatorExample />
        </VStack>
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
