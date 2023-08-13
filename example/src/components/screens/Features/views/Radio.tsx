import React, { useState } from 'react';
import { createAreniteStyle, Radio, Text, VStack } from 'arenite-kit';

type ValueType = 'left' | 'right';

export const RadioExample = () => {
  const [value, setValue] = useState<ValueType>('left');

  const onChangeRadioValue = (changeValue: ValueType) => {
    setValue(changeValue);
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Radio
      </Text>

      <Radio.Group value={value} onChange={onChangeRadioValue}>
        <Radio value={'left'} label={'Left'} />
        <Radio value={'right'} label={'Right'} labelPosition={'right'} />
      </Radio.Group>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  image: {
    borderRadius: 8,
    borderWidth: 1,
  },
});
