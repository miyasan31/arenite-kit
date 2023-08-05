import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';

type SafeArea =
  | 'top-horizontal'
  | 'horizontal'
  | 'bottom-horizontal'
  | 'vertical-horizontal';

export const getSafeAreaEdges = (
  safeArea: SafeArea
): NativeSafeAreaViewProps['edges'] => {
  const edges = {
    'horizontal': ['left', 'right'],
    'top-horizontal': ['top', 'left', 'right'],
    'bottom-horizontal': ['bottom', 'left', 'right'],
    'vertical-horizontal': ['top', 'bottom', 'left', 'right'],
  } as const;
  return edges[safeArea] || ['top', 'bottom', 'left', 'right'];
};
