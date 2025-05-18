import { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  RoundedKeys,
  SizeKeys,
} from '../../core';
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
  rounded?: RoundedKeys;
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
    size = 'md',
    rounded = 'md',
    viewStyle,
    bg,
    lightBg,
    darkBg,
    border,
    lightBorder,
    darkBorder,
  } = props;

  const squareStyle = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
  }[size];

  const borderRadiusStyle = {
    none: { borderRadius: 0 },
    xs: { borderRadius: 2 },
    sm: { borderRadius: 4 },
    md: { borderRadius: 8 },
    lg: { borderRadius: 12 },
    xl: { borderRadius: 16 },
    full: { borderRadius: 999 },
  }[rounded];

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
        style={[defaultStyle.view, squareStyle, borderRadiusStyle, viewStyle]}
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
