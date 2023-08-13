import { TopScreen } from '$components/screens/Top/TopScreen';
import { useNativeTheme } from '$hooks/useNativeTheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppNavigator } from './app';
import { linkingConfiguration } from './linking';
import type { RootParamList } from './navigate';

const NativeStack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  const nativeTheme = useNativeTheme();

  return (
    <NavigationContainer theme={nativeTheme} linking={linkingConfiguration}>
      <NativeStack.Navigator initialRouteName="TopScreen">
        <NativeStack.Screen
          name="TopScreen"
          component={TopScreen}
          options={{
            title: 'Top',
          }}
        />
        <NativeStack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ title: 'Main', headerShown: false }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
