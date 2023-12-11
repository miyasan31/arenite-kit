import { createContext, ReactElement, ReactNode, useContext } from 'react';
import type { CommonToken, OverrideColor } from '../../core';
import { createAreniteStyle } from '../../style';
import { Box, Pressable, Text } from '../primitives';

type ActiveColor = OverrideColor<'ActiveColor'>;

type RadioGroupContextType<T = any> = {
  selectedValue: T;
  onChange: (value: T) => void;
};

const RadioGroupContext = createContext({} as RadioGroupContextType);

export type RadioGroupProps<T> = {
  children: ReactNode;
  value: T;
  onChange: (value: T) => void;
};

const RadioGroupComponent = <T,>(props: RadioGroupProps<T>) => {
  const { value, onChange, children } = props;

  return (
    <RadioGroupContext.Provider value={{ selectedValue: value, onChange }}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export type RadioProps<T> = {
  value: T;
  label?: string;
  labelPosition?: 'left' | 'right';
  checkedElement?: ReactElement;
  activeColor?: CommonToken;
} & ActiveColor;

const RadioComponent = <T,>(props: RadioProps<T>) => {
  const {
    value,
    label,
    labelPosition = 'right',
    checkedElement,
    activeColor = 'primary',
    lightActiveColor,
    darkActiveColor,
  } = props;

  const { selectedValue, onChange } =
    useContext<RadioGroupContextType<T>>(RadioGroupContext);

  // context value is undefined
  if (selectedValue === undefined || onChange === undefined) {
    throw new Error('Radio must be used inside RadioGroup');
  }

  const onChangeValue = () => {
    onChange(value);
  };

  const isChecked = selectedValue === value;

  return (
    <Box style={defaultStyle.container}>
      <Pressable
        style={[
          defaultStyle.pressable,
          { flexDirection: labelPosition === 'right' ? 'row' : 'row-reverse' },
        ]}
        onPress={onChangeValue}
      >
        <Box
          bg={isChecked ? activeColor : 'bg2'}
          lightBg={isChecked ? lightActiveColor : undefined}
          darkBg={isChecked ? darkActiveColor : undefined}
          border={isChecked ? activeColor : 'border1'}
          style={defaultStyle.ring}
        >
          {isChecked
            ? checkedElement ?? <Box bg={'white'} style={defaultStyle.active} />
            : null}
        </Box>
        <Text color={'color1'}>{label}</Text>
      </Pressable>
    </Box>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    flexDirection: 'row',
  },
  pressable: {
    alignItems: 'center',
    gap: 8,
  },
  ring: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 999,
  },
  active: {
    width: 10,
    height: 10,
    borderRadius: 999,
  },
});

RadioComponent.displayName = 'arenite-kit.ui.Radio';
RadioComponent.Group = RadioGroupComponent;

export const Radio = RadioComponent;
