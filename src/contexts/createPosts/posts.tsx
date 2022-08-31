import { createContext, useContext, useState, ReactNode } from 'react';

interface IPostProps {
  children: ReactNode;
}

interface IPostData {
  name: () => void;
}

const PostContext = createContext<IPostData>({} as IPostData);

const PostProvider = ({ children }: IPostProps) => {
  const name = () => {
    const b = 'oi';
  };

  return (
    <PostContext.Provider value={{ name }}>{children}</PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { usePostContext, PostProvider };
