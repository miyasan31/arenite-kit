# arenite-kit

null

## Installation

```sh
npm install arenite-kit
```

## Usage

```ts
// arenite.config.ts

const commonPallet = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F43F5E',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#FB923C',
  },
};

const colorPallet = {
  light: {
    color1: '#333333',
  },
  dark: {
    color1: '#FFFFFF',
  },
};
const bgPallet = {
  light: {
    bg1: '#FFFFFF',
  },
  dark: {
    bg1: '#27272a',
  },
};

const borderPallet = {
  light: {
    border1: '#C2C6D2',
  },
  dark: {
    border1: '#A1A1AA',
  },
};

const iconPallet = {
  light: {
    icon1: '#C2C6D2',
  },
  dark: {
    icon1: '#A1A1AA',
  },
};

export const myTheme = {
  theme: 'light',
  pallets: {
    common: commonPallet,
    color: colorPallet,
    bg: bgPallet,
    border: borderPallet,
    icon: iconPallet,
  },
} as const;

declare module 'arenite-kit' {
  interface AreniteCustomTheme {
    pallets: typeof myTheme.pallets;
  }
}
```

```js
// App.tsx

import React from 'react';
import { Button, AreniteThemeProvider, Text, View } from 'arenite-kit';
import { myTheme } from './arenite.config';

export default function App() {
  return (
    <AreniteThemeProvider theme={myTheme}>
      <View bg="bg1" border="border1">
        <Text color="color1">color1</Text>
        <Text color="primary">primary</Text>
        <Button color="primary" bg="bg1" border="border1">  
          Button
        </Button>
      </View>
    </AreniteThemeProvider>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create arenite-kit](https://github.com/callstack/react-native-builder-bob)
