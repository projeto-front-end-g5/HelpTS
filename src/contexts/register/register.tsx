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
}

interface IRegisterData {
  submitRegister: (data: IFormRegister) => void;
}

const RegisterContext = createContext<IRegisterData>({} as IRegisterData);

const RegisterProvider = ({ children }: IRegisterProps) => {
  const navigate = useNavigate();

  const submitRegister = (data: IFormRegister) => {
    api
      .post('/register', data)
      .then(() => {
        navigate('/login', { replace: true });

        return toast('✅ Registro concluído com sucesso!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);

        return toast('❌ Tente novamente!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <RegisterContext.Provider value={{ submitRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => useContext(RegisterContext);

export { useRegisterContext, RegisterProvider };
