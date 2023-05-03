import { Button, Text, useAreniteTheme, VStack } from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';
import { areniteThemeStorageKey } from '../constants/asyncStorageKeys';
import { asyncStorage } from '../libs/react-native-async-storage/asyncStorage';

export const ButtonExample = () => {
  const [{ theme }, { toggleTheme }] = useAreniteTheme();

  const onToggleTheme = async () => {
    const changedTheme = toggleTheme();
    await asyncStorage.set(areniteThemeStorageKey, changedTheme);
  };

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

      <Button
        bg={'primary'}
        color={'white'}
        left={Icon}
        onPress={onToggleTheme}
      >
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
