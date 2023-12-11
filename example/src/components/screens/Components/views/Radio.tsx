import { ThemingIcon } from '$components/shared/ThemingIcon';
import { createAreniteStyle, Radio, Text, VStack } from 'arenite-kit';
import React, { useState } from 'react';

type ValueType = 'default' | 'checkmark' | 'star';

export const RadioExample = () => {
  const [value, setValue] = useState<ValueType>('default');

  const onChangeRadioValue = (changeValue: ValueType) => {
    setValue(changeValue);
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Radio
      </Text>

      <Radio.Group value={value} onChange={onChangeRadioValue}>
        <Radio value={'default'} label={'Default'} />
        <Radio
          value={'checkmark'}
          label={'Checkmark'}
          activeColor={'secondary'}
          checkedElement={
            <ThemingIcon name={'checkmark'} size={14} icon={'white'} />
          }
        />
        <Radio
          value={'star'}
          label={'Star'}
          activeColor={'tertiary'}
          checkedElement={
            <ThemingIcon name={'star'} size={14} icon={'white'} />
          }
        />
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
