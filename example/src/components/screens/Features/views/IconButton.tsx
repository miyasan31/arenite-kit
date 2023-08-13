import { ThemingIcon } from '$components/shared/ThemingIcon';
import {
  createAreniteStyle,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'arenite-kit';
import React from 'react';

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
          <ThemingIcon name={'home-outline'} />
        </IconButton>

        <IconButton bg={'secondary'} onPress={onPress}>
          <ThemingIcon name={'search-outline'} />
        </IconButton>

        <IconButton bg={'tertiary'} onPress={onPress}>
          <ThemingIcon name={'chatbubbles-outline'} />
        </IconButton>

        <IconButton bg={'accent'} onPress={onPress}>
          <ThemingIcon name={'notifications-outline'} />
        </IconButton>

        <IconButton bg={'danger'} onPress={onPress}>
          <ThemingIcon name={'trash-outline'} />
        </IconButton>

        <IconButton
          bg={'bg2'}
          border={'border1'}
          viewStyle={style.roundedButton}
          onPress={onPress}
        >
          <ThemingIcon name={'settings-outline'} icon={'icon1'} />
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
  roundedButton: {
    borderRadius: 100,
  },
});
