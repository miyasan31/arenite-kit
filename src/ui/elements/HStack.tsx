import React from 'react';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';
import { Box } from '../primitives';
import type { BoxProps } from '../primitives';

export type HStackProps = BoxProps & {
  gap?: AreniteViewStyle['rowGap'];
  align?: AreniteViewStyle['alignItems'];
  justify?: AreniteViewStyle['justifyContent'];
};

export const HStack = (props: HStackProps) => {
  const { style, gap, align, justify, ...otherProps } = props;

  return (
    <Box
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
