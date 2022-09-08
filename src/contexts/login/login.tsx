import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

interface ILoginProps {
  children: ReactNode;
}

interface ISubmitLogin {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  contact: string;
  github: string;
  passwordConfirm: string;
  id: number;
}

interface ILoginData {
  openEye: boolean;
  typeInput: string;
  user: IUser;
  token: string | null;
  userId: string | null;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  submitLogin: (dataSubmit: ISubmitLogin) => void;
  changeStateOpenEyes: () => void;
}

const LoginContex = createContext<ILoginData>({} as ILoginData);

const LoginProvider = ({ children }: ILoginProps) => {
  const [openEye, setOpenEye] = useState(false);
  const [typeInput, setTypeInput] = useState('password');
  const [user, setUser] = useState<IUser>({} as IUser);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const submitLogin = (data: ISubmitLogin) => {
    api
      .post('/login', data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userName', response.data.user.name);
        navigate('/dashboard', { replace: true });

        return toast('✅ Login realizado com sucesso!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.error(err.response.data);

        return toast('❌ Tente novamente!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const changeStateOpenEyes = () => {
    setOpenEye(!openEye);
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  //
  return (
    <LoginContex.Provider
      value={{
        openEye,
        submitLogin,
        changeStateOpenEyes,
        typeInput,
        setUser,
        user,
        token,
        userId,
      }}
    >
      {children}
    </LoginContex.Provider>
  );
};

const useLoginContext = () => useContext(LoginContex);

export { useLoginContext, LoginProvider };
