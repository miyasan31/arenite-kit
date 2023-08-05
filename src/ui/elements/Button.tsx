import React, {
  ForwardedRef,
  forwardRef,
  memo,
  ReactElement,
  ReactNode,
} from 'react';
import type { View as NativeView } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
} from '../../core';
import { createAreniteStyle } from '../../style';
import type { AreniteTextStyleProps, AreniteViewStyleProps } from '../../style';
import { Text, Box } from '../primitives';
import { Bounceable } from './Bounceable';

export type ButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  left?: ReactElement;
  right?: ReactElement;
  noBounce?: boolean;
  disabled?: boolean;
  viewStyle?: AreniteViewStyleProps;
  textStyle?: AreniteTextStyleProps;
} & BgThemeProps &
  BorderThemeProps &
  ColorThemeProps;

const ButtonComponent = (props: ButtonProps, ref: ForwardedRef<NativeView>) => {
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
      ref={ref}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      noBounce={noBounce}
      style={{
        pressable: defaultStyle.pressable,
      }}
    >
      <Box
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
      </Box>
    </Bounceable>
  );
};

const defaultStyle = createAreniteStyle({
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

export const Button = memo(
  forwardRef<NativeView, ButtonProps>(ButtonComponent)
);
