import React from 'react';
import {
  BgToken,
  CommonToken,
  OverrideColor,
  usePaletteColor,
} from '../../core';
import { Switch as NativeSwitch } from 'react-native';

type TrackColor = OverrideColor<'Track'>;

export type SwitchProps = NativeSwitch['props'] &
  TrackColor & {
    track?: CommonToken | BgToken;
  };

const SwitchComponent = (props: SwitchProps) => {
  const { style, trackColor, track, lightTrack, darkTrack, ...otherProps } =
    props;

  const trackActiveColor = usePaletteColor('bg', track, {
    light: lightTrack,
    dark: darkTrack,
  });

  return (
    <NativeSwitch
      style={[style]}
      trackColor={{
        false: trackActiveColor ?? trackColor?.true,
        true: trackActiveColor ?? trackColor?.false,
      }}
      {...otherProps}
    />
  );
};

export const Switch = SwitchComponent;
