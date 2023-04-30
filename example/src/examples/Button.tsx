import { Button, Text, useAreniteTheme, View } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';

export const ButtonExample = () => {
  const [{ theme }, { toggleTheme }] = useAreniteTheme();

  const Icon =
    theme === 'light' ? (
      <Text color="color1">🌞</Text>
    ) : (
      <Text color="color1">🌚</Text>
    );

  return (
    <View style={style.container}>
      <Text style={style.title} color={'color1'}>
        Button
      </Text>

      <Button bg={'primary'} color={'white'} left={Icon} onPress={toggleTheme}>
        Toggle theme
      </Button>
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
});
