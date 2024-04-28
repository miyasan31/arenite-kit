import type { BorderThemeProps, ColorThemeProps } from '../../core';
import { createAreniteStyle } from '../../style';
import { Box, Text } from '../primitives';
import { HStack } from './HStack';

type VerticalDividerProps = {
  label: never;
  orientation?: 'vertical';
};

type HorizontalDividerProps = {
  label?: string;
  orientation?: 'horizontal';
};

export type DividerProps = (VerticalDividerProps | HorizontalDividerProps) &
  BorderThemeProps &
  ColorThemeProps;

const DividerComponent = (props: DividerProps) => {
  const {
    label,
    orientation = 'horizontal',
    color,
    lightColor,
    darkColor,
    border,
    lightBorder,
    darkBorder,
  } = props;

  if (orientation === 'vertical') {
    return (
      <Box
        border={border}
        lightBorder={lightBorder}
        darkBorder={darkBorder}
        style={[verticalStyle.border]}
      />
    );
  }

  return (
    <HStack gap={8} align={'center'} justify={'center'}>
      <Box
        border={border}
        lightBorder={lightBorder}
        darkBorder={darkBorder}
        style={[horizontalStyle.border]}
      />

      {label ? (
        <>
          <Text
            color={color}
            lightColor={lightColor}
            darkColor={darkColor}
            style={[horizontalStyle.label]}
          >
            {label}
          </Text>
          <Box
            border={border}
            lightBorder={lightBorder}
            darkBorder={darkBorder}
            style={[horizontalStyle.border]}
          />
        </>
      ) : null}
    </HStack>
  );
};

const verticalStyle = createAreniteStyle({
  border: {
    flex: 1,
    borderLeftWidth: 1,
  },
});

const horizontalStyle = createAreniteStyle({
  border: {
    flex: 1,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 14,
  },
});

export const Divider = DividerComponent;
