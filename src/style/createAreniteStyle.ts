import type { AreniteNamedStyles } from './types';

export const createAreniteStyle = <T extends AreniteNamedStyles<T>>(styles: {
  [P in keyof T]: T[P];
}): T => {
  return styles;
};
