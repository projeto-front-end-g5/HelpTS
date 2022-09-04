import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface IFormRegister {
  name: string;
  email: string;
  contact: string;
  github: string;
  password: string;
  confirmPassword: string;
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

    return toast('Registro concluído com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <RegisterContext.Provider value={{ submitFormRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => useContext(RegisterContext);

export { useRegisterContext, RegisterProvider };
