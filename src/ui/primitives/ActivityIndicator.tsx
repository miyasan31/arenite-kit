import React from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { CommonToken } from '../../core';
import { useThemeColor } from '../../core';

export type ActivityIndicatorProps = Omit<
  NativeActivityIndicator['props'],
  'color'
> & {
  color?: CommonToken;
};

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
  const { color, ...otherProps } = props;

  const iconColor = useThemeColor('icon', color, {});

  return <NativeActivityIndicator color={iconColor} {...otherProps} />;
};
