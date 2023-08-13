import { TopScreen } from '$components/screens/Top/TopScreen';
import { useNativeTheme } from '$hooks/useNativeTheme';
import { AppNavigator } from '$navigation/app';
import { linkingConfiguration } from '$navigation/linking';
import type { RootParamList } from '$navigation/navigate';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

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
