import { createContext, ReactElement, ReactNode, useContext } from 'react';
import type { CommonToken, OverrideColor } from '../../core';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
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

  const onPressRadio = () => {
    onChange(value);
  };

  const isChecked = selectedValue === value;

  return (
    <Pressable
      style={[
        defaultStyle.container,
        { flexDirection: labelPosition === 'right' ? 'row' : 'row-reverse' },
      ]}
      onPress={onPressRadio}
    >
      <Bounceable scaleTo={0.95} onPress={onPressRadio}>
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
      </Bounceable>

      <Text color={'color1'} style={[defaultStyle.label]}>
        {label}
      </Text>
    </Pressable>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    flexDirection: 'row',
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
  label: {
    fontSize: 16,
  },
});

RadioComponent.displayName = 'arenite-kit.ui.Radio';
RadioComponent.Group = RadioGroupComponent;

export const Radio = RadioComponent;
