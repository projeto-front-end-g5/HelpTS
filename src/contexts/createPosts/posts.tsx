/* eslint-disable camelcase */
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useSolutionsContext } from '../solutions/solutions';

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
  tags: string[];
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
  getDate: () => string;
}

const PostContext = createContext<IPostData>({} as IPostData);

const PostProvider = ({ children }: IPostProps) => {
  const { solutions, setSolutions, filteredSolutions, setFilteredSolutions } =
    useSolutionsContext();

  const [textcode, setTextcode] = useState('');
  const [texts, setTexts] = useState('');
  const [title, setTitle] = useState('');

  const navigate = useNavigate();

  const getDate = () => {
    const dateUpdate = new Date();
    const day = dateUpdate.getDate();
    const month = dateUpdate.getMonth() + 1;
    const year = dateUpdate.getFullYear();

    return `0${day}/0${month}/${year}`;
  };

  useEffect(() => {
    getDate();
  }, []);

  const newSolution = async (post: IPost) => {
    const dateUpdate = new Date();
    const day = dateUpdate.getDate();
    const month = dateUpdate.getMonth() + 1;
    const year = dateUpdate.getFullYear();
    const newDateSolution = `0${day}/0${month}/${year}`;

    const idUser = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    const solution: IPostFull = {
      title: post.title,
      content: {
        text: post.text,
        code: post.code,
      },
      created_at: newDateSolution,
      updated_at: newDateSolution,
      tags: [post.tags],
      likes: 0,
      userId: idUser,
    };
    console.log(solution);

    try {
      const { data } = await api.post('/solutions', solution, {
        headers: { Authorization: `Bearer ${token}` },
      });
      /* setFilteredSolutions([...filteredSolutions, data]); */
      setSolutions([...solutions, data]);
      navigate('/posts', { replace: true });
      toast('✅ Solução criada com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
      toast('❌ Tente novamente!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
        getDate,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { usePostContext, PostProvider };
