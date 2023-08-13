import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import type { RootParamList } from './navigate';

export const linkingConfiguration: LinkingOptions<RootParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      TopScreen: 'top',
      AppNavigator: {
        screens: {
          HomeNavigator: {
            screens: {
              HomeScreen: 'home',
            },
          },
          FeaturesNavigator: {
            screens: {
              FeaturesScreen: 'features',
            },
          },
          SettingsNavigator: {
            screens: {
              SettingsScreen: 'settings',
            },
          },
        },
      },
    },
  },
};
