import { ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { BgThemeProps, ColorThemeProps } from '../../core';
import type { AreniteTextStyleProps, AreniteViewStyleProps } from '../../style';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Box, Text } from '../primitives';

export type ChipProps = {
  children: string;
  left?: ReactNode;
  right?: ReactNode;
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
    left,
    right,
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
    <Box style={[defaultStyle.container, containerStyle]}>
      <Bounceable
        ref={ref}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        noBounce={noBounce}
        style={{
          pressable: [defaultStyle.container],
          animatedView: [defaultStyle.container],
        }}
      >
        <Box
          style={[defaultStyle.box, viewStyle]}
          bg={bg}
          lightBg={lightBg}
          darkBg={darkBg}
        >
          {left}
          <Text
            style={[defaultStyle.text, textStyle]}
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

const defaultStyle = createAreniteStyle({
  container: {
    width: 'auto',
  },
  box: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export const Chip: (
  props: { ref?: Ref<NativeView> } & ChipProps
) => JSX.Element | null = forwardRef<NativeView, ChipProps>(ChipComponent);
