import { Box, createAreniteStyle, HStack, Text, VStack } from 'arenite-kit';

export const HStackExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        HStack
      </Text>

      <HStack gap={8}>
        <Box bg={'bg2'} border={'border1'} style={style.box} />
        <Box bg={'bg2'} border={'border1'} style={style.box} />
        <Box bg={'bg2'} border={'border1'} style={style.box} />
      </HStack>
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
