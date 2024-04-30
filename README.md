# Arenite-Kit

💎 Design system, UI components for React Native.

https://github.com/miyasan31/arenite-kit/assets/71614432/95b629d9-c950-4c60-9a99-10c7ec1f3069

## Roadmap

- [ ] Utility-First component interface
- [ ] Sx property
- [ ] Expanded theme config
- [ ] Expanded component types
  - [x] Text
  - [x] Image
  - [x] Box
  - [x] ScrollView
  - [x] HStack
  - [x] VStack
  - [x] Button
  - [x] IconButton
  - [x] Segment
  - [x] Divider
  - [x] ListItem
  - [x] Toast
  - [x] Callout
  - [x] FlatList
  - [x] TextInput
  - [x] Checkbox
  - [x] Radio
  - [x] Badge
  - [x] Chip
  - [x] ListItem
  - [ ] Slider
  - [ ] AvatarGroup
  - [ ] Collapse
  - [ ] Accordion
  - [ ] Popover
  - [ ] Modal
  - [ ] Progress
  - [ ] Picker
  - [ ] Tabs
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
const commonPalette = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F43F5E',
    secondary: '#FB923C',
    tertiary: '#FBBF24',
    success: '#2BDEA3',
    successA: '#2BDEA326',
    warning: '#FBBF24',
    warningA: '#FBBF2426',
    info: '#3B82F6',
    infoA: '#3B82F626',
    error: '#FF5B37',
    errorA: '#FF5B3726',
    danger: '#FF0000',
    dangerA: '#FF000026',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#963FF4',
    secondary: '#3C62FB',
    tertiary: '#24DBFB',
    success: '#10B981',
    successA: '#10B98126',
    warning: '#FBBF24',
    warningA: '#FBBF2426',
    info: '#569AFF',
    infoA: '#569AFF26',
    error: '#FF6969',
    errorA: '#FF696926',
    danger: '#AC0000',
    dangerA: '#AC000026',
  },
  dracula: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#BD93F9',
    secondary: '#FF79C6',
    tertiary: '#F1FA8C',
    success: '#50FA7B',
    successA: '#50FA7B26',
    warning: '#FFB86C',
    warningA: '#FFB86C26',
    info: '#8BE9FD',
    infoA: '#8BE9FD26',
    error: '#FF5555',
    errorA: '#FF555526',
    danger: '#FF5555',
    dangerA: '#FF555526',
  },
};

const colorPalette = {
  light: {
    color0: '#FFFFFF',
    color1: '#070417',
    color2: '#AAADB8',
    color9: '#FFFFFF',
  },
  dark: {
    color0: '#27272A',
    color1: '#FFFFFF',
    color2: '#A1A1AA',
    color9: '#000000',
  },
  dracula: {
    color0: '#FFFFFF',
    color1: '#C2C6D2',
    color2: '#6272A4',
    color9: '#070417',
  },
};

const bgPalette = {
  light: {
    bg0: '#FFFFFF00',
    bg1: '#F1F5F9',
    bg2: '#FFFFFF',
    bg3: '#B9BBC5',
    // ...
    bg9: '#27272A',
  },
  dark: {
    bg0: '#00000000',
    bg1: '#27272A',
    bg2: '#3F3F45',
    bg3: '#D9D9D9',
    // ...
    bg9: '#FFFFFF',
  },
  dracula: {
    bg0: '#FFFFFF00',
    bg1: '#282A36',
    bg2: '#44475A',
    bg3: '#6272A4',
    // ...
    bg9: '#FFFFFF',
  },
};

const borderPalette = {
  light: {
    border1: '#C2C6D2',
    border2: '#E5E7EB',
    border3: '#27272A',
  },
  dark: {
    border1: '#747481',
    border2: '#525259',
    border3: '#FFFFFF',
  },
  dracula: {
    border1: '#44475A',
    border2: '#344D5A',
    border3: '#6272A4',
  },
};

const iconPalette = {
  light: {
    icon1: '#070417',
    icon2: '#C2C6D2',
  },
  dark: {
    icon1: '#FFFFFF',
    icon2: '#A1A1AA',
  },
  dracula: {
    icon1: '#070417',
    icon2: '#C2C6D2',
  },
};

export const myThemePalettes = {
  common: commonPalette,
  color: colorPalette,
  bg: bgPalette,
  border: borderPalette,
  icon: iconPalette,
} as const;

declare module 'arenite-kit' {
  interface AreniteCustomTheme {
    theme: 'light' | 'dark' | 'auto' | 'dracula';
    palettes: typeof myThemePalettes;
  }
}
```

```js
// App.tsx

import React from "react";
import {
  Text,
  Box,
  Button,
  Image,
  ScrollView,
  AreniteThemeProvider,
  createAreniteStyle,
} from "arenite-kit";
import { Pressable } from "react-native";
import { myTheme } from "./arenite.config";

export default function App() {
  return (
    <AreniteThemeProvider value={myTheme}>
      <Toast.Provider topOffset={104}>
        <Toast />
        <ScrollView>
          <Box bg="bg1" style={style.textContainer}>
            <Text color="color1">color1</Text>
            <Text color="primary">primary</Text>
          </Box>
          <Image source={require("./assets/icon.png")} />
          <Button bg="primary" color="white">
            Button
          </Button>
          <TextInput
            placeholder={'placeholder'}
            bg={'bg2'}
            color={'color1'}
            selectionColor={'primary'}
            placeholderTextColor={'color2'}
          />
        </ScrollView>
      </Toast.Provider>
    </AreniteThemeProvider>
  );
}

const style = createAreniteStyle({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // not working
  },
})
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create arenite-kit](https://github.com/callstack/react-native-builder-bob)
