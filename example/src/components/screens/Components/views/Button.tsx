import { ThemingIcon } from '$components/shared/ThemingIcon';

import { areniteThemeStorageKey } from '$constants/asyncStorageKeys';
import { asyncStorage } from '$libs/react-native-async-storage/asyncStorage';
import {
  Button,
  createAreniteStyle,
  HStack,
  Text,
  useAreniteTheme,
  VStack,
} from 'arenite-kit';

export const ButtonExample = () => {
  const [{ theme }, { setTheme }] = useAreniteTheme();

  const onToggleTheme = async () => {
    const changedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(changedTheme);
    await asyncStorage.set(areniteThemeStorageKey, changedTheme);
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color="color1">
        Button
      </Text>

      <Button
        bg="primary"
        color="white"
        onPress={onToggleTheme}
        left={<ThemingIcon name={'logo-github'} size={24} color={'white'} />}
      >
        Default Button Style
      </Button>

      <Text style={style.subtitle} color="color1">
        Size
      </Text>

      <HStack gap={12}>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="sm"
        >
          sm
        </Button>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="md"
        >
          md
        </Button>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="lg"
        >
          lg
        </Button>
      </HStack>

      <Text style={style.subtitle} color="color1">
        Radius
      </Text>

      <HStack gap={12}>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="md"
          radius="sm"
        >
          sm
        </Button>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="md"
          radius="md"
        >
          md
        </Button>
        <Button
          fullWidth={false}
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
