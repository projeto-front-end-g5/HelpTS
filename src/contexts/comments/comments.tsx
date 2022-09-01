import { createContext, useState, useContext, ReactNode } from 'react';

interface ICommentsProps {
  children: ReactNode;
}

interface ICommentsData {
  deleteSolution: () => void;
}

const CommentsContext = createContext<ICommentsData>({} as ICommentsData);

const CommentsProvider = ({ children }: ICommentsProps) => {
  const deleteSolution = () => {
    const a = 'oi';
  };

  return (
    <CommentsContext.Provider value={{ deleteSolution }}>
      {children}
    </CommentsContext.Provider>
  );
};

const useCommentsContext = () => useContext(CommentsContext);

export { useCommentsContext, CommentsProvider };
