import { createContext, useContext, useState, ReactNode } from 'react';

interface ILoginProps {
  children: ReactNode;
}

interface ILoginData {
  deleteA: () => void;
}

const LoginContex = createContext<ILoginData>({} as ILoginData);

const LoginProvider = ({ children }: ILoginProps) => {
  const deleteA = () => {
    const b = 'oi';
  };

  return (
    <LoginContex.Provider value={{ deleteA }}>{children}</LoginContex.Provider>
  );
};

const useLoginContext = () => useContext(LoginContex);

export { useLoginContext, LoginProvider };
