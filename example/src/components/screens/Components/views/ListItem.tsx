import { ThemingIcon } from '$components/shared/ThemingIcon';
import {
  createAreniteStyle,
  Divider,
  ListItem,
  Text,
  useAreniteTheme,
  VStack,
} from 'arenite-kit';

export const ListItemExample = () => {
  const [{ theme }] = useAreniteTheme();

  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        ListItem
      </Text>

      <VStack
        bg={'bg2'}
        style={{
          paddingLeft: 12,
          borderRadius: 8,
        }}
      >
        <ListItem
          leftText={'Theme'}
          rightText={theme === 'light' ? 'Light' : 'Dark'}
          leftComponent={
            <ThemingIcon
              name={'color-wand-outline'}
              color={'color1'}
              size={20}
            />
          }
          rightComponent={
            <ThemingIcon
              name={'chevron-forward-outline'}
              color={'color2'}
              size={24}
            />
          }
        />
        <Divider border={'border2'} />
        <ListItem
          leftText={'Favorite'}
          leftComponent={
            <ThemingIcon name={'star'} color={'color1'} size={20} />
          }
          rightComponent={
            <ThemingIcon
              name={'chevron-forward-outline'}
              color={'color2'}
              size={24}
            />
          }
        />
        <Divider border={'border2'} />
        <ListItem
          leftComponent={
            <ThemingIcon name={'exit-outline'} color={'error'} size={20} />
          }
          leftText={'Logout'}
          leftColor={'error'}
        />
      </VStack>
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
