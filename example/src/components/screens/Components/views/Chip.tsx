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
          right={<ThemingIcon color={'info'} name={'chevron-down'} size={14} />}
        >
          Info
        </Chip>
        <Chip
          bg={'successA'}
          color={'success'}
          right={
            <ThemingIcon color={'success'} name={'chevron-down'} size={14} />
          }
        >
          Success
        </Chip>
        <Chip
          bg={'warningA'}
          color={'warning'}
          right={
            <ThemingIcon color={'warning'} name={'chevron-down'} size={14} />
          }
        >
          Warning
        </Chip>
        <Chip
          bg={'errorA'}
          color={'error'}
          right={
            <ThemingIcon color={'error'} name={'chevron-down'} size={14} />
          }
        >
          Error
        </Chip>
        <Chip
          bg={'dangerA'}
          color={'danger'}
          right={
            <ThemingIcon color={'danger'} name={'chevron-down'} size={14} />
          }
        >
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
});
