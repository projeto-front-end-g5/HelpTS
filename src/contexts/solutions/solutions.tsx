import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import api from '../../services/api';

interface ISolutionsProps {
  children: ReactNode;
}

type ContentType = {
  text: string;
  code: string;
};

export type SolutionType = {
  title: string;
  content: ContentType;
  created_at: string;
  updated_at: string;
  tags: string[];
  likes: number;
  userId: number;
  id: number;
};

interface ISolutionsData {
  createSolution: (data: ISolutionsData) => void;
  solutions: SolutionType[];
  setSolutions: Dispatch<SetStateAction<never[]>>;
}
const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children }: ISolutionsProps) => {
  const token = localStorage.getItem('token');

  const [solutions, setSolutions] = useState([]);

  const createSolution = (data: ISolutionsData) => {
    api
      .post('/solutions', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log('Solução criada');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  useEffect(() => {
    api
      .get('/solutions?_page=1&_limit=4')
      .then((response) => {
        setSolutions(response.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <SolutionsContext.Provider
      value={{ createSolution, solutions, setSolutions }}
    >
      {children}
    </SolutionsContext.Provider>
  );
};

const useSolutionsContext = () => useContext(SolutionsContext);

export { useSolutionsContext, SolutionsProvider };
