import { ThemingIcon } from '$components/shared/ThemingIcon';
import {
  Bounceable,
  Callout,
  createAreniteStyle,
  Text,
  VStack,
} from 'arenite-kit';
import { useState } from 'react';

export const CalloutExample = () => {
  const [isDisplayedSuccessCallout, setIsDisplayedSuccessCallout] =
    useState(true);
  const [isDisplayedWaningCallout, setIsDisplayedWaningCallout] =
    useState(true);
  const [isDisplayedErrorCallout, setIsDisplayedErrorCallout] = useState(true);
  const [isDisplayedInfoCallout, setIsDisplayedInfoCallout] = useState(true);

  const onPressAllDisplayedCalloutButton = () => {
    setIsDisplayedSuccessCallout(true);
    setIsDisplayedWaningCallout(true);
    setIsDisplayedErrorCallout(true);
    setIsDisplayedInfoCallout(true);
  };

  return (
    <VStack gap={12}>
      <Text style={style.title} color="color1">
        Callout
      </Text>

      {!isDisplayedSuccessCallout &&
        !isDisplayedWaningCallout &&
        !isDisplayedErrorCallout &&
        !isDisplayedInfoCallout && (
          <Bounceable onPress={onPressAllDisplayedCalloutButton}>
            <Text color="info">Press to display all callouts</Text>
          </Bounceable>
        )}

      <Callout
        isDisplayed={isDisplayedSuccessCallout}
        title="Title text"
        description={'Description text'}
        bg={'successA'}
        left={
          <ThemingIcon
            icon={'icon1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        right={
          <Bounceable
            style={{
              animatedView: {
                width: 20,
                height: 20,
              },
              pressable: {
                width: 20,
                height: 20,
              },
            }}
            onPress={() => setIsDisplayedSuccessCallout(false)}
          >
            <ThemingIcon icon={'icon2'} size={20} name={'close'} />
          </Bounceable>
        }
      />

      <Callout
        isDisplayed={isDisplayedWaningCallout}
        title="Title text"
        description={'Description text'}
        bg={'warningA'}
        left={
          <ThemingIcon
            icon={'icon1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        right={
          <Bounceable onPress={() => setIsDisplayedWaningCallout(false)}>
            <ThemingIcon icon={'icon2'} size={20} name={'close'} />
          </Bounceable>
        }
      />

      <Callout
        isDisplayed={isDisplayedErrorCallout}
        title="Title text"
        description={'Description text'}
        bg={'errorA'}
        left={
          <ThemingIcon
            icon={'icon1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        right={
          <Bounceable onPress={() => setIsDisplayedErrorCallout(false)}>
            <ThemingIcon icon={'icon2'} size={20} name={'close'} />
          </Bounceable>
        }
      />

      <Callout
        isDisplayed={isDisplayedInfoCallout}
        title="Title text"
        description={'Description text'}
        bg={'infoA'}
        left={
          <ThemingIcon
            icon={'icon1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        right={
          <Bounceable onPress={() => setIsDisplayedInfoCallout(false)}>
            <ThemingIcon icon={'icon2'} size={20} name={'close'} />
          </Bounceable>
        }
      />
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
