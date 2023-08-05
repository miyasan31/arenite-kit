import React from 'react';
import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
  SizeKeys,
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
  radius?: SizeKeys;
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
    radius = 'md',
  } = props;

  const radiusStyle = {
    sm: { borderRadius: 0 },
    md: { borderRadius: 8 },
    lg: { borderRadius: 999 },
  }[radius];

  const buttonComponents = buttons.map(({ label, value }, index) => {
    return (
      <Box
        key={String(value)}
        style={[
          defaultStyle.buttonWrapper,
          radiusStyle,
          {
            width: `${100 / buttons.length}%`,
            paddingLeft: index === 0 ? 6 : 0,
            paddingRight: index === buttons.length - 1 ? 6 : 0,
          },
        ]}
        bg={'bg2'}
      >
        <Button
          disabled={selectedValue === value}
          color={selectedValue === value ? activeColor : nonActiveColor}
          bg={selectedValue === value ? activeBg : nonActiveBg}
          border={selectedValue === value ? activeBorder : nonActiveBorder}
          onPress={value && onChange && (() => onChange(value))}
          viewStyle={[
            defaultStyle.view,
            radiusStyle,
            { borderWidth: activeBorder ? 1 : 0 },
          ]}
          textStyle={[defaultStyle.text]}
          radius={radius}
        >
          {label}
        </Button>
      </Box>
    );
  });

  return (
    <HStack bg={nonActiveBg} style={[defaultStyle.group, radiusStyle]}>
      {buttonComponents}
    </HStack>
  );
};

const defaultStyle = createAreniteStyle({
  group: {
    flex: 1,
  },
  buttonWrapper: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  view: {
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
