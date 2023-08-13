import type {
  AreniteThemeKey,
  BgToken,
  BorderToken,
  ColorToken,
  CommonToken,
  IconToken,
  PalletKeys,
} from '../types';
import { useAreniteTheme } from './useAreniteTheme';
import { useSystemTheme } from './useSystemTheme';

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
  override: { [L in Exclude<AreniteThemeKey, 'auto'>]?: string }
): string | undefined => {
  const systemTheme = useSystemTheme();
  const [{ theme, pallets }] = useAreniteTheme();

  const themeKey = theme === 'auto' ? systemTheme : theme;

  // Override properties, if any, are returned with priority.
  if (override[themeKey]) {
    return override[themeKey];
  }

  if (tokenKey === undefined) {
    return undefined;
  }

  // If common tokens are specified, priority is given to returning them.
  const commonMapping = pallets.common[themeKey];
  if (hasTokenKey(commonMapping, tokenKey)) {
    return commonMapping[tokenKey];
  }

  const themeMapping = pallets[palletKey][themeKey];
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
