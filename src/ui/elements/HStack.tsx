import React from 'react';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';
import { View } from '../primitives';
import type { ViewProps } from '../primitives';

export type HStackProps = ViewProps & {
  gap?: AreniteViewStyle['rowGap'];
  align?: AreniteViewStyle['alignItems'];
  justify?: AreniteViewStyle['justifyContent'];
};

export const HStack = (props: HStackProps) => {
  const { style, gap, align, justify, ...otherProps } = props;

  return (
    <View
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
