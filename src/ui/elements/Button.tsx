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
  size?: 'sm' | 'md' | 'lg';
  radius?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
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
    size = 'md',
    radius = 'md',
    fullWidth = true,
  } = props;

  const sizingStyle = {
    sm: smStyle,
    md: mdStyle,
    lg: lgStyle,
  }[size];

  const radiusStyle = {
    sm: { borderRadius: 0 },
    md: { borderRadius: 8 },
    lg: { borderRadius: 999 },
  }[radius];

  const fullWidthStyle = fullWidth ? { flex: 1 } : {};

  return (
    <Bounceable
      ref={ref}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      noBounce={noBounce}
      style={{ pressable: [fullWidthStyle] }}
    >
      <Box
        style={[sizingStyle.view, radiusStyle, viewStyle]}
        bg={bg}
        lightBg={lightBg}
        darkBg={darkBg}
        border={border}
        lightBorder={lightBorder}
        darkBorder={darkBorder}
      >
        {left}
        <Text
          style={[sizingStyle.text, textStyle]}
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

const smStyle = createAreniteStyle({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const mdStyle = createAreniteStyle({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const lgStyle = createAreniteStyle({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export const Button = memo(
  forwardRef<NativeView, ButtonProps>(ButtonComponent)
);
