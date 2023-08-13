import type { RootParamList } from '$navigation/navigate';
import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

export const linkingConfiguration: LinkingOptions<RootParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      TopScreen: 'top',
      AppNavigator: {
        screens: {
          ComponentsNavigator: {
            screens: {
              ComponentsScreen: 'components',
            },
          },
          ThemingNavigator: {
            screens: {
              ThemingScreen: 'theming',
            },
          },
        },
      },
    },
  },
};
