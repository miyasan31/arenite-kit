import { createAreniteStyle, Text, useAreniteTheme, VStack } from 'arenite-kit';

export const TextExample = () => {
  const [{ theme }] = useAreniteTheme();

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Text
      </Text>

      <Text color={'color1'}>current theme is {theme}.</Text>

      <VStack gap={4} bg={'bg2'} style={style.textContainer}>
        <Text color={'color0'}>color0</Text>
        <Text color={'color1'}>color1</Text>
        <Text color={'color2'}>color2</Text>
        <Text color={'color9'}>color9</Text>
        <Text color={'primary'}>primary</Text>
        <Text color={'secondary'}>secondary</Text>
        <Text color={'tertiary'}>tertiary</Text>
        <Text color={'success'}>success</Text>
        <Text color={'warning'}>warning</Text>
        <Text color={'error'}>error</Text>
        <Text color={'info'}>info</Text>
        <Text color={'danger'}>danger</Text>
        <Text color={'white'}>white</Text>
        <Text color={'black'}>black</Text>
      </VStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  textContainer: {
    padding: 12,
    borderRadius: 8,
  },
});
