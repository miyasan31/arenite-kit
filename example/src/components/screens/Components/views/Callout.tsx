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
        title="Title"
        description={'Description'}
        bg={'successA'}
        leftComponent={
          <ThemingIcon
            color={'color1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        rightComponent={
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
            <ThemingIcon color={'color2'} size={20} name={'close'} />
          </Bounceable>
        }
      />

      <Callout
        isDisplayed={isDisplayedWaningCallout}
        title="Title"
        description={'Description'}
        bg={'warningA'}
        leftComponent={
          <ThemingIcon
            color={'color1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        rightComponent={
          <Bounceable onPress={() => setIsDisplayedWaningCallout(false)}>
            <ThemingIcon color={'color2'} size={20} name={'close'} />
          </Bounceable>
        }
      />

      <Callout
        isDisplayed={isDisplayedErrorCallout}
        title="Title"
        description={'Description'}
        bg={'errorA'}
        leftComponent={
          <ThemingIcon
            color={'color1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        rightComponent={
          <Bounceable onPress={() => setIsDisplayedErrorCallout(false)}>
            <ThemingIcon color={'color2'} size={20} name={'close'} />
          </Bounceable>
        }
      />

      <Callout
        isDisplayed={isDisplayedInfoCallout}
        title="Title"
        description={'Description'}
        bg={'infoA'}
        leftComponent={
          <ThemingIcon
            color={'color1'}
            size={20}
            name={'information-circle-outline'}
          />
        }
        rightComponent={
          <Bounceable onPress={() => setIsDisplayedInfoCallout(false)}>
            <ThemingIcon color={'color2'} size={20} name={'close'} />
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
});
