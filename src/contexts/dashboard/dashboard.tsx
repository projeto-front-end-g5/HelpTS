import { NavigateFunction, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import api from '../../services/api';
import { SolutionType, useSolutionsContext } from '../solutions/solutions';

interface IDashboardProps {
  children: ReactNode;
}

interface SolutionsCard {
  title: string;
  content: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  tags: string[];
  userId: number;
  id: number;
  likes: number;
}

interface ITags {
  id: string;
  tag: string;
}

export interface ISolutionCardProps {
  item: SolutionsCard;
}

interface IDashboardData {
  tags: ITags[];
  darkMode: boolean;
  counter: number;
  buttonClick: boolean;
  limit: number;
  currentTheme: string;
  backGroundColorLight: string;
  backGroundColorHeader: string;
  backGroundColorDark: string;
  backGroundColorContainerBlue: string;
  DarkLight(): void;
  increase(): void;
  decrease(): void;
  changeTheme(): void;
  setBackgroundColorLight: (backGroundColorLight: string) => void;
  setBackgroundColorDark: (backGroundColorDark: string) => void;
  setBackGroundColorContainerBlue: (
    backGroundColorContainerBlue: string
  ) => void;
  setCurrentTheme: (currentTheme: string) => void;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  showAll: () => void;
  showMine: () => void;
  navigate: NavigateFunction;
  IncreaseLike: (like: number) => number;
  Like: (item: SolutionsCard) => void;
  setBackGroundColorHeader: (backGroundColorHeader: string) => void;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setTags: React.Dispatch<React.SetStateAction<ITags[]>>;
  setButtonClick: (buttonClick: boolean) => void;
  filteredSolutions: SolutionType[];
  postId: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}

const DashboardContext = createContext<IDashboardData>({} as IDashboardData);

const DashboardProvider = ({ children }: IDashboardProps) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [counter, setCounter] = useState(1);
  const [limit, setLimit] = useState(4);
  const [buttonClick, setButtonClick] = useState(false);
  const [postId, setPostId] = useState(0);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [backGroundColorLight, setBackgroundColorLight] = useState('#E4E4C8');
  const [backGroundColorDark, setBackgroundColorDark] = useState('#1C1C1C');
  const [backGroundColorHeader, setBackGroundColorHeader] = useState('#EEB73F');
  const [loading, setLoading] = useState(true);
  const [backGroundColorContainerBlue, setBackGroundColorContainerBlue] =
    useState('#4087D7');

  const [tags, setTags] = useState<ITags[]>([
    { id: uuidv4(), tag: 'state' },
    { id: uuidv4(), tag: 'function' },
    { id: uuidv4(), tag: 'styled-components' },
    { id: uuidv4(), tag: 'png' },
    { id: uuidv4(), tag: 'axios' },
    { id: uuidv4(), tag: 'contextApi' },
    { id: uuidv4(), tag: 'props' },
    { id: uuidv4(), tag: 'parameter' },
    { id: uuidv4(), tag: 'string' },
  ]);

  const { setFilteredSolutions, filteredSolutions, solutions } =
    useSolutionsContext();

  function increase() {
    if (counter < 5) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }
  }

  function decrease() {
    if (counter === 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    api
      .get(`/solutions?_page=${counter}&_limit=${limit}`)
      .then((response) => {
        setFilteredSolutions(response.data);
        setLoading(false);
      })
      .catch((err) => console.error(err.response.data.message));
  }, [counter, limit]);

  const showAll = () => {
    setFilteredSolutions(solutions);
    setLimit(10);
  };

  const showMine = () => {
    const idUser = localStorage.getItem('userId');

    const filtered = solutions.filter(
      (solution) => solution.userId === Number(idUser)
    );

    setFilteredSolutions(filtered);
  };

  function DarkLight() {
    if (darkMode) {
      setDarkMode(false);
      setCurrentTheme('light');
    } else {
      setDarkMode(true);
      setCurrentTheme('dark');
    }
  }

  function IncreaseLike(like: number) {
    return like + 1;
  }

  const changeTheme = () => {
    DarkLight();
    if (darkMode) {
      setBackgroundColorLight('#1C1C1C');
    } else {
      setBackgroundColorLight('#E4E4C8');
    }
  };

  function Like(item: SolutionsCard) {
    setButtonClick(true);
    if (buttonClick) {
      setPostId(item.id);

      const newLike = IncreaseLike(item.likes);

      // eslint-disable-next-line camelcase, no-shadow
      const { content, created_at, id, tags, title, updated_at, userId } = item;
      api
        .patch(
          `/solutions/${item.id}`,
          {
            title,
            content,
            // eslint-disable-next-line object-shorthand, camelcase
            created_at: created_at,
            // eslint-disable-next-line object-shorthand, camelcase
            updated_at: updated_at,
            tags,
            userId,
            id,
            likes: newLike,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          console.log('like adicionado');
        })
        .catch((err) => console.error(err.response.data.message));
    }
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
        buttonClick,
        setButtonClick,
        Like,
        IncreaseLike,
        limit,
        setLimit,
        currentTheme,
        setCurrentTheme,
        backGroundColorLight,
        setBackgroundColorLight,
        changeTheme,
        backGroundColorHeader,
        setBackGroundColorHeader,
        backGroundColorDark,
        setBackgroundColorDark,
        backGroundColorContainerBlue,
        setBackGroundColorContainerBlue,
        showAll,
        showMine,
        filteredSolutions,
        postId,
        setPostId,
        loading,
        setLoading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => useContext(DashboardContext);

export { useDashboardContext, DashboardProvider };
