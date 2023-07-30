import React, { ReactNode } from 'react';
import type { BgThemeProps, BorderThemeProps } from '../../core';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';

import { Box } from '../primitives';
import { Bounceable } from './Bounceable';

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
