import React from 'react';
import { StyleSheet } from 'react-native';
import type { BorderThemeProps, ColorThemeProps } from '../../core';
import { Text, View } from '../primitives';

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
    <View style={[defaultStyle.container]}>
      <View
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
          <View
            border={border}
            lightBorder={lightBorder}
            darkBorder={darkBorder}
            style={[defaultStyle.border]}
          />
        </>
      ) : null}
    </View>
  );
};

const defaultStyle = StyleSheet.create({
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
