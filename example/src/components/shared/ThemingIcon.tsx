import { IconThemeProps, usePaletteColor } from 'arenite-kit';
import Icon from 'react-native-vector-icons/Ionicons';

type ThemingIconProps = {
  name: string;
  size?: number;
} & IconThemeProps;

export const ThemingIcon = (props: ThemingIconProps) => {
  const { name, icon = 'icon2', size = 24, lightIcon, darkIcon } = props;

  const iconColor = usePaletteColor('icon', icon, {
    light: lightIcon,
    dark: darkIcon,
  });

  return <Icon name={name} color={iconColor} size={size} />;
};
