import { useContext } from 'react';
import { AreniteThemeContext } from '../providers';

export const useAreniteTheme = () => {
  return useContext(AreniteThemeContext);
};
