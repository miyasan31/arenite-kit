import {
  HStack,
  IconButton,
  IconThemeProps,
  Text,
  useThemeColor,
  VStack,
} from 'arenite-kit';
import React from 'react';
import { StyleSheet } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size?: number;
} & IconThemeProps;

const ThemingIcon = (props: Props) => {
  const { name, icon = 'icon2', size = 24, lightIcon, darkIcon } = props;

  const iconColor = useThemeColor('icon', icon, {
    light: lightIcon,
    dark: darkIcon,
  });

  return <IoniconsIcon name={name} color={iconColor} size={size} />;
};

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

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  roundedButton: {
    borderRadius: 100,
  },
});
