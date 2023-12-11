import React, { memo, ReactElement } from 'react';
import type { CommonToken, OverrideColor } from '../../core';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Box, Pressable, Text } from '../primitives';

type CheckedColor = OverrideColor<'CheckedColor'>;

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  label?: string;
  labelPosition?: 'left' | 'right';
  checkedElement?: ReactElement;
  checkedColor?: CommonToken;
} & CheckedColor;

const CheckboxComponent = (props: CheckboxProps) => {
  const {
    checked,
    onPress,
    label,
    labelPosition = 'right',
    checkedElement,
    checkedColor = 'primary',
    lightCheckedColor,
    darkCheckedColor,
  } = props;

  return (
    <Pressable
      style={[
        defaultStyle.container,
        { flexDirection: labelPosition === 'right' ? 'row' : 'row-reverse' },
      ]}
      onPress={onPress}
    >
      <Bounceable onPress={onPress}>
        <Box
          bg={checked ? checkedColor : 'bg2'}
          border={checked ? checkedColor : 'border1'}
          style={defaultStyle.checkbox}
          lightBg={lightCheckedColor}
          darkBg={darkCheckedColor}
        >
          {checked
            ? checkedElement ?? (
                <Text color={'white'} style={defaultStyle.checkmark}>
                  ✓
                </Text>
              )
            : null}
        </Box>
      </Bounceable>

      <Text color={'color1'} style={[defaultStyle.label]}>
        {label}
      </Text>
    </Pressable>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontWeight: '800',
  },
  label: {
    fontSize: 16,
  },
});

export const Checkbox = memo(CheckboxComponent);
