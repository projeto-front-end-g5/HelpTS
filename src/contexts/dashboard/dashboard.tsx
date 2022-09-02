import { createContext, useContext, useState, ReactNode } from 'react';

interface IDashboardProps {
  children: ReactNode;
}

interface IDashboardData {
  tags: string[];
  darkMode: boolean;
  user: boolean;
  DarkLight(): void;
  UserExists(): void;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const DashboardContext = createContext<IDashboardData>({} as IDashboardData);

const DashboardProvider = ({ children }: IDashboardProps) => {
  const [tags, setTags] = useState<string[]>([
    'state',
    'function',
    'style-components',
    'png',
    'axios',
    'contextApi',
    'props',
    'parameter',
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(false);

  function DarkLight() {
    return darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  function UserExists() {
    return user ? setUser(false) : setUser(true);
  }

  return (
    <DashboardContext.Provider
      value={{
        darkMode,
        setDarkMode,
        user,
        setUser,
        DarkLight,
        UserExists,
        tags,
        setTags,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => useContext(DashboardContext);

export { useDashboardContext, DashboardProvider };
