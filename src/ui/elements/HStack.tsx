import React, { ForwardedRef, forwardRef, memo } from 'react';
import type { View as NativeView } from 'react-native';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';
import { Box } from '../primitives';
import type { BoxProps } from '../primitives';

export type HStackProps = BoxProps & {
  gap?: AreniteViewStyle['rowGap'];
  align?: AreniteViewStyle['alignItems'];
  justify?: AreniteViewStyle['justifyContent'];
};

const HStackComponent = (props: HStackProps, ref: ForwardedRef<NativeView>) => {
  const { style, gap, align, justify, ...otherProps } = props;

  return (
    <Box
      ref={ref}
      style={[
        style,
        defaultStyle.view,
        {
          columnGap: gap,
          alignItems: align,
          justifyContent: justify,
        },
      ]}
      {...otherProps}
    />
  );
};

const defaultStyle = createAreniteStyle({
  view: {
    flexDirection: 'row',
  },
});

export const HStack = memo(
  forwardRef<NativeView, HStackProps>(HStackComponent)
);
