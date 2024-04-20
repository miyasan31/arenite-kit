import { ThemingIcon } from '$components/shared/ThemingIcon';
import {
  createAreniteStyle,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'arenite-kit';

export const IconButtonExample = () => {
  const onPress = () => {
    console.log('onPress');
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        IconButton
      </Text>

      <HStack justify={'space-between'}>
        <IconButton bg={'primary'} onPress={onPress}>
          <ThemingIcon color={'white'} name={'home-outline'} />
        </IconButton>

        <IconButton bg={'secondary'} onPress={onPress}>
          <ThemingIcon color={'white'} name={'search-outline'} />
        </IconButton>

        <IconButton bg={'tertiary'} onPress={onPress}>
          <ThemingIcon color={'white'} name={'chatbubbles-outline'} />
        </IconButton>

        <IconButton bg={'warning'} onPress={onPress}>
          <ThemingIcon color={'white'} name={'notifications-outline'} />
        </IconButton>

        <IconButton bg={'danger'} onPress={onPress}>
          <ThemingIcon color={'white'} name={'trash-outline'} />
        </IconButton>

        <IconButton
          bg={'bg2'}
          border={'border1'}
          onPress={onPress}
          radius={'lg'}
        >
          <ThemingIcon name={'settings-outline'} color={'color1'} />
        </IconButton>
      </HStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
