import { ThemingIcon } from '$components/shared/ThemingIcon';
import { Chip, createAreniteStyle, HStack, Text, VStack } from 'arenite-kit';

export const ChipExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color="color1">
        Chip
      </Text>

      <HStack gap={8}>
        <Chip
          bg={'infoA'}
          color={'info'}
          right={<ThemingIcon color={'info'} name={'chevron-down'} size={12} />}
        >
          Info
        </Chip>
        <Chip bg={'successA'} color={'success'}>
          Success
        </Chip>
        <Chip bg={'warningA'} color={'warning'}>
          Warning
        </Chip>
        <Chip bg={'errorA'} color={'error'}>
          Error
        </Chip>
        <Chip bg={'dangerA'} color={'danger'}>
          Danger
        </Chip>
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
