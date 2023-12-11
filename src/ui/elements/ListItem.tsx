import type { ReactElement } from 'react';
import { memo } from 'react';
import type { ColorToken, CommonToken, OverrideColor } from '../../core';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Box, Text } from '../primitives';

type LeftColor = OverrideColor<'LeftColor'>;
type RightColor = OverrideColor<'RightColor'>;

type ListItemProps = {
  leftText: string;
  leftIcon?: ReactElement;
  rightText?: string;
  rightIcon?: ReactElement;
  leftColor?: CommonToken | ColorToken;
  rightColor?: CommonToken | ColorToken;
  isFirst?: boolean;
  isLast?: boolean;
  onPress?: () => void;
} & LeftColor &
  RightColor;

const ListItemComponent = (props: ListItemProps) => {
  const {
    leftIcon,
    leftText,
    rightIcon,
    rightText,
    isFirst,
    isLast,
    leftColor = 'color1',
    lightLeftColor,
    darkLeftColor,
    rightColor = 'color2',
    lightRightColor,
    darkRightColor,
    onPress,
  } = props;

  return (
    <Bounceable
      style={{
        animatedView: [
          defaultStyle.container,
          isFirst && defaultStyle.firstContainer,
          isLast && defaultStyle.lastContainer,
        ],
      }}
      scaleTo={0.99}
      onPress={onPress}
    >
      {leftIcon && <Box style={defaultStyle.icon}>{leftIcon}</Box>}
      <Text
        color={leftColor}
        lightColor={lightLeftColor}
        darkColor={darkLeftColor}
        style={[defaultStyle.text, { flex: 1 }]}
      >
        {leftText}
      </Text>
      {rightText && (
        <Text
          color={rightColor}
          lightColor={lightRightColor}
          darkColor={darkRightColor}
          style={defaultStyle.text}
        >
          {rightText}
        </Text>
      )}
      <Box style={defaultStyle.icon}>{rightIcon}</Box>
    </Bounceable>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 4,
    paddingRight: 12,
    height: 48,
  },
  firstContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  lastContainer: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 48,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export const ListItem = memo(ListItemComponent);
