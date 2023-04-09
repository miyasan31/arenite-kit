import React from 'react';

import {
  Button,
  AreniteThemeProvider,
  Text,
  View,
  useAreniteTheme,
} from 'arenite-kit';
import { Pressable } from 'react-native';
import { myTheme } from './arenite.config';

export default function App() {
  return (
    <AreniteThemeProvider value={myTheme}>
      <View style={[{ marginTop: 100 }]} bg="bg2" border="border1">
        <Text color="color1">color1</Text>
        <Text color="color2">color2</Text>
        <Text color="white">white</Text>
        <Text color="black">black</Text>
        <Text color="primary">primary</Text>
        <Text color="secondary">secondary</Text>
        <Text color="tertiary">tertiary</Text>
      </View>

      <ChildView />
    </AreniteThemeProvider>
  );
}

const ChildView = () => {
  const [{ theme }, { toggleTheme }] = useAreniteTheme();

  return (
    <View>
      <Pressable onPress={toggleTheme}>
        <Button>テーマ変更</Button>
      </Pressable>

      <Text color="color1">{theme}</Text>
    </View>
  );
};
