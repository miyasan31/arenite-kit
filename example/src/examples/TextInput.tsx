import { Text, TextInput, View } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';

export const TextInputExample = () => {
  return (
    <View style={style.container}>
      <Text style={style.title} color={'color1'}>
        TextInput
      </Text>

      <Text style={style.label} color={'color1'}>
        Label
      </Text>

      <TextInput
        placeholder={'placeholder'}
        bg={'bg2'}
        color={'color1'}
        selectionColor={'primary'}
        placeholderTextColor={'color2'}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    gap: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  label: {
    fontSize: 18,
  },
});
