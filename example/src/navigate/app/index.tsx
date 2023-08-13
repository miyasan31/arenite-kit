import { ThemingIcon } from '$components/shared/ThemingIcon';
import { FeaturesNavigator } from '$navigate/app/features';
import { HomeNavigator } from '$navigate/app/home';
import { SettingsNavigator } from '$navigate/app/settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import type { AppNavigatorParamList } from '../navigate';

const BottomTab = createBottomTabNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <ThemingIcon
              icon={focused ? 'primary' : 'icon2'}
              name={focused ? 'home' : 'home-outline'}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="FeaturesNavigator"
        component={FeaturesNavigator}
        options={() => ({
          title: 'Features',
          tabBarIcon: ({ focused }) => (
            <ThemingIcon
              icon={focused ? 'primary' : 'icon2'}
              name={focused ? 'layers' : 'layers-outline'}
              size={24}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="SettingsNavigator"
        component={SettingsNavigator}
        options={() => ({
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <ThemingIcon
              icon={focused ? 'primary' : 'icon2'}
              name={focused ? 'settings' : 'settings-outline'}
              size={24}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};
