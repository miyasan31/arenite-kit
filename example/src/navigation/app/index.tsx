import { ThemingIcon } from '$components/shared/ThemingIcon';
import { ComponentsNavigator } from '$navigation/app/components';
import { ThemingNavigator } from '$navigation/app/theming';
import type { AppNavigatorParamList } from '$navigation/navigate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ComponentsNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="ComponentsNavigator"
        component={ComponentsNavigator}
        options={() => ({
          title: 'Components',
          tabBarIcon: ({ focused }) => (
            <ThemingIcon
              icon={focused ? 'primary' : 'icon2'}
              name={focused ? 'flower' : 'flower-outline'}
              size={24}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="ThemingNavigator"
        component={ThemingNavigator}
        options={() => ({
          title: 'Theming',
          tabBarIcon: ({ focused }) => (
            <ThemingIcon
              icon={focused ? 'primary' : 'icon2'}
              name={focused ? 'color-palette' : 'color-palette-outline'}
              size={24}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};
