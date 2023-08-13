import { ActivityIndicatorExample } from '$components/screens/Features/views/ActivityIndicator';
import { ButtonExample } from '$components/screens/Features/views/Button';
import { ButtonGroupExample } from '$components/screens/Features/views/ButtonGroup';
import { DividerExample } from '$components/screens/Features/views/Divider';
import { FlatListExample } from '$components/screens/Features/views/FlatList';
import { HStackExample } from '$components/screens/Features/views/Hstack';
import { IconButtonExample } from '$components/screens/Features/views/IconButton';
import { ImageExample } from '$components/screens/Features/views/Image';
import { RadioExample } from '$components/screens/Features/views/Radio';
import { TextExample } from '$components/screens/Features/views/Text';
import { TextInputExample } from '$components/screens/Features/views/TextInput';
import { ToastExample } from '$components/screens/Features/views/Toast';
import { VStackExample } from '$components/screens/Features/views/Vstack';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import {
  createAreniteStyle,
  SafeAreaView,
  ScrollView,
  VStack,
} from 'arenite-kit';
import React from 'react';

export const FeaturesScreen = () => {
  const edges = getSafeAreaEdges('horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <ScrollView>
        <VStack gap={32} style={style.vStack}>
          <TextExample />
          <TextInputExample />
          <RadioExample />
          <ButtonExample />
          <ButtonGroupExample />
          <IconButtonExample />
          <ImageExample />
          <FlatListExample />
          <VStackExample />
          <HStackExample />
          <ToastExample />
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
