import React, { ReactNode } from 'react';
import { StyleSheet, View as NativeView } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';

import { View } from '../primitives';
import { Bounceable } from './Bounceable';

export type IconButtonProps = {
  children: ReactNode;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  noBounce?: boolean;
  size?: number;
  viewStyle?: NativeView['props']['style'];
} & BgThemeProps &
  BorderThemeProps;

export const IconButton = (props: IconButtonProps) => {
  const {
    children,
    onPress,
    onLongPress,
    disabled,
    noBounce,
    size = 52,
    viewStyle,
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
  } = props;

  const squareStyle = { width: size, height: size };

  return (
    <Bounceable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      noBounce={noBounce}
      pressableStyle={squareStyle}
      animatedViewStyle={squareStyle}
      scaleTo={0.95}
    >
      <View
        style={[squareStyle, defaultStyle.view, viewStyle]}
        bg={bg}
        lightBg={lightBg}
        darkBg={darkBg}
        border={border}
        lightBorder={lightBorder}
        darkBorder={darkBorder}
      >
        {children}
      </View>
    </Bounceable>
  );
};

const defaultStyle = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
