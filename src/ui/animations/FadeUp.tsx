import React, { ReactNode } from 'react';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

type FadeUpProps = {
  children: ReactNode;
};

const FadeUpComponent = (props: FadeUpProps) => {
  const { children } = props;

  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
      {children}
    </Animated.View>
  );
};

export const FadeUp = FadeUpComponent;
