import { ThemingIcon } from '$components/shared/ThemingIcon';
import {
  Checkbox,
  createAreniteStyle,
  HStack,
  Text,
  VStack,
} from 'arenite-kit';
import { useState } from 'react';

export const CheckboxExample = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Checkbox
      </Text>

      <HStack gap={24}>
        <Checkbox
          checked={checked1}
          onPress={() => setChecked1((prev) => !prev)}
          label={'Default'}
        />
        <Checkbox
          checked={checked3}
          onPress={() => setChecked3((prev) => !prev)}
          checkedElement={
            <ThemingIcon name={'checkmark'} size={20} color={'white'} />
          }
          checkedColor={'secondary'}
          label={'Checkmark'}
        />
        <Checkbox
          checked={checked2}
          onPress={() => setChecked2((prev) => !prev)}
          checkedColor={'tertiary'}
          checkedElement={
            <ThemingIcon name={'star'} size={16} color={'white'} />
          }
          label={'Star'}
        />
      </HStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  indicator: {
    borderRadius: 8,
  },
});
