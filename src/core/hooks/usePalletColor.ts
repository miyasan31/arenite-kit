import type {
  BgToken,
  BorderToken,
  ColorToken,
  CommonToken,
  IconToken,
  PalletKeys,
} from '../types';
import { useAreniteTheme } from './useAreniteTheme';

type ExcludeCommonTokenKey = Exclude<PalletKeys, 'common'>;

type ResultTokenKey<T extends ExcludeCommonTokenKey> =
  | CommonToken
  | (T extends 'color'
      ? ColorToken
      : T extends 'bg'
      ? BgToken
      : T extends 'icon'
      ? IconToken
      : T extends 'border'
      ? BorderToken
      : undefined);

export const usePalletColor = <
  T extends ExcludeCommonTokenKey,
  K extends ResultTokenKey<T>
>(
  palletKey: T,
  tokenKey: K | undefined,
  override: { light?: string; dark?: string }
): string | undefined => {
  const [{ theme, pallets }] = useAreniteTheme();

  // Override properties, if any, are returned with priority.
  if (override[theme]) {
    return override[theme];
  }

  if (tokenKey === undefined) {
    return undefined;
  }

  // If common tokens are specified, priority is given to returning them.
  const commonMapping = pallets.common[theme];
  if (hasTokenKey(commonMapping, tokenKey)) {
    return commonMapping[tokenKey];
  }

  const themeMapping = pallets[palletKey][theme];
  if (hasTokenKey(themeMapping, tokenKey)) {
    return themeMapping[tokenKey];
  }

  return undefined;
};

const hasTokenKey = <K extends ResultTokenKey<ExcludeCommonTokenKey>>(
  themeMap: Record<string, string>,
  tokenKey: K
): themeMap is Record<K, string> => {
  return tokenKey in themeMap;
};