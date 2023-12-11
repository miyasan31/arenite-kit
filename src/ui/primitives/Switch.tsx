import { Switch as NativeSwitch } from 'react-native';
import { CommonToken, OverrideColor, usePaletteColor } from '../../core';

type TrackColor = OverrideColor<'TrackColor'>;

export type SwitchProps = Omit<NativeSwitch['props'], 'trackColor'> &
  TrackColor & {
    trackColor?: CommonToken;
  };

const SwitchComponent = (props: SwitchProps) => {
  const {
    style,
    trackColor = 'primary',
    lightTrackColor,
    darkTrackColor,
    ...otherProps
  } = props;

  const trackActiveColor = usePaletteColor('bg', trackColor, {
    light: lightTrackColor,
    dark: darkTrackColor,
  });

  return (
    <NativeSwitch
      style={[style]}
      trackColor={{
        false: trackActiveColor,
        true: trackActiveColor,
      }}
      {...otherProps}
    />
  );
};

export const Switch = SwitchComponent;
