import type { ReactElement } from 'react';
import { memo } from 'react';
import type { ColorToken, CommonToken, OverrideColor } from '../../core';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Text } from '../primitives';
import { HStack } from './HStack';

type LeftColor = OverrideColor<'LeftColor'>;
type RightColor = OverrideColor<'RightColor'>;

export type ListItemProps = {
  leftText: string;
  leftColor?: CommonToken | ColorToken;
  leftComponent?: ReactElement;
  rightText?: string;
  rightColor?: CommonToken | ColorToken;
  rightComponent?: ReactElement;
  onPress?: () => void;
} & LeftColor &
  RightColor;

const ListItemComponent = (props: ListItemProps) => {
  const {
    leftComponent,
    leftText,
    rightComponent,
    rightText,
    leftColor = 'color1',
    lightLeftColor,
    darkLeftColor,
    rightColor = 'color2',
    lightRightColor,
    darkRightColor,
    onPress,
  } = props;

  return (
    <Bounceable scaleTo={onPress ? 0.99 : 1} onPress={onPress}>
      <HStack align={'center'} gap={8} style={defaultStyle.container}>
        {leftComponent}

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

        {rightComponent}
      </HStack>
    </Bounceable>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    height: 52,
    paddingRight: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 48,
  },
});

export const ListItem = memo(ListItemComponent);
