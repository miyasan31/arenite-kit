import { ActivityIndicator, HStack, Text, VStack } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';

export const ActivityIndicatorExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        ActivityIndicator
      </Text>

      <HStack gap={24}>
        <ActivityIndicator color={'primary'} />
        <ActivityIndicator color={'primary'} size={'large'} />
      </HStack>
    </VStack>
  );
};

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
