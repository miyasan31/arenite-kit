import { FeaturesScreen } from '$components/screens/Features/FeaturesScreen';
import type { FeaturesNavigatorParamList } from '$navigate/navigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const NativeStack = createNativeStackNavigator<FeaturesNavigatorParamList>();

export const FeaturesNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName="FeatureScreen">
      <NativeStack.Screen
        name="FeatureScreen"
        component={FeaturesScreen}
        options={{
          title: 'Features',
        }}
      />
    </NativeStack.Navigator>
  );
};
