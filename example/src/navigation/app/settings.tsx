import { SettingsScreen } from '$components/screens/Settings/SettingsScreen';
import type { SettingsNavigatorParamList } from '$navigation/navigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const NativeStack = createNativeStackNavigator<SettingsNavigatorParamList>();

export const SettingsNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName="SettingsScreen">
      <NativeStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Home',
        }}
      />
    </NativeStack.Navigator>
  );
};
