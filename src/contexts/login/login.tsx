import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

interface ILoginProps {
  children: ReactNode;
}

interface ISubmitLogin {
  email: string;
  password: string;
}

interface ILoginData {
  postLogin: (data: ISubmitLogin) => void;
  openEye: boolean;
  typeInput: string;
  submitLogin: (dataSubmit: ISubmitLogin) => void;
  changeStateOpenEyes: () => void;
}

const LoginContex = createContext<ILoginData>({} as ILoginData);

const LoginProvider = ({ children }: ILoginProps) => {
  const [openEye, setOpenEye] = useState(false);
  const [typeInput, setTypeInput] = useState('password');

  const navigate = useNavigate();

  const postLogin = (data: ISubmitLogin) => {
    axios
      .post('/login', data)
      .then((response) => {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('userId', response.data.user.id);
        navigate('/dashboard', { replace: true });
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const submitLogin = (dataSubmit: ISubmitLogin) => {
    console.log(dataSubmit);
  };

  const changeStateOpenEyes = () => {
    setOpenEye(!openEye);
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  return (
    <LoginContex.Provider
      value={{
        openEye,
        submitLogin,
        changeStateOpenEyes,
        typeInput,
        postLogin,
      }}
    >
      {children}
    </LoginContex.Provider>
  );
};

const useLoginContext = () => useContext(LoginContex);

export { useLoginContext, LoginProvider };
