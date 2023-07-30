import { createAreniteStyle, HStack, Text, View, VStack } from 'arenite-kit';
import React from 'react';

export const HStackExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        HStack
      </Text>

      <HStack gap={8}>
        <View bg={'bg2'} border={'border1'} style={style.box} />
        <View bg={'bg2'} border={'border1'} style={style.box} />
        <View bg={'bg2'} border={'border1'} style={style.box} />
      </HStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
