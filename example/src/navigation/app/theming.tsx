import { ThemingScreen } from '$components/screens/Theming/ThemingScreen';
import type { ThemingNavigatorParamList } from '$navigation/navigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NativeStack = createNativeStackNavigator<ThemingNavigatorParamList>();

export const ThemingNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName="ThemingScreen">
      <NativeStack.Screen
        name="ThemingScreen"
        component={ThemingScreen}
        options={{ title: 'Theming' }}
      />
    </NativeStack.Navigator>
  );
};
