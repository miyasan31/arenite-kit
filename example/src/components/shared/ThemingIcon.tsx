import React from 'react';
import { IconThemeProps, usePalletColor } from 'arenite-kit';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

type ThemingIconProps = {
  name: string;
  size?: number;
} & IconThemeProps;

export const ThemingIcon = (props: ThemingIconProps) => {
  const { name, icon = 'icon2', size = 24, lightIcon, darkIcon } = props;

  const iconColor = usePalletColor('icon', icon, {
    light: lightIcon,
    dark: darkIcon,
  });

  return <IoniconsIcon name={name} color={iconColor} size={size} />;
};
