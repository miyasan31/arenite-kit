import { ButtonGroup, createAreniteStyle, Text, VStack } from 'arenite-kit';
import React, { useState } from 'react';

type Position = 'left' | 'center' | 'right';

export const ButtonGroupExample = () => {
  const [position, setPosition] = useState<Position>('left');

  const onChangePosition = (value: Position) => {
    setPosition(value);
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        ButtonGroup
      </Text>

      <ButtonGroup<Position>
        value={position}
        onChange={onChangePosition}
        activeBg="bg9"
        activeColor="color9"
        nonActiveBg="bg2"
        nonActiveColor="color1"
        buttons={[
          { label: 'Left', value: 'left' },
          { label: 'Center', value: 'center' },
          { label: 'Right', value: 'right' },
        ]}
        radius="md"
      />
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
