import { Button, Text, useAreniteTheme, VStack } from 'arenite-kit';
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
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Button
      </Text>

      <Button bg={'primary'} color={'white'} left={Icon} onPress={toggleTheme}>
        Toggle theme
      </Button>
    </VStack>
  );
};

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
