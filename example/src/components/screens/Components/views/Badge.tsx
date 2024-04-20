import { Badge, createAreniteStyle, HStack, Text, VStack } from 'arenite-kit';

export const BadgeExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color="color1">
        Badge
      </Text>

      <HStack gap={8}>
        <Badge bg={'infoA'} color={'info'}>
          Info
        </Badge>
        <Badge bg={'successA'} color={'success'}>
          Success
        </Badge>
        <Badge bg={'warningA'} color={'warning'}>
          Warning
        </Badge>
        <Badge bg={'errorA'} color={'error'}>
          Error
        </Badge>
        <Badge bg={'dangerA'} color={'danger'}>
          Danger
        </Badge>
      </HStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
  },
});
