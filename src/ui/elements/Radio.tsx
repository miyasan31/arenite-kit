import React, { createContext, ReactNode, useContext } from 'react';
import { createAreniteStyle } from '../../style';
import { Box, Text, Pressable } from '../primitives';

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

const RadioGroup = <T,>(props: RadioGroupProps<T>) => {
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
};

export const Radio = <T,>(props: RadioProps<T>) => {
  const { label, labelPosition, value } = props;

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
        <Box border={'border1'} style={defaultStyle.ring}>
          {isChecked ? (
            <Box bg={'primary'} style={defaultStyle.active} />
          ) : null}
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
    width: 14,
    height: 14,
    borderRadius: 999,
  },
});

Radio.displayName = 'arenite-kit/ui/Radio';
Radio.Group = RadioGroup;
