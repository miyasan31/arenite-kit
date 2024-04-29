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

export type SegmentProps<T> = {
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

const SegmentComponent = <T,>(props: SegmentProps<T>) => {
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
    radius = 'm',
  } = props;

  const radiusStyle = {
    s: sRadiusStyle,
    m: mRadiusStyle,
    l: lRadiusStyle,
  }[radius];

  const buttonComponents = buttons.map(({ label, value }, index) => {
    return (
      <Box
        key={String(value)}
        style={[
          defaultStyle.buttonWrapper,
          radiusStyle.container,
          {
            width: `${100 / buttons.length}%`,
            paddingLeft: index === 0 ? 2 : 0,
            paddingRight: index === buttons.length - 1 ? 2 : 0,
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
            radiusStyle.buttonContainer,
            { borderWidth: activeBorder ? 1 : 0 },
          ]}
          textStyle={[defaultStyle.text]}
          radius={radius}
          size={'s'}
        >
          {label}
        </Button>
      </Box>
    );
  });

  return (
    <HStack bg={nonActiveBg} style={[radiusStyle.container]}>
      {buttonComponents}
    </HStack>
  );
};

const defaultStyle = createAreniteStyle({
  buttonWrapper: {
    paddingVertical: 2,
  },
  view: {
    height: 28,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const sRadiusStyle = {
  container: { borderRadius: 0 },
  buttonContainer: { borderRadius: 0 },
};

const mRadiusStyle = {
  container: { borderRadius: 8 },
  buttonContainer: { borderRadius: 6 },
};

const lRadiusStyle = {
  container: { borderRadius: 999 },
  buttonContainer: { borderRadius: 999 },
};

SegmentComponent.displayName = 'arenite-kit.ui.Segment';

export const Segment: <T>(props: SegmentProps<T>) => JSX.Element | null =
  SegmentComponent;
