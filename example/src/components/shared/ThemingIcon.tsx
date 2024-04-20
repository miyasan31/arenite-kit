import { ColorThemeProps, usePaletteColor } from 'arenite-kit';
import Icon from 'react-native-vector-icons/Ionicons';

type ThemingIconProps = {
  name: string;
  size?: number;
} & ColorThemeProps;

export const ThemingIcon = (props: ThemingIconProps) => {
  const { name, color = 'color1', size = 24, lightColor, darkColor } = props;

  const iconColor = usePaletteColor('color', color, {
    light: lightColor,
    dark: darkColor,
  });

  return <Icon name={name} color={iconColor} size={size} />;
};
