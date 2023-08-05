import React from 'react';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
} from '../../core';
import { createAreniteStyle } from '../../style';
import { Box } from '../primitives';
import { Button } from './Button';
import { HStack } from './HStack';

export type ButtonGroupProps<T> = {
  value?: T;
  onChange?: (value: T) => void;
  activeColor?: ColorThemeProps['color'];
  activeBg?: BgThemeProps['bg'];
  activeBorder?: BorderThemeProps['border'];
  nonActiveColor?: ColorThemeProps['color'];
  nonActiveBg?: BgThemeProps['bg'];
  nonActiveBorder?: BorderThemeProps['border'];
  buttons: {
    label: string;
    value?: T;
  }[];
};

const ButtonGroupComponent = <T,>(props: ButtonGroupProps<T>) => {
  const {
    value: selectedValue,
    onChange,
    buttons,
    activeColor,
    activeBg,
    activeBorder,
    nonActiveColor,
    nonActiveBg,
    nonActiveBorder,
  } = props;

  const buttonElements = buttons.map(({ label, value }, index) => {
    return (
      <Box
        style={{
          width: `${100 / buttons.length}%`,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: index === 0 ? 6 : 0,
          paddingRight: index === buttons.length - 1 ? 6 : 0,
          borderRadius: 8,
        }}
        bg={'bg2'}
      >
        <Button
          disabled={selectedValue === value}
          color={selectedValue === value ? activeColor : nonActiveColor}
          bg={selectedValue === value ? activeBg : nonActiveBg}
          border={selectedValue === value ? activeBorder : nonActiveBorder}
          onPress={value && onChange && (() => onChange(value))}
          viewStyle={[defaultStyle.view, { borderWidth: activeBorder ? 1 : 0 }]}
          textStyle={defaultStyle.text}
        >
          {label}
        </Button>
      </Box>
    );
  });

  return (
    <HStack bg={nonActiveBg} style={defaultStyle.group}>
      {buttonElements}
    </HStack>
  );
};

const defaultStyle = createAreniteStyle({
  group: {
    width: '100%',
    borderRadius: 8,
  },
  view: {
    borderRadius: 8,
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

ButtonGroupComponent.displayName = 'arenite-kit.ui.ButtonGroup';

export const ButtonGroup = ButtonGroupComponent;
