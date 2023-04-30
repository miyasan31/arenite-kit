# arenite-kit

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
    primary: '#963ff4',
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
      <View bg="bg1">
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
    <View bg="bg2">
      <Button bg={"primary"} color={"white"} onPress={toggleTheme}>Toggle theme</Button>
      <Text color="color1">{theme}</Text>
    </View>
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create arenite-kit](https://github.com/callstack/react-native-builder-bob)
