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


export interface SolutionType {
  title: string;
  content: ContentType;
  created_at: string;
  updated_at: string;
  tags: string[];
  likes: number;
  userId: number;
  id: number;
}

interface ISolutionsData {
  createSolution: (data: ISolutionsData) => void;
  setSolutions: Dispatch<SetStateAction<never[]>>;
  getSolution: (data: ISolutionsData) => void;
  deleteSolution: () => void;
  solutions: SolutionType[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchSolution: () => void;
  filteredSolutions: SolutionType[];
  visibilityDeleteSolution: boolean;
  idSolution: number;
  setIdSolution: (idSolution: number) => void;
  setVisibilityDeleteSolution: (visibilityDeleteSolution: boolean) => void;
}

const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children }: ISolutionsProps) => {
  const token = localStorage.getItem('token');

  const [solutions, setSolutions] = useState<SolutionType[]>([]);
  const [filteredSolutions, setFilteredSolutions] = useState<SolutionType[]>(
    []
  );
  const [search, setSearch] = useState('');
  const [visibilityDeleteSolution, setVisibilityDeleteSolution] =
    useState(true);
  const [idSolution, setIdSolution] = useState(0);

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
        setFilteredSolutions(response.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  const searchSolution = () => {
    setFilteredSolutions(
      solutions.filter((solution) =>
        solution.title.toLowerCase().includes(search)
      )
    );
  };

  const deleteSolution = () => {
    api
      .delete(`/solutions/${idSolution}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log('Solução deletada');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <SolutionsContext.Provider
      value={{
        createSolution,
        getSolution,
        solutions,
        search,
        setSearch,
        searchSolution,
        filteredSolutions,
        visibilityDeleteSolution,
        setVisibilityDeleteSolution,
        deleteSolution,
        idSolution,
        setIdSolution,
        setSolutions
      }}

    >
      {children}
    </SolutionsContext.Provider>
  );
};

const useSolutionsContext = () => useContext(SolutionsContext);

export { useSolutionsContext, SolutionsProvider };
