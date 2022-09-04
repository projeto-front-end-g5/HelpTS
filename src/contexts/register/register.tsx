import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';


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
  submitRegister: (data: IFormRegister) => void;
  submitFormRegister: (dataRegister: IFormRegister) => void;
}

const RegisterContext = createContext<IRegisterData>({} as IRegisterData);

const RegisterProvider = ({ children }: IRegisterProps) => {
  const submitFormRegister = (data: IFormRegister) => {
    console.log(data);
  };
  const navigate = useNavigate();

  const submitRegister = (data: IFormRegister) => {
    axios
      .post('/register', data)
      .then((response) => navigate('/login', { replace: true }))
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <RegisterContext.Provider value={{ submitFormRegister, submitRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => useContext(RegisterContext);

export { useRegisterContext, RegisterProvider };
