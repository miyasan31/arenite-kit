import type { ReactNode } from 'react';
import type { BgThemeProps } from '../../core';
import { createAreniteStyle } from '../../style';
import { Text } from '../primitives';
import { HStack } from './HStack';
import { VStack } from './VStack';

type CalloutProps = {
  title: string;
  description?: string;
  left?: ReactNode;
  right?: ReactNode;
  isDisplayed?: boolean;
} & BgThemeProps;

const CalloutComponent = (props: CalloutProps) => {
  const { bg, title, description, left, right, isDisplayed = true } = props;

  if (!isDisplayed) {
    return null;
  }

  return (
    <HStack bg={bg} style={defaultStyle.container}>
      <>{left}</>

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

      <>{right}</>
    </HStack>
  );
};

const defaultStyle = createAreniteStyle({
  container: {
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    gap: 4,
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
