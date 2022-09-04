import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';
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
  data: any;
}

interface IRegisterData {
  submitRegister: () => void;
  submitFormRegister: (data: IFormRegister) => void;
}

const RegisterContext = createContext<IRegisterData>({} as IRegisterData);

const RegisterProvider = ({ data, children }: IRegisterProps) => {
  const submitFormRegister = (data: IFormRegister) => {
    console.log(data);

    return toast.success('Registro concluído com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const navigate = useNavigate();

  const submitRegister = () => {
    api
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
