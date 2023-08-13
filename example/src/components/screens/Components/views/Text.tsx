import { createAreniteStyle, Text, useAreniteTheme, VStack } from 'arenite-kit';
import React from 'react';

export const TextExample = () => {
  const [{ theme }] = useAreniteTheme();

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Text
      </Text>

      <Text color={'color1'}>current theme is {theme}.</Text>

      <VStack gap={4} bg={'bg2'} style={style.textContainer}>
        <Text color={'color1'}>color1</Text>
        <Text color={'color2'}>color2</Text>
        <Text color={'primary'}>primary</Text>
        <Text color={'secondary'}>secondary</Text>
        <Text color={'tertiary'}>tertiary</Text>
        <Text color={'accent'}>accent</Text>
        <Text color={'danger'}>danger</Text>
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
