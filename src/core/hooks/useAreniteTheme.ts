import { AreniteThemeContext } from '$/core';
import { useContext } from 'react';

export const useAreniteTheme = () => {
  return useContext(AreniteThemeContext);
};
