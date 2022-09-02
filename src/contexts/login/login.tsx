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
  typeInput: string;
  submitLogin: (data: ISubmitLogin) => void;
  changeStateOpenEyes: () => void;
}

const LoginContex = createContext<ILoginData>({} as ILoginData);

const LoginProvider = ({ children }: ILoginProps) => {
  const [openEye, setOpenEye] = useState(false);
  const [typeInput, setTypeInput] = useState('password');
  const submitLogin = (data: ISubmitLogin) => {
    console.log(data);
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
      value={{ openEye, submitLogin, changeStateOpenEyes, typeInput }}
    >
      {children}
    </LoginContex.Provider>
  );
};

const useLoginContext = () => useContext(LoginContex);

export { useLoginContext, LoginProvider };
