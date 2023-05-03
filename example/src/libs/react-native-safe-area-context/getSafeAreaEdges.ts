import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';

type SafeArea =
  | 'top-horizontal'
  | 'horizontal'
  | 'bottom-horizontal'
  | 'vertical-horizontal';

export const getSafeAreaEdges = (
  safeArea: SafeArea
): NativeSafeAreaViewProps['edges'] => {
  switch (safeArea) {
    case 'horizontal':
      return ['left', 'right'];
    case 'top-horizontal':
      return ['top', 'left', 'right'];
    case 'bottom-horizontal':
      return ['bottom', 'left', 'right'];
    case 'vertical-horizontal':
      return ['top', 'bottom', 'left', 'right'];
    default:
      return ['top', 'bottom', 'left', 'right'];
  }
};
