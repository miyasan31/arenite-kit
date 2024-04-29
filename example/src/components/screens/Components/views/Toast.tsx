import {
  Button,
  createAreniteStyle,
  HStack,
  Text,
  useToast,
  VStack,
} from 'arenite-kit';

const TOAST_ID = 'updateProfileStatus';

export const ToastExample = () => {
  const { addToast, updateToast, clearToasts } = useToast();

  const onShowToast = () => {
    addToast({
      id: TOAST_ID,
      type: 'loading',
      message: 'Loading...',
    });
  };

  const onUpdateToast = () => {
    updateToast(TOAST_ID, {
      id: TOAST_ID,
      type: 'success',
      message: 'Success!',
    });
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        Toast
      </Text>

      <HStack gap={12} justify={'space-between'}>
        <Button bg="tertiary" onPress={onShowToast} fullWidth={false}>
          Show
        </Button>
        <Button bg="info" onPress={onUpdateToast} fullWidth={false}>
          Update
        </Button>
        <Button
          bg="bg1"
          border="border1"
          color="color1"
          onPress={clearToasts}
          fullWidth={false}
        >
          Clear
        </Button>
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
