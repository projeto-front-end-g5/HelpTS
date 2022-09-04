import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface ILoginProps {
  children: ReactNode;
}

interface ISubmitLogin {
  email: string;
  password: string;
}

interface ILoginData {
  openEye: boolean;
  submitLogin: (data: ISubmitLogin) => void;
  changeStateOpenEyes: () => void;
}

const LoginContex = createContext<ILoginData>({} as ILoginData);

const LoginProvider = ({ children }: ILoginProps) => {
  const [openEye, setOpenEye] = useState(false);

  const submitLogin = (data: ISubmitLogin) => {
    console.log(data);

    return toast('Login realizado com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const changeStateOpenEyes = () => {
    if (openEye) {
      setOpenEye(false);
    } else {
      setOpenEye(true);
    }
  };

  return (
    <LoginContex.Provider value={{ openEye, submitLogin, changeStateOpenEyes }}>
      {children}
    </LoginContex.Provider>
  );
};

const useLoginContext = () => useContext(LoginContex);

export { useLoginContext, LoginProvider };
