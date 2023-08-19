# Arenite-Kit

💎 Design system, UI components for React Native.

https://github.com/miyasan31/arenite-kit/assets/71614432/95b629d9-c950-4c60-9a99-10c7ec1f3069

## Roadmap

- [ ] UtilityFirst component interface
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
  - [x] Button Group
  - [x] Divider
  - [ ] SectionList
  - [x] FlatList
  - [ ] Modal
  - [ ] Popover
  - [x] TextInput
  - [ ] Checkbox
  - [x] Radio
  - [ ] Picker
  - [ ] Slider
  - [ ] Card
  - [ ] Badge
  - [ ] Chip
  - [ ] Avatar
  - [ ] Tabs
  - [ ] Collapse
  - [ ] Accordion
  - [x] Toast
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
    white: "#FFFFFF",
    black: "#000000",
    primary: "#F43F5E",
    secondary: "#FB923C",
    tertiary: "#FBBF24",
    accent: "#3B82F6",
    danger: "#EF4444",
  },
  dark: {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#963ff4",
    secondary: "#3c62fb",
    tertiary: "#24dbfb",
    accent: "#3bf65a",
    danger: "#EF4444",
  },
};

const colorPallet = {
  light: {
    color0: "#FFFFFF",
    color1: "#070417",
    color2: "#C2C6D2",
  },
  dark: {
    color0: "#27272a",
    color1: "#FFFFFF",
    color2: "#A1A1AA",
  },
};

const bgPallet = {
  light: {
    bg0: "#ffffff00",
    bg1: "#F1F5F9",
    bg2: "#FFFFFF",
  },
  dark: {
    bg0: "#00000000",
    bg1: "#27272a",
    bg2: "#3f3f45",
  },
};

const borderPallet = {
  light: {
    border1: "#C2C6D2",
    border2: "#E5E7EB",
  },
  dark: {
    border1: "#5a5a64",
    border2: "#3f3f45",
  },
};

const iconPallet = {
  light: {
    icon1: "#070417",
    icon2: "#ffffff",
  },
  dark: {
    icon1: "#ffffff",
    icon2: "#070417",
  },
};

export const myTheme = {
  theme: "light",
  pallets: {
    common: commonPallet,
    color: colorPallet,
    bg: bgPallet,
    border: borderPallet,
    icon: iconPallet,
  },
} as const;

declare module "arenite-kit" {
  interface AreniteCustomTheme {
    pallets: typeof myTheme.pallets;
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
  IconButton,
  Radio,
  TextInput,
  VStack,
  HStack,
  Divider,
  Image,
  FlatList,
  ScrollView,
  AreniteThemeProvider,
  useAreniteTheme,
  createAreniteStyle,
} from "arenite-kit";
import { Pressable } from "react-native";
import { myTheme } from "./arenite.config";

export default function App() {
  return (
    <AreniteThemeProvider value={myTheme}>
      <ScrollView>
        <Box bg="bg1" style={style.textContainer}>
          <Text color="color1">color1</Text>
          <Text color="primary">primary</Text>
          <Text color="secondary">secondary</Text>
        </Box>
        <Image source={require("./assets/icon.png")} />
        <Divider border="border1" />
        <VStack>
          <TextInput
            placeholder="placeholder"
            bg="bg2"
            color="color1"
            selectionColor="primary"
            placeholderTextColor="color2"
          />
          <HStack>
            <Radio.Group>
              <Radio value="light">1</Radio>
              <Radio value="dark">2</Radio>
              <Radio value="system">3</Radio>
            </Radio.Group>
          </HStack>
          <Button bg="primary" color="white">Button</Button>
          <IconButton bg="primary" onPress={onPress}>
            <ThemingIcon name="home-outline" />
          </IconButton>
        </VStack>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={datasets}
          horizontal={true}
          renderItem={() => <SomeComponent />}
        />
      </ScrollView>
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
