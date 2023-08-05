import {
  Button,
  createAreniteStyle,
  HStack,
  Text,
  useAreniteTheme,
  VStack,
} from 'arenite-kit';
import React from 'react';

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
      <Text style={style.title} color="color1">
        Button
      </Text>

      <Button bg="primary" color="white" left={Icon} onPress={onToggleTheme}>
        Default
      </Button>

      <Text style={style.subtitle} color="color1">
        Size
      </Text>

      <HStack gap={12}>
        <Button bg="primary" color="white" onPress={onToggleTheme} size="sm">
          sm
        </Button>
        <Button bg="primary" color="white" onPress={onToggleTheme} size="md">
          md
        </Button>
        <Button bg="primary" color="white" onPress={onToggleTheme} size="lg">
          lg
        </Button>
      </HStack>

      <Text style={style.subtitle} color="color1">
        Radius
      </Text>

      <HStack gap={12}>
        <Button
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="md"
          radius="sm"
        >
          sm
        </Button>
        <Button
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="md"
          radius="md"
        >
          md
        </Button>
        <Button
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="md"
          radius="lg"
        >
          lg
        </Button>
      </HStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
  },
});
