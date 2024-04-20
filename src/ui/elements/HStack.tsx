import { ForwardedRef, forwardRef, Ref } from 'react';
import type { View as NativeView } from 'react-native';
import type { AreniteViewStyle } from '../../style';
import { createAreniteStyle } from '../../style';
import type { BoxProps } from '../primitives';
import { Box } from '../primitives';

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
        defaultStyle.view,
        {
          columnGap: gap,
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
    flexDirection: 'row',
  },
});

export const HStack: (
  props: { ref?: Ref<NativeView> } & HStackProps
) => JSX.Element | null = forwardRef<NativeView, HStackProps>(HStackComponent);
