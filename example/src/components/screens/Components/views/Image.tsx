import { createAreniteStyle, HStack, Image, Text, VStack } from 'arenite-kit';

export const ImageExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Image
      </Text>

      <HStack gap={12}>
        <Image
          width={200}
          height={200}
          style={style.image}
          border={'border2'}
          bg={'white'}
          source={require('../../../../../assets/image/arenitez.png')}
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
  image: {
    borderRadius: 8,
    borderWidth: 1,
  },
});
