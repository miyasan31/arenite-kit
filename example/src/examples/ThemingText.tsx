import { Text, useAreniteTheme, View } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';

export const ThemingTextExample = () => {
  const [{ theme }] = useAreniteTheme();

  return (
    <View style={style.container}>
      <Text style={style.title} color={'color1'}>
        Theming Text
      </Text>

      <Text color={'color1'}>current theme is {theme}.</Text>

      <View bg={'bg2'} style={style.textContainer}>
        <Text color={'color1'}>color1</Text>
        <Text color={'color2'}>color2</Text>
        <Text color={'primary'}>primary</Text>
        <Text color={'secondary'}>secondary</Text>
        <Text color={'tertiary'}>tertiary</Text>
        <Text color={'accent'}>accent</Text>
        <Text color={'danger'}>danger</Text>
      </View>
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
  textContainer: {
    gap: 4,
    padding: 12,
    borderRadius: 8,
  },
});
