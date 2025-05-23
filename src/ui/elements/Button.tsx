import { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
  RoundedKeys,
  SizeKeys,
} from '../../core';
import type { AreniteTextStyleProps, AreniteViewStyleProps } from '../../style';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Box, Text } from '../primitives';
import { HStack } from './HStack';

export type ButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  noBounce?: boolean;
  disabled?: boolean;
  containerStyle?: AreniteViewStyleProps;
  viewStyle?: AreniteViewStyleProps;
  textStyle?: AreniteTextStyleProps;
  size?: SizeKeys;
  rounded?: RoundedKeys;
  fullWidth?: boolean;
} & BgThemeProps &
  BorderThemeProps &
  ColorThemeProps;

const ButtonComponent = (props: ButtonProps, ref: ForwardedRef<NativeView>) => {
  const {
    children,
    onPress,
    onLongPress,
    leftComponent,
    rightComponent,
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
    rounded = 'md',
    fullWidth = true,
  } = props;

  const sizingStyle = {
    sm: sStyle,
    md: mStyle,
    lg: lStyle,
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
        <HStack
          align={'center'}
          justify={'center'}
          bg={bg}
          lightBg={lightBg}
          darkBg={darkBg}
          border={border}
          lightBorder={lightBorder}
          darkBorder={darkBorder}
          style={[
            sizingStyle.box,
            borderRadiusStyle,
            viewStyle,
            { borderWidth },
          ]}
        >
          {leftComponent}
          <Text
            color={color}
            lightColor={lightColor}
            darkColor={darkColor}
            style={[sizingStyle.text, textStyle]}
          >
            {children}
          </Text>
          {rightComponent}
        </HStack>
      </Bounceable>
    </Box>
  );
};

const sStyle = createAreniteStyle({
  box: {
    gap: 4,
    height: 32,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mStyle = createAreniteStyle({
  box: {
    gap: 6,
    height: 40,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const lStyle = createAreniteStyle({
  box: {
    gap: 8,
    paddingHorizontal: 20,
    height: 52,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const Button: (
  props: { ref?: Ref<NativeView> } & ButtonProps
) => JSX.Element | null = forwardRef<NativeView, ButtonProps>(ButtonComponent);
