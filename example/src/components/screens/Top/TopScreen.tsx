import { ThemingIcon } from '$components/shared/ThemingIcon';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';

import type { RootScreenProps } from '$navigation/navigate';
import {
  Button,
  createAreniteStyle,
  SafeAreaView,
  Text,
  VStack,
} from 'arenite-kit';

export const TopScreen = ({ navigation }: RootScreenProps<'TopScreen'>) => {
  const edges = getSafeAreaEdges('horizontal');

  const onPressNavigateApp = () => {
    navigation.navigate('AppNavigator');
  };

  return (
    <SafeAreaView edges={edges} bg={'bg1'} isCenter style={style.container}>
      <Text color={'color1'} style={style.title}>
        Arenite-Kit
      </Text>

      <VStack gap={4}>
        <Text color={'color1'} style={style.description}>
          💎 Design system, UI components
        </Text>
        <Text color={'color1'} style={style.description}>
          for React Native.
        </Text>
      </VStack>

      <Button
        bg={'primary'}
        color={'white'}
        rounded={'lg'}
        size={'lg'}
        onPress={onPressNavigateApp}
        fullWidth={false}
        rightComponent={
          <ThemingIcon color={'white'} name="arrow-forward" size={20} />
        }
      >
        Getting Started
      </Button>
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    gap: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
