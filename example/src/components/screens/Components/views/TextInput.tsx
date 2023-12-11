import { createAreniteStyle, Text, TextInput, VStack } from 'arenite-kit';

export const TextInputExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        TextInput
      </Text>

      <Text style={style.label} color={'color1'}>
        Label
      </Text>

      <TextInput
        placeholder={'placeholder'}
        bg={'bg2'}
        color={'color1'}
        selectionColor={'primary'}
        placeholderTextColor={'color2'}
      />
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  label: {
    fontSize: 18,
  },
});
