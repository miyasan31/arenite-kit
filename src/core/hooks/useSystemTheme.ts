import type { ColorSchemeName } from 'react-native';
import { useColorScheme } from 'react-native';

export const useSystemTheme = (): NonNullable<ColorSchemeName> => {
  return useColorScheme() as NonNullable<ColorSchemeName>;
};
