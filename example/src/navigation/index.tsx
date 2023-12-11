import { TopScreen } from '$components/screens/Top/TopScreen';
import { useNativeTheme } from '$hooks/useNativeTheme';
import { AppNavigator } from '$navigation/app';
import { linkingConfiguration } from '$navigation/linking';
import type { RootParamList } from '$navigation/navigate';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NativeStack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  const nativeTheme = useNativeTheme();

  return (
    <NavigationContainer theme={nativeTheme} linking={linkingConfiguration}>
      <NativeStack.Navigator initialRouteName="TopScreen">
        <NativeStack.Screen
          name="TopScreen"
          component={TopScreen}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
