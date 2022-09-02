import { createContext, useContext, useState, ReactNode } from 'react';

interface IFormRegister {
  name: string;
  email: string;
  contact: string;
  github: string;
  password: string;
  passwordConfirm: string;
}

interface IRegisterProps {
  children: ReactNode;
}

interface IRegisterData {
  submitFormRegister: (data: IFormRegister) => void;
}

const RegisterContext = createContext<IRegisterData>({} as IRegisterData);

const RegisterProvider = ({ children }: IRegisterProps) => {
  const submitFormRegister = (data: IFormRegister) => {
    console.log(data);
  };

  return (
    <RegisterContext.Provider value={{ submitFormRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => useContext(RegisterContext);

export { useRegisterContext, RegisterProvider };
