/* eslint-disable camelcase */
import { createContext, useContext, useState, ReactNode } from 'react';
import api from '../../services/api';
import { UserContext } from '../user/user';

interface IPostProps {
  children: ReactNode;
}

interface IPost {
  title: string;
  text: string;
  code: string;
  tags: string;
}

interface IPostFull {
  title: string;
  content: {
    text: string;
    code: string;
  };
  created_at?: string;
  updated_at?: string;
  tags: string;
  likes: number;
  userId: string | null;
}

interface IPostData {
  textcode: string;
  setTextcode: React.Dispatch<React.SetStateAction<string>>;
  texts: string;
  setTexts: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  newSolution: (data: IPost) => void;
}

const PostContext = createContext<IPostData>({} as IPostData);

const PostProvider = ({ children }: IPostProps) => {
  const { user } = useContext(UserContext);

  const [textcode, setTextcode] = useState('');
  const [texts, setTexts] = useState('');
  const [title, setTitle] = useState('Titulo');

  const newSolution = async (data: IPost) => {
    const dateUpdate = new Date();
    const day = dateUpdate.getDate();
    const month = dateUpdate.getMonth() + 1;
    const year = dateUpdate.getFullYear();
    const newDateSolution = `0${day}/0${month}/${year}`;

    const idUser = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    console.log(user);

    const solution: IPostFull = {
      title: data.title,
      content: {
        text: data.text,
        code: data.code,
      },
      created_at: newDateSolution,
      updated_at: newDateSolution,
      tags: data.tags,
      likes: 0,
      userId: idUser,
    };
    console.log(solution);

    try {
      await api.post('/solutions', solution, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('funcionou');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        textcode,
        setTextcode,
        texts,
        setTexts,
        newSolution,
        title,
        setTitle,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { usePostContext, PostProvider };
