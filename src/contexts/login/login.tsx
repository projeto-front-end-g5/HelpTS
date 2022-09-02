import { createContext, useContext, useState, ReactNode } from 'react';

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
