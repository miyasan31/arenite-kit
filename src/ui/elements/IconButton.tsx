import React, { ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import type { View as NativeView } from 'react-native';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';

import { Box } from '../primitives';
import { Bounceable } from '../animations/Bounceable';

export type IconButtonProps = {
  children: ReactNode;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  noBounce?: boolean;
  size?: number;
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
        style={[squareStyle, defaultStyle.view, viewStyle]}
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export const IconButton = memo(
  forwardRef<NativeView, IconButtonProps>(IconButtonComponent)
);
