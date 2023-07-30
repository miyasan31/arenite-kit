import React from 'react';
import type { BorderThemeProps, ColorThemeProps } from '../../core';
import { createAreniteStyle } from '../../style';
import { Text, Box } from '../primitives';

export type DividerProps = {
  label?: string;
} & BorderThemeProps &
  ColorThemeProps;

export const Divider = (props: DividerProps) => {
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
    borderBottomWidth: 0.1,
  },
  label: {
    width: 'auto',
    fontSize: 16,
  },
});
