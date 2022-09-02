import { createContext, useContext, useState, ReactNode } from 'react';

interface IRegisterProps {
  children: ReactNode;
}

interface IRegisterData {
  name: () => void;
}

const RegisterContext = createContext<IRegisterData>({} as IRegisterData);

const RegisterProvider = ({ children }: IRegisterProps) => {
  const name = () => {
    const a = '';
  };

  return (
    <RegisterContext.Provider value={{ name }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => useContext(RegisterContext);

export { useRegisterContext, RegisterProvider };
