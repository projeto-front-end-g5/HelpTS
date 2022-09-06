import { createContext, useContext, useState, ReactNode } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface IDashboardProps {
  children: ReactNode;
}

interface IDashboardData {
  tags: string[];
  darkMode: boolean;
  counter: number;
  DarkLight(): void;
  increase(): void;
  decrease(): void;
  navigate: NavigateFunction;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const DashboardContext = createContext<IDashboardData>({} as IDashboardData);

const DashboardProvider = ({ children }: IDashboardProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
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

  return (
    <DashboardContext.Provider
      value={{
        darkMode,
        setDarkMode,
        DarkLight,
        tags,
        setTags,
        counter,
        setCounter,
        increase,
        decrease,
        navigate,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => useContext(DashboardContext);

export { useDashboardContext, DashboardProvider };
