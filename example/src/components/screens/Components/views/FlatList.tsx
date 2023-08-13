import { createAreniteStyle, FlatList, Image, Text, VStack } from 'arenite-kit';
import React from 'react';

const listDatasets = new Array(10).fill(0).map((_, i) => ({ id: i }));

export const FlatListExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        FlatList
      </Text>

      <FlatList<{ id: number }>
        keyExtractor={(item) => item.id.toString()}
        data={listDatasets}
        horizontal={true}
        renderItem={() => {
          return (
            <Image
              source={require('../../../../../assets/image/arenitez.png')}
              style={style.image}
              width={60}
              height={60}
              bg={'secondary'}
            />
          );
        }}
      />
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
    marginRight: 8,
  },
});
