import { createContext, ReactElement, ReactNode, useContext } from 'react';
import type { CommonToken, OverrideColor } from '../../core';
import { createAreniteStyle } from '../../style';
import { Bounceable } from '../animations';
import { Box } from '../primitives';
import { HStack } from './HStack';

type ActiveColor = OverrideColor<'ActiveColor'>;

export type RadioGroupContextType<T = any> = {
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
  checkedComponent?: ReactElement;
  activeColor?: CommonToken;
} & ActiveColor;

const RadioComponent = <T,>(props: RadioProps<T>) => {
  const {
    value,
    checkedComponent,
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
    <Bounceable scaleTo={0.95} onPress={onPressRadio}>
      <HStack
        align={'center'}
        justify={'center'}
        bg={isChecked ? activeColor : 'bg2'}
        lightBg={isChecked ? lightActiveColor : undefined}
        darkBg={isChecked ? darkActiveColor : undefined}
        border={isChecked ? activeColor : 'border1'}
        style={defaultStyle.ring}
      >
        {isChecked
          ? checkedComponent ?? <Box bg={'white'} style={defaultStyle.active} />
          : null}
      </HStack>
    </Bounceable>
  );
};

const defaultStyle = createAreniteStyle({
  ring: {
    width: 24,
    height: 24,
    borderWidth: 2,
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
