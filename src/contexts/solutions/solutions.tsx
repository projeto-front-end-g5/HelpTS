import { createContext, useContext, useState, ReactNode } from 'react';

interface ISolutionsProps {
  children: ReactNode;
}

interface ISolutionsData {
  name: () => void;
}

const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children }: ISolutionsProps) => {
  const name = () => {
    const b = 'oi';
  };

  return (
    <SolutionsContext.Provider value={{ name }}>
      {children}
    </SolutionsContext.Provider>
  );
};

const useSolutionsContext = () => useContext(SolutionsContext);

export { useSolutionsContext, SolutionsProvider };
