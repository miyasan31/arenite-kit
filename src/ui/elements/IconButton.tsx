import { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { BgThemeProps, BorderThemeProps, SizeKeys } from '../../core';
import type { AreniteViewStyle } from '../../style';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';

import { Box } from '../primitives';

export type IconButtonProps = {
  children: ReactNode;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  noBounce?: boolean;
  size?: SizeKeys;
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
    size = 'm',
    radius = 'm',
    viewStyle,
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
  } = props;

  const squareStyle = {
    s: { width: 32, height: 32 },
    m: { width: 48, height: 48 },
    l: { width: 64, height: 64 },
  }[size];

  const radiusStyle = {
    s: { borderRadius: 0 },
    m: { borderRadius: 8 },
    l: { borderRadius: 999 },
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
