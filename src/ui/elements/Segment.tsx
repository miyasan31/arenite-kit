import type {
  BgThemeProps,
  BorderThemeProps,
  ColorThemeProps,
  RoundedKeys,
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
  rounded?: Extract<RoundedKeys, 'none' | 'md' | 'full'>;
  buttons: {
    label: string;
    value?: T;
  }[];
} & BgThemeProps;

const SegmentComponent = <T,>(props: SegmentProps<T>) => {
  const {
    value: selectedValue,
    onChange,
    buttons,
    bg,
    darkBg,
    lightBg,
    activeColor,
    activeBg,
    activeBorder,
    nonActiveColor,
    nonActiveBg,
    nonActiveBorder,
    rounded = 'md',
  } = props;

  const radiusStyle = {
    none: noneRadiusStyle,
    md: mdRadiusStyle,
    full: fullRadiusStyle,
  }[rounded];

  const buttonComponents = buttons.map(({ label, value }) => {
    return (
      <Box key={String(value)} bg={'bg0'} style={[{ flex: 1 }]}>
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
          rounded={rounded}
          size={'sm'}
        >
          {label}
        </Button>
      </Box>
    );
  });

  return (
    <HStack
      bg={bg}
      darkBg={darkBg}
      lightBg={lightBg}
      style={[defaultStyle.buttonWrapper, radiusStyle.container]}
    >
      {buttonComponents}
    </HStack>
  );
};

const defaultStyle = createAreniteStyle({
  buttonWrapper: {
    padding: 2,
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

const noneRadiusStyle = {
  container: { borderRadius: 0 },
  buttonContainer: { borderRadius: 0 },
};

const mdRadiusStyle = {
  container: { borderRadius: 8 },
  buttonContainer: { borderRadius: 6 },
};

const fullRadiusStyle = {
  container: { borderRadius: 999 },
  buttonContainer: { borderRadius: 999 },
};

SegmentComponent.displayName = 'arenite-kit.ui.Segment';

export const Segment: <T>(props: SegmentProps<T>) => JSX.Element | null =
  SegmentComponent;
