import { createContext, useContext, useState, ReactNode } from 'react';
import api from '../../services/api';

interface ISolutionsProps {
  children: ReactNode;
}

interface ISolutionContent {
  code: string;
  text: string;
}

interface ISolution {
  title: string;
  content: ISolutionContent[];
  created_at?: string;
  updated_at?: string;
  tags: string[];
  userId: number;
  id: number;
  likes: 0;
}

interface ISolutionsData {
  createSolution: (data: ISolution) => void;
  getSolution: () => void;
}
const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children }: ISolutionsProps) => {
  const token = localStorage.getItem('token');

  const createSolution = (data: ISolution) => {
    api
      .post('/solutions', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
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

  return (
    <SolutionsContext.Provider value={{ createSolution, getSolution }}>
      {children}
    </SolutionsContext.Provider>
  );
};

const useSolutionsContext = () => useContext(SolutionsContext);

export { useSolutionsContext, SolutionsProvider };
