import { createContext, useState, useContext, ReactNode } from 'react';

interface ICommentsProps {
  children: ReactNode;
}

interface ICommentsData {
  deleteComment: () => void;
}

const CommentsContext = createContext<ICommentsData>({} as ICommentsData);

const CommentsProvider = ({ children }: ICommentsProps) => {
  const [listComments, setListComments] = useState('')

  const deleteComment = () => {
    const a = 'oi';
  };

  return (
    <CommentsContext.Provider value={{ deleteComment, listComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

const useCommentsContext = () => useContext(CommentsContext);

export { useCommentsContext, CommentsProvider };
