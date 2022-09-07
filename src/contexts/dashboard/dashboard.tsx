import { NavigateFunction, useNavigate } from 'react-router-dom';
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

export interface ISolutionCardProps {
  item: SolutionsCard;
}

interface IDashboardData {
  tags: string[];
  darkMode: boolean;
  counter: number;
  buttonClick: boolean;
  DarkLight(): void;
  increase(): void;
  decrease(): void;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  showAll: () => void;
  showMine: () => void;
  navigate: NavigateFunction;
  IncreaseLike: (like: number) => number;
  Like: (item: SolutionsCard) => void;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setButtonClick: (buttonClick: boolean) => void;
}

const DashboardContext = createContext<IDashboardData>({} as IDashboardData);

const DashboardProvider = ({ children }: IDashboardProps) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [counter, setCounter] = useState(1);
  const [limit, setLimit] = useState(4);
  const [buttonClick, setButtonClick] = useState(false);
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
      })
      .catch((err) => console.log(err.response.data.message));
  }, [counter, limit]);

  const showAll = () => {
    setFilteredSolutions(solutions);
    setLimit(10);
  };

  const showMine = () => {
    const idUser = localStorage.getItem('userId');

    const filtered = filteredSolutions.filter(
      (solution) => solution.userId === Number(idUser)
    );

    setFilteredSolutions(filtered);
  };

  function DarkLight() {
    return darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  function IncreaseLike(like: number) {
    console.log(like);
    return like + 1;
  }

  function Like(item: SolutionsCard) {
    setButtonClick(!buttonClick);
    if (!buttonClick) {
      console.log('foi');
      const newLike = IncreaseLike(item.likes);
      // eslint-disable-next-line camelcase, no-shadow
      const { content, created_at, id, tags, title, updated_at, userId } = item;
      api
        .patch(
          `/solutions/${item.id}`,
          {
            // eslint-disable-next-line object-shorthand
            title: title,
            // eslint-disable-next-line object-shorthand
            content: content,
            // eslint-disable-next-line object-shorthand, camelcase
            created_at: created_at,
            // eslint-disable-next-line object-shorthand, camelcase
            updated_at: updated_at,
            // eslint-disable-next-line object-shorthand
            tags: tags,
            // eslint-disable-next-line object-shorthand
            userId: userId,
            // eslint-disable-next-line object-shorthand
            id: id,
            likes: newLike,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
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
        showAll,
        showMine,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => useContext(DashboardContext);

export { useDashboardContext, DashboardProvider };
