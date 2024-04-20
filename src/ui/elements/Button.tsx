import { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
  SizeKeys,
} from '../../core';
import type { AreniteTextStyleProps, AreniteViewStyleProps } from '../../style';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Box, Text } from '../primitives';

export type ButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  left?: ReactNode;
  right?: ReactNode;
  noBounce?: boolean;
  disabled?: boolean;
  containerStyle?: AreniteViewStyleProps;
  viewStyle?: AreniteViewStyleProps;
  textStyle?: AreniteTextStyleProps;
  size?: SizeKeys;
  radius?: SizeKeys;
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
    containerStyle,
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

  const fullWidthStyle = fullWidth ? { width: '100%' } : { width: 'auto' };

  const borderWidth = border || lightBorder || darkBorder ? 1 : 0;

  return (
    <Box style={[fullWidthStyle, containerStyle]}>
      <Bounceable
        ref={ref}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        noBounce={noBounce}
        style={{
          pressable: [fullWidthStyle],
          animatedView: [fullWidthStyle],
        }}
      >
        <Box
          style={[sizingStyle.box, radiusStyle, viewStyle, { borderWidth }]}
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
    </Box>
  );
};

const smStyle = createAreniteStyle({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 24,
    height: 38,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mdStyle = createAreniteStyle({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 32,
    height: 52,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const lgStyle = createAreniteStyle({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 40,
    height: 64,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const Button: (
  props: { ref?: Ref<NativeView> } & ButtonProps
) => JSX.Element | null = forwardRef<NativeView, ButtonProps>(ButtonComponent);
