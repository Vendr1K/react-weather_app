import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../untils/changeCssRootVariable';
// import { storage } from '../model/Storage';

interface Props {
  children: ReactNode;
}

const storage = {
    setItem: (name: string, item: any) => {
      localStorage.setItem(name, JSON.stringify(item));
    },
    getItem: (name: string) => {
      const item = localStorage.getItem(name);
      if (item) {
        return JSON.parse(item);
      }
    },
};

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem('theme') || Theme.LIGHT
  );
  changeCssRootVariables(theme);
  function changeTheme(theme: Theme) {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
