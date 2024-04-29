import { createAreniteStyle, HStack, Switch, Text, VStack } from 'arenite-kit';
import { useState } from 'react';

export const SwitchExample = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const onPressToggleSwitch = () =>
    setIsEnabled((previousState) => !previousState);

  return (
    <VStack gap={12}>
      <Text style={style.title} color="color1">
        Switch
      </Text>

      <HStack gap={16}>
        <Switch
          value={isEnabled}
          onValueChange={onPressToggleSwitch}
          trackColor={'primary'}
        />
        <Switch
          value={isEnabled}
          onValueChange={onPressToggleSwitch}
          trackColor={'secondary'}
        />
        <Switch
          value={isEnabled}
          onValueChange={onPressToggleSwitch}
          trackColor={'tertiary'}
        />
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
