import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import internal from 'stream';
import api from '../../services/api';

interface ISolutionsProps {
  children: ReactNode;
 
}

type ContentType = {
  text: string;
  code: string;
};

type SolutionType = {
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
  getSolution: (data: ISolutionsData) => void;
  solutions: SolutionType[];
}
const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children }: ISolutionsProps) => {
  const token = localStorage.getItem('token');

  const [solutions, setSolutions] = useState([]);

  const createSolution = (data: ISolutionsData) => {
    api
      .post(
        'https://json-server-project-help-ts.herokuapp.com/solutions ',
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log('Solução criada');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const getSolution = () => {
    api
      .get('/solutions')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err.response.data.message));
  };



  useEffect(() => {
    api
        .get('/solutions')
        .then((response) => {
          setSolutions(response.data);
        })
        .catch((err) => console.log(err.response.data.message));
  }, []);
  

  return (
    <SolutionsContext.Provider value={{ createSolution, getSolution, solutions }}>
      {children}
    </SolutionsContext.Provider>
  );
};




const useSolutionsContext = () => useContext(SolutionsContext);

export { useSolutionsContext, SolutionsProvider };
