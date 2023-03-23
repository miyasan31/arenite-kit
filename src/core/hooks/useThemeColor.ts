import {
  PalletKeys,
  CommonToken,
  BgToken,
  ColorToken,
  IconToken,
  BorderToken,
  useAreniteTheme,
} from '$/core';

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

export const useThemeColor = <
  T extends ExcludeCommonTokenKey,
  K extends ResultTokenKey<T>
>(
  palletKey: T,
  tokenKey: K,
  override: { light?: string; dark?: string }
): string | undefined => {
  const { theme, pallets } = useAreniteTheme();

  if (override[theme]) {
    return override[theme];
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
