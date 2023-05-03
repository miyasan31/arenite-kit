import {
  IconButton,
  IconThemeProps,
  Text,
  useAreniteTheme,
  useThemeColor,
  View,
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
  const [_, { toggleTheme }] = useAreniteTheme();

  return (
    <View style={style.container}>
      <Text style={style.title} color={'color1'}>
        IconButton
      </Text>

      <View style={style.buttonGroup}>
        <IconButton bg={'primary'} onPress={toggleTheme}>
          <ThemingIcon name={'home-outline'} />
        </IconButton>

        <IconButton bg={'secondary'} onPress={toggleTheme}>
          <ThemingIcon name={'search-outline'} />
        </IconButton>

        <IconButton bg={'tertiary'} onPress={toggleTheme}>
          <ThemingIcon name={'chatbubbles-outline'} />
        </IconButton>

        <IconButton bg={'accent'} onPress={toggleTheme}>
          <ThemingIcon name={'notifications-outline'} />
        </IconButton>

        <IconButton bg={'danger'} onPress={toggleTheme}>
          <ThemingIcon name={'trash-outline'} />
        </IconButton>

        <IconButton
          bg={'bg2'}
          border={'border1'}
          viewStyle={style.roundedButton}
          onPress={toggleTheme}
        >
          <ThemingIcon name={'settings-outline'} icon={'icon1'} />
        </IconButton>
      </View>
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
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundedButton: {
    borderRadius: 100,
  },
});
