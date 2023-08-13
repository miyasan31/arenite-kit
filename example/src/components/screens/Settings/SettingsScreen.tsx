import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import { SafeAreaView, Text } from 'arenite-kit';
import React from 'react';

export const SettingsScreen = () => {
  const edges = getSafeAreaEdges('horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};
