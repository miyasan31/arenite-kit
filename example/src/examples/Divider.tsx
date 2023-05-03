import { Divider, Text, VStack } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';

export const DividerExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Divider
      </Text>

      <Divider border={'border1'} />
      <Divider border={'border1'} color={'color1'} label={'Label'} />
    </VStack>
  );
};

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});