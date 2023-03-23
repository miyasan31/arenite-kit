import React from 'react';

import { Button, AreniteThemeProvider, Text, View } from 'arenite-kit';
import { myTheme } from './arenite.config';

export default function App() {
  return (
    <AreniteThemeProvider theme={myTheme}>
      <View bg="bg1" border="border1">
        <Text color="color1">color1</Text>
        <Text color="primary">primary</Text>
      </View>
      <Button>ボタン</Button>
    </AreniteThemeProvider>
  );
}
