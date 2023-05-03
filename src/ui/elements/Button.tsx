import React, { ReactElement, ReactNode } from 'react';
import {
  StyleSheet,
  Text as NativeText,
  View as NativeView,
} from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
} from '../../core';
import { Bounceable, Text, View } from '../primitives';

export type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  onLongPress?: () => void;
  left?: ReactElement;
  right?: ReactElement;
  noBounce?: boolean;
  disabled?: boolean;
  viewStyle?: NativeView['props']['style'];
  textStyle?: NativeText['props']['style'];
} & BgThemeProps &
  BorderThemeProps &
  ColorThemeProps;

export const Button = (props: ButtonProps) => {
  const {
    children,
    onPress,
    onLongPress,
    left,
    right,
    noBounce,
    disabled,
    viewStyle,
    textStyle,
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
    color,
    lightColor,
    darkColor,
  } = props;

  return (
    <Bounceable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      noBounce={noBounce}
      pressableStyle={defaultStyle.pressable}
    >
      <View
        style={[defaultStyle.view, viewStyle]}
        bg={bg}
        lightBg={lightBg}
        darkBg={darkBg}
        border={border}
        lightBorder={lightBorder}
        darkBorder={darkBorder}
      >
        {left}

        <Text
          style={[defaultStyle.text, textStyle]}
          color={color}
          lightColor={lightColor}
          darkColor={darkColor}
        >
          {children}
        </Text>

        {right}
      </View>
    </Bounceable>
  );
};

const defaultStyle = StyleSheet.create({
  pressable: {
    width: '100%',
  },
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    borderRadius: 8,
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
