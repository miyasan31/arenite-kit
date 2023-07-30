import React from 'react';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';
import { Box } from '../primitives';
import type { BoxProps } from '../primitives';

export type VStackProps = BoxProps & {
  gap?: AreniteViewStyle['rowGap'];
  align?: AreniteViewStyle['alignItems'];
  justify?: AreniteViewStyle['justifyContent'];
};

export const VStack = (props: VStackProps) => {
  const { style, gap, align, justify, ...otherProps } = props;

  return (
    <Box
      style={[
        style,
        defaultStyle.view,
        {
          rowGap: gap,
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
    flexDirection: 'column',
  },
});
