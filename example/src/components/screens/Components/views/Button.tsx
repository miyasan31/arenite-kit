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

      <Button bg="primary" color="white" size={'l'} onPress={onToggleTheme}>
        {theme === 'light' ? 'Light' : 'Dark'}
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
          size="s"
        >
          Small
        </Button>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="m"
        >
          Medium
        </Button>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="l"
        >
          Large
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
          size="m"
          radius="s"
        >
          Small
        </Button>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="m"
          radius="m"
        >
          Medium
        </Button>
        <Button
          fullWidth={false}
          bg="primary"
          color="white"
          onPress={onToggleTheme}
          size="m"
          radius="l"
        >
          Large
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
