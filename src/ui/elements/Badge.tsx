import { ForwardedRef, forwardRef, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { BgThemeProps, ColorThemeProps } from '../../core';
import type { AreniteTextStyleProps, AreniteViewStyleProps } from '../../style';
import { createAreniteStyle } from '../../style';
import { Text } from '../primitives';
import { HStack } from './HStack';

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
    <HStack
      ref={ref}
      align={'center'}
      justify={'center'}
      bg={bg}
      lightBg={lightBg}
      darkBg={darkBg}
      style={[defaultStyle.box, viewStyle]}
    >
      <Text
        color={color}
        lightColor={lightColor}
        darkColor={darkColor}
        style={[defaultStyle.text, textStyle]}
        numberOfLines={1}
      >
        {children}
      </Text>
    </HStack>
  );
};

const defaultStyle = createAreniteStyle({
  box: {
    height: 24,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const Badge: (
  props: { ref?: Ref<NativeView> } & BadgeProps
) => JSX.Element | null = forwardRef<NativeView, BadgeProps>(BadgeComponent);
