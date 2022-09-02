import { createContext, useContext, useState, ReactNode } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom"


interface IRegisterProps {
  children: ReactNode;
  data : any;
}

interface IRegisterData {
  submitRegister: () => void;
  
}

const RegisterContext = createContext<IRegisterData>({} as IRegisterData);



const RegisterProvider = ({ data , children }: IRegisterProps) => {
  
  const navigate = useNavigate();

  const submitRegister = () => {
    axios.post('hhttps://json-server-project-help-ts.herokuapp.com/register', data)
    .then((response) => navigate("/login", { replace : true})) 
    .catch((err) => console.log(err.response.data.message))
   }

  return (
    <RegisterContext.Provider value={{ submitRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegisterContext = () => useContext(RegisterContext);

export { useRegisterContext, RegisterProvider };
