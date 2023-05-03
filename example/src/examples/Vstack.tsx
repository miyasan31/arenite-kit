import { Text, View, VStack } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';

export const VStackExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        VStack
      </Text>

      <VStack gap={8}>
        <View bg={'bg2'} border={'border1'} style={style.box} />
        <View bg={'bg2'} border={'border1'} style={style.box} />
        <View bg={'bg2'} border={'border1'} style={style.box} />
      </VStack>
    </VStack>
  );
};

const style = StyleSheet.create({
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
