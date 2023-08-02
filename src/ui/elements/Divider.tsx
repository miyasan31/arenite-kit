import React, { memo } from 'react';
import type { BorderThemeProps, ColorThemeProps } from '../../core';
import { createAreniteStyle } from '../../style';
import { Text, Box } from '../primitives';

export type DividerProps = {
  label?: string;
} & BorderThemeProps &
  ColorThemeProps;

const DividerComponent = (props: DividerProps) => {
  const {
    label,
    color,
    lightColor,
    darkColor,
    border,
    lightBorder,
    darkBorder,
  } = props;

  return (
    <Box style={[defaultStyle.container]}>
      <Box
        border={border}
        lightBorder={lightBorder}
        darkBorder={darkBorder}
        style={[defaultStyle.border]}
      />

      {label ? (
        <>
          <Text
            color={color}
            lightColor={lightColor}
            darkColor={darkColor}
            style={defaultStyle.label}
          >
            {label}
          </Text>
          <Box
            border={border}
            lightBorder={lightBorder}
            darkBorder={darkBorder}
            style={[defaultStyle.border]}
          />
        </>
      ) : null}
    </Box>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  border: {
    flex: 1,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 16,
  },
});

export const Divider = memo(DividerComponent);
