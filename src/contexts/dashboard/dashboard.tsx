import { createContext, useContext, useState, ReactNode } from 'react';

interface IDashboardProps {
  children: ReactNode;
}

interface IDashboardData {
  tags: string[];
  darkMode: boolean;
  user: boolean;
  counter: number;
  DarkLight(): void;
  UserExists(): void;
  increase(): void;
  decrease(): void;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const DashboardContext = createContext<IDashboardData>({} as IDashboardData);

const DashboardProvider = ({ children }: IDashboardProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(false);
  const [counter, setCounter] = useState(1);
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

  function increase() {
    return counter < 5 ? setCounter(counter + 1) : setCounter(counter);
  }

  function decrease() {
    return counter === 1 ? setCounter(counter) : setCounter(counter - 1);
  }

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
        counter,
        setCounter,
        increase,
        decrease,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => useContext(DashboardContext);

export { useDashboardContext, DashboardProvider };
