import { createContext, useContext, useState, ReactNode } from 'react';
import api from '../../services/api';

interface ISolutionsProps {
  children: ReactNode;
  data: any;
}

interface ISolutionsData {
  createSolution: () => void;
  getSolution: () => void;
}
const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children, data }: ISolutionsProps) => {
  const token = localStorage.getItem('token');

  const createSolution = () => {
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
      .get('/solutions', data)
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
