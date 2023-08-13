import { HomeScreen } from '$components/screens/Home/HomeScreen';
import type { HomeNavigatorParamList } from '$navigate/navigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const NativeStack = createNativeStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName="HomeScreen">
      <NativeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </NativeStack.Navigator>
  );
};
