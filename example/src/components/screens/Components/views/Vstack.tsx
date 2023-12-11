import { Box, createAreniteStyle, Text, VStack } from 'arenite-kit';

export const VStackExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        VStack
      </Text>

      <VStack gap={8}>
        <Box bg={'bg2'} border={'border1'} style={style.box} />
        <Box bg={'bg2'} border={'border1'} style={style.box} />
        <Box bg={'bg2'} border={'border1'} style={style.box} />
      </VStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
