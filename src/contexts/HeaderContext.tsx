import { createContext, ReactNode, useContext, useState } from 'react';

interface IHeaderProviderProps {
  children: ReactNode;
}

interface IHeaderProvider {
  darkMode: boolean;
  user: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  DarkLight(): void;
  UserExists(): void;
}

const HeaderContext = createContext<IHeaderProvider>({} as IHeaderProvider);
export const useHeaderContext = () => useContext(HeaderContext);

const HeaderProvider = ({ children }: IHeaderProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(false);

  function DarkLight() {
    return darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  function UserExists() {
    return user ? setUser(false) : setUser(true);
  }

  return (
    <HeaderContext.Provider
      value={{ darkMode, setDarkMode, user, setUser, DarkLight, UserExists }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderProvider;
