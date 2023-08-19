import React, { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { BgThemeProps, BorderThemeProps, SizeKeys } from '../../core';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';

import { Box } from '../primitives';
import { Bounceable } from '../animations';

export type IconButtonProps = {
  children: ReactNode;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  noBounce?: boolean;
  size?: number;
  radius?: SizeKeys;
  viewStyle?: AreniteViewStyle;
} & BgThemeProps &
  BorderThemeProps;

const IconButtonComponent = (
  props: IconButtonProps,
  ref: ForwardedRef<NativeView>
) => {
  const {
    children,
    onPress,
    onLongPress,
    disabled,
    noBounce,
    size = 52,
    radius = 'md',
    viewStyle,
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
  } = props;

  const squareStyle = { width: size, height: size };

  const radiusStyle = {
    sm: { borderRadius: 0 },
    md: { borderRadius: 8 },
    lg: { borderRadius: 999 },
  }[radius];

  return (
    <Bounceable
      ref={ref}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      noBounce={noBounce}
      style={{
        pressable: squareStyle,
        animatedView: squareStyle,
      }}
      scaleTo={0.95}
    >
      <Box
        style={[defaultStyle.view, squareStyle, radiusStyle, viewStyle]}
        bg={bg}
        lightBg={lightBg}
        darkBg={darkBg}
        border={border}
        lightBorder={lightBorder}
        darkBorder={darkBorder}
      >
        {children}
      </Box>
    </Bounceable>
  );
};

const defaultStyle = createAreniteStyle({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const IconButton: (
  props: { ref?: Ref<NativeView> } & IconButtonProps
) => JSX.Element | null = forwardRef<NativeView, IconButtonProps>(
  IconButtonComponent
);
