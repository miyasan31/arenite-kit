import { ComponentsScreen } from '$components/screens/Components/ComponentsScreen';
import type { ComponentsNavigatorParamList } from '$navigation/navigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NativeStack = createNativeStackNavigator<ComponentsNavigatorParamList>();

export const ComponentsNavigator = () => {
  return (
    <NativeStack.Navigator initialRouteName="ComponentsScreen">
      <NativeStack.Screen
        name="ComponentsScreen"
        component={ComponentsScreen}
        options={{ title: 'Components' }}
      />
    </NativeStack.Navigator>
  );
};
