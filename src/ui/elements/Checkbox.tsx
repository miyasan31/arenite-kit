import { memo, ReactNode } from 'react';
import type { CommonToken, OverrideColor } from '../../core';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Text } from '../primitives';
import { HStack } from './HStack';

type CheckedColor = OverrideColor<'CheckedColor'>;

export type CheckboxProps = {
  isChecked: boolean;
  onPress: () => void;
  checkedComponent?: ReactNode;
  checkedColor?: CommonToken;
} & CheckedColor;

const CheckboxComponent = (props: CheckboxProps) => {
  const {
    isChecked,
    onPress,
    checkedComponent,
    checkedColor = 'primary',
    lightCheckedColor,
    darkCheckedColor,
  } = props;

  return (
    <Bounceable scaleTo={0.95} onPress={onPress}>
      <HStack
        align={'center'}
        justify={'center'}
        border={isChecked ? checkedColor : 'border1'}
        lightBorder={isChecked ? lightCheckedColor : undefined}
        darkBorder={isChecked ? darkCheckedColor : undefined}
        bg={isChecked ? checkedColor : 'bg2'}
        style={defaultStyle.checkbox}
      >
        {isChecked ? checkedComponent ?? <Text color={'white'}>✓</Text> : null}
      </HStack>
    </Bounceable>
  );
};

const defaultStyle = createAreniteStyle({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 4,
  },
});

export const Checkbox = memo(CheckboxComponent);
