import { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { BgThemeProps, ColorThemeProps } from '../../core';
import type { AreniteTextStyleProps, AreniteViewStyleProps } from '../../style';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Text } from '../primitives';
import { HStack } from './HStack';

export type ChipProps = {
  children: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  noBounce?: boolean;
  disabled?: boolean;
  containerStyle?: AreniteViewStyleProps;
  viewStyle?: AreniteViewStyleProps;
  textStyle?: AreniteTextStyleProps;
  fullWidth?: boolean;
} & BgThemeProps &
  ColorThemeProps;

const ChipComponent = (props: ChipProps, ref: ForwardedRef<NativeView>) => {
  const {
    children,
    leftComponent,
    rightComponent,
    onPress,
    onLongPress,
    noBounce,
    disabled,
    containerStyle,
    viewStyle,
    textStyle,
    bg,
    lightBg,
    darkBg,
    color,
    lightColor,
    darkColor,
  } = props;

  return (
    <Bounceable
      ref={ref}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      noBounce={noBounce}
      style={{
        pressable: [defaultStyle.container, containerStyle],
        animatedView: [defaultStyle.container, containerStyle],
      }}
    >
      <HStack
        align={'center'}
        justify={'center'}
        gap={4}
        bg={bg}
        lightBg={lightBg}
        darkBg={darkBg}
        style={[defaultStyle.box, viewStyle]}
      >
        {leftComponent}
        <Text
          color={color}
          lightColor={lightColor}
          darkColor={darkColor}
          style={[defaultStyle.text, textStyle]}
        >
          {children}
        </Text>
        {rightComponent}
      </HStack>
    </Bounceable>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    width: 'auto',
  },
  box: {
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export const Chip: (
  props: { ref?: Ref<NativeView> } & ChipProps
) => JSX.Element | null = forwardRef<NativeView, ChipProps>(ChipComponent);
