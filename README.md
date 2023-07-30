# Arenite-Kit

💎 Design system, UI components for React Native.

## Roadmap

- utility first component interface
- sx property
- expanded theme config
- expanded component types
  - [x] Text
  - [x] Image
  - [x] Box
  - [x] ScrollView
  - [x] HStack
  - [x] VStack
  - [x] Button
  - [x] IconButton
  - [ ] Button Group
  - [x] Divider
  - [ ] SectionList
  - [x] FlatList
  - [ ] Modal
  - [ ] Menu
  - [ ] Popover
  - [x] TextInput
  - [ ] Checkbox
  - [ ] Radio
  - [ ] Picker
  - [ ] Slider
  - [ ] Card
  - [ ] Badge
  - [ ] Chip
  - [ ] Avatar
  - [ ] Tabs
  - [ ] Collapse
  - [ ] Accordion
  - [ ] Toast
  - [ ] Alert
  - [ ] Progress
  - [ ] Skeleton

## Installation

```sh
# npm
npm install arenite-kit

# yarn
yarn add arenite-kit
```

## Usage

```ts
// arenite.config.ts

const commonPallet = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F43F5E',
    secondary: '#FB923C',
    tertiary: '#FBBF24',
    accent: '#3B82F6',
    danger: '#EF4444',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#963ff4',
    secondary: '#3c62fb',
    tertiary: '#24dbfb',
    accent: '#3bf65a',
    danger: '#EF4444',
  },
};

const colorPallet = {
  light: {
    color0: '#FFFFFF',
    color1: '#070417',
    color2: '#C2C6D2',
  },
  dark: {
    color0: '#27272a',
    color1: '#FFFFFF',
    color2: '#A1A1AA',
  },
};
const bgPallet = {
  light: {
    bg0: '#ffffff00',
    bg1: '#F1F5F9',
    bg2: '#FFFFFF',
  },
  dark: {
    bg0: '#00000000',
    bg1: '#27272a',
    bg2: '#3f3f45',
  },
};

const borderPallet = {
  light: {
    border1: '#C2C6D2',
  },
  dark: {
    border1: '#5a5a64',
  },
};

const iconPallet = {
  light: {
    icon1: '#070417',
    icon2: '#ffffff',
  },
  dark: {
    icon1: '#ffffff',
    icon2: '#070417',
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
  createAreniteStyle,
} from 'arenite-kit';
import { Pressable } from 'react-native';
import { myTheme } from './arenite.config';

export default function App() {
  return (
    <AreniteThemeProvider value={myTheme}>
      <View bg="bg1" style={style.textContainer}>
        <Text color="color1">color1</Text>
        <Text color="primary">primary</Text>
        <Text color="secondary">secondary</Text>
        <Text color="tertiary">tertiary</Text>
      </View>

      <Button bg="primary" color="white">Button</Button>
    </AreniteThemeProvider>
  );
}

const style = createAreniteStyle({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // not working
    // backgroundColor: '#fff',
  },
})
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create arenite-kit](https://github.com/callstack/react-native-builder-bob)
