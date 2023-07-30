import React from 'react';
import { createAreniteStyle } from '../../style';
import type { AreniteViewStyle } from '../../style';
import { View } from '../primitives';
import type { ViewProps } from '../primitives';

export type VStackProps = ViewProps & {
  gap?: AreniteViewStyle['rowGap'];
  align?: AreniteViewStyle['alignItems'];
  justify?: AreniteViewStyle['justifyContent'];
};

export const VStack = (props: VStackProps) => {
  const { style, gap, align, justify, ...otherProps } = props;

  return (
    <View
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
