import { ForwardedRef, forwardRef, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { AreniteViewStyle } from '../../style';
import { createAreniteStyle } from '../../style';
import type { BoxProps } from '../primitives';
import { Box } from '../primitives';

export type VStackProps = BoxProps & {
  gap?: AreniteViewStyle['rowGap'];
  align?: AreniteViewStyle['alignItems'];
  justify?: AreniteViewStyle['justifyContent'];
};

const VStackComponent = (props: VStackProps, ref: ForwardedRef<NativeView>) => {
  const { style, gap, align, justify, ...otherProps } = props;

  return (
    <Box
      ref={ref}
      style={[
        defaultStyle.view,
        {
          rowGap: gap,
          alignItems: align,
          justifyContent: justify,
        },
        style,
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

export const VStack: (
  props: { ref?: Ref<NativeView> } & VStackProps
) => JSX.Element | null = forwardRef<NativeView, VStackProps>(VStackComponent);
