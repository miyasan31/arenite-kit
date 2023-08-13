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

/**
 * Root
 * */
export type RootParamList = {
  TopScreen: undefined;
  AppNavigator: NavigatorScreenParams<AppNavigatorParamList> | undefined;
};

export type RootScreenProps<T extends keyof RootParamList> =
  NativeStackScreenProps<RootParamList, T>;

/**
 * App
 * */
export type AppNavigatorParamList = {
  ComponentsNavigator:
    | NavigatorScreenParams<ComponentsNavigatorParamList>
    | undefined;
  ThemingNavigator:
    | NavigatorScreenParams<ThemingNavigatorParamList>
    | undefined;
};

export type AppNavigatorProps<T extends keyof AppNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppNavigatorParamList, T>,
    NativeStackScreenProps<RootParamList>
  >;

/**
 * Components
 * */
export type ComponentsNavigatorParamList = {
  ComponentsScreen: undefined;
};

export type ComponentsNavigatorProps<
  T extends keyof ComponentsNavigatorParamList
> = NativeStackScreenProps<ComponentsNavigatorParamList, T>;

/**
 * Theming
 * */
export type ThemingNavigatorParamList = {
  ThemingScreen: undefined;
};

export type ThemingNavigatorProps<T extends keyof ThemingNavigatorParamList> =
  NativeStackScreenProps<ThemingNavigatorParamList, T>;
