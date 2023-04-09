import React, { ReactNode } from 'react';
import { Text, View } from 'arenite-kit';

type ButtonProps = {
  children: ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
