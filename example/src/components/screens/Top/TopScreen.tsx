import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { Button, SafeAreaView, Text } from 'arenite-kit';
import React from 'react';
import type { RootScreenProps } from '$navigation/navigate';

export const TopScreen = ({ navigation }: RootScreenProps<'TopScreen'>) => {
  const edges = getSafeAreaEdges('horizontal');

  const onPressNavigateApp = () => {
    navigation.navigate('AppNavigator');
  };

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <Text>TopScreen</Text>

      <Button bg="primary" color="white" onPress={onPressNavigateApp}>
        Getting Started
      </Button>
    </SafeAreaView>
  );
};
