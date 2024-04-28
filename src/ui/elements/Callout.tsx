import type { ReactNode } from 'react';
import type { BgThemeProps } from '../../core';
import { createAreniteStyle } from '../../style';
import { Text } from '../primitives';
import { HStack } from './HStack';
import { VStack } from './VStack';

export type CalloutProps = {
  title: string;
  description?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  isDisplayed?: boolean;
} & BgThemeProps;

const CalloutComponent = (props: CalloutProps) => {
  const {
    bg,
    title,
    description,
    leftComponent,
    rightComponent,
    isDisplayed = true,
  } = props;

  if (!isDisplayed) {
    return null;
  }

  return (
    <HStack gap={8} bg={bg} style={defaultStyle.container}>
      <>{leftComponent}</>

      <VStack style={defaultStyle.textContainer}>
        <Text color={'color1'} style={defaultStyle.title}>
          {title}
        </Text>

        {description && (
          <Text color={'color1'} style={defaultStyle.description}>
            {description}
          </Text>
        )}
      </VStack>

      <>{rightComponent}</>
    </HStack>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export const Callout = CalloutComponent;
