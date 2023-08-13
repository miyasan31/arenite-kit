import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootParamList;
  }
}

export type RootParamList = {
  TopScreen: undefined;
  AppNavigator: NavigatorScreenParams<AppNavigatorParamList> | undefined;
};

export type RootScreenProps<T extends keyof RootParamList> =
  NativeStackScreenProps<RootParamList, T>;

export type AppNavigatorParamList = {
  HomeNavigator: NavigatorScreenParams<HomeNavigatorParamList> | undefined;
  FeaturesNavigator:
    | NavigatorScreenParams<FeaturesNavigatorParamList>
    | undefined;
  SettingsNavigator:
    | NavigatorScreenParams<SettingsNavigatorParamList>
    | undefined;
};

export type MainScreenProps<T extends keyof AppNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppNavigatorParamList, T>,
    NativeStackScreenProps<RootParamList>
  >;

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type HomeScreenProps = RootScreenProps<HomeNavigatorParamList>;

export type FeaturesNavigatorParamList = {
  FeatureScreen: undefined;
};

export type FeaturesScreenProps = RootScreenProps<FeaturesNavigatorParamList>;

export type SettingsNavigatorParamList = {
  SettingsScreen: undefined;
};

export type SettingsScreenProps = RootScreenProps<SettingsNavigatorParamList>;
