import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import api from '../../services/api';
import { useSolutionsContext } from '../solutions/solutions';

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

// console.log(solutions);
// const [backup, setBackup] = useState([]);

// useEffect(() => {
//   api
//     .get('/solutions?_page=1&_limit=4')
//     .then((response) => {
//       setBackup(response.data);
//     })
//     .catch((err) => console.log(err.response.data.message));
// }, []);

const DashboardProvider = ({ children }: IDashboardProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(false);
  const [counter, setCounter] = useState(1);
  const [tags, setTags] = useState<string[]>([
    'state',
    'function',
    'styled-components',
    'png',
    'axios',
    'contextApi',
    'props',
    'parameter',
  ]);

  const { setSolutions } = useSolutionsContext();

  function increase() {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }

    api
      .get(`/solutions?_page=${counter}&_limit=4`)
      .then((response) => {
        setSolutions(response.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }

  function decrease() {
    if (counter === 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }

    api
      .get(`/solutions?_page=${counter}&_limit=4`)
      .then((response) => {
        setSolutions(response.data);
      })
      .catch((err) => console.log(err.response.data.message));
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
