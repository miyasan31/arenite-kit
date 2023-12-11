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
          isFirst
          leftText={'Theme'}
          rightText={theme === 'light' ? 'Light' : 'Dark'}
          leftIcon={
            <ThemingIcon name={'color-wand-outline'} icon={'icon1'} size={20} />
          }
          rightIcon={
            <ThemingIcon
              name={'chevron-forward-outline'}
              icon={'icon2'}
              size={24}
            />
          }
        />
        <Divider border={'border2'} />
        <ListItem
          leftText={'Favorite'}
          leftIcon={<ThemingIcon name={'star'} icon={'icon1'} size={20} />}
          rightIcon={
            <ThemingIcon
              name={'chevron-forward-outline'}
              icon={'icon2'}
              size={24}
            />
          }
        />
        <Divider border={'border2'} />
        <ListItem
          isLast
          leftIcon={
            <ThemingIcon name={'exit-outline'} icon={'error'} size={20} />
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
  image: {
    borderRadius: 8,
    borderWidth: 1,
  },
});
