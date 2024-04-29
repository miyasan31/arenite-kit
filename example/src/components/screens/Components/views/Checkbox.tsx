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
          isChecked={checked1}
          onPress={() => setChecked1((prev) => !prev)}
        />
        <Checkbox
          isChecked={checked3}
          onPress={() => setChecked3((prev) => !prev)}
          checkedComponent={
            <ThemingIcon name={'checkmark'} size={20} color={'white'} />
          }
          checkedColor={'secondary'}
        />
        <Checkbox
          isChecked={checked2}
          onPress={() => setChecked2((prev) => !prev)}
          checkedColor={'tertiary'}
          checkedComponent={
            <ThemingIcon name={'star'} size={16} color={'white'} />
          }
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
});
