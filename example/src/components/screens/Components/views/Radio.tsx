import { ThemingIcon } from '$components/shared/ThemingIcon';
import { createAreniteStyle, HStack, Radio, Text, VStack } from 'arenite-kit';
import { useState } from 'react';

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
        <HStack gap={24}>
          <Radio value={'default'} />
          <Radio
            value={'checkmark'}
            activeColor={'secondary'}
            checkedComponent={
              <ThemingIcon name={'checkmark'} size={14} color={'white'} />
            }
          />
          <Radio
            value={'star'}
            activeColor={'tertiary'}
            checkedComponent={
              <ThemingIcon name={'star'} size={14} color={'white'} />
            }
          />
        </HStack>
      </Radio.Group>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
