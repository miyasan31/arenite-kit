import { ActivityIndicatorExample } from '$components/screens/Components/views/ActivityIndicator';
import { BadgeExample } from '$components/screens/Components/views/Badge';
import { ButtonExample } from '$components/screens/Components/views/Button';
import { CalloutExample } from '$components/screens/Components/views/Callout';
import { CheckboxExample } from '$components/screens/Components/views/Checkbox';
import { ChipExample } from '$components/screens/Components/views/Chip';
import { DividerExample } from '$components/screens/Components/views/Divider';
import { FlatListExample } from '$components/screens/Components/views/FlatList';
import { HStackExample } from '$components/screens/Components/views/Hstack';
import { IconButtonExample } from '$components/screens/Components/views/IconButton';
import { ImageExample } from '$components/screens/Components/views/Image';
import { ListItemExample } from '$components/screens/Components/views/ListItem';
import { RadioExample } from '$components/screens/Components/views/Radio';
import { SegmentExample } from '$components/screens/Components/views/Segment';
import { SwitchExample } from '$components/screens/Components/views/Switch';
import { TextExample } from '$components/screens/Components/views/Text';
import { TextInputExample } from '$components/screens/Components/views/TextInput';
import { ToastExample } from '$components/screens/Components/views/Toast';
import { VStackExample } from '$components/screens/Components/views/Vstack';
import { getSafeAreaEdges } from '$libs/react-native-safe-area-context/getSafeAreaEdges';
import {
  createAreniteStyle,
  SafeAreaView,
  ScrollView,
  VStack,
} from 'arenite-kit';

export const ComponentsScreen = () => {
  const edges = getSafeAreaEdges('horizontal');

  return (
    <SafeAreaView edges={edges} bg={'bg1'}>
      <ScrollView>
        <VStack gap={32} style={style.container}>
          <TextExample />
          <TextInputExample />
          <SwitchExample />
          <CheckboxExample />
          <RadioExample />
          <ButtonExample />
          <SegmentExample />
          <IconButtonExample />
          <ImageExample />
          <FlatListExample />
          <VStackExample />
          <HStackExample />
          <BadgeExample />
          <ChipExample />
          <CalloutExample />
          <ToastExample />
          <ListItemExample />
          <DividerExample />
          <ActivityIndicatorExample />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = createAreniteStyle({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 160,
  },
});
