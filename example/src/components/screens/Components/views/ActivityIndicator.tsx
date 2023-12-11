import {
  ActivityIndicator,
  createAreniteStyle,
  HStack,
  Text,
  VStack,
} from 'arenite-kit';

export const ActivityIndicatorExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        ActivityIndicator
      </Text>

      <HStack gap={24}>
        <ActivityIndicator style={style.indicator} color={'primary'} />
        <ActivityIndicator color={'primary'} size={'large'} />
      </HStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  indicator: {
    borderRadius: 8,
  },
});
