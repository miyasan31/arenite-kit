import { areniteThemeStorageKey } from '$constants/asyncStorageKeys';
import { asyncStorage } from '$libs/react-native-async-storage/asyncStorage';
import {
  AreniteThemeKey,
  createAreniteStyle,
  Segment,
  Text,
  useAreniteTheme,
  VStack,
} from 'arenite-kit';
import { useState } from 'react';

type Position = 'left' | 'center' | 'right';

export const SegmentExample = () => {
  const [{ theme }, { setTheme }] = useAreniteTheme();
  const [position, setPosition] = useState<Position>('left');

  const onChangePosition = (value: Position) => {
    setPosition(value);
  };

  const onChangeTheme = async (value: AreniteThemeKey) => {
    setTheme(value);
    await asyncStorage.set(areniteThemeStorageKey, value);
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Segment
      </Text>

      <VStack
        gap={12}
        bg={'bg2'}
        style={{
          width: '100%',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Segment<Position>
          value={position}
          onChange={onChangePosition}
          bg="bg1"
          activeBg="bg9"
          activeColor="color9"
          nonActiveBg="bg1"
          nonActiveColor="color1"
          buttons={[
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ]}
          rounded="md"
        />

        <Segment<AreniteThemeKey>
          value={theme}
          onChange={onChangeTheme}
          activeBg="bg9"
          activeColor="color9"
          nonActiveBg="bg2"
          nonActiveColor="color1"
          buttons={[
            { label: 'Auto', value: 'auto' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'Dracula', value: 'dracula' },
          ]}
          rounded="md"
        />
      </VStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
