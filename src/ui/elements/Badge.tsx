import { ForwardedRef, forwardRef, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { BgThemeProps, ColorThemeProps } from '../../core';
import type { AreniteTextStyleProps, AreniteViewStyleProps } from '../../style';
import { createAreniteStyle } from '../../style';
import { Box, Text } from '../primitives';

export type BadgeProps = {
  viewStyle?: AreniteViewStyleProps;
  textStyle?: AreniteTextStyleProps;
  children: string;
} & BgThemeProps &
  ColorThemeProps;

export const BadgeComponent = (
  props: BadgeProps,
  ref: ForwardedRef<NativeView>
) => {
  const {
    viewStyle,
    textStyle,
    bg,
    lightBg,
    darkBg,
    color,
    lightColor,
    darkColor,
    children,
  } = props;

  return (
    <Box
      ref={ref}
      style={[defaultStyle.box, viewStyle]}
      bg={bg}
      lightBg={lightBg}
      darkBg={darkBg}
    >
      <Text
        style={[defaultStyle.text, textStyle]}
        color={color}
        lightColor={lightColor}
        darkColor={darkColor}
      >
        {children}
      </Text>
    </Box>
  );
};

const defaultStyle = createAreniteStyle({
  box: {
    gap: 8,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  text: {
    flex: 1,
    gap: 4,
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export const Badge: (
  props: { ref?: Ref<NativeView> } & BadgeProps
) => JSX.Element | null = forwardRef<NativeView, BadgeProps>(BadgeComponent);
