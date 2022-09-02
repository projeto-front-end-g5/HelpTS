import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { string } from 'yup';

interface ILoginProps {
  children: ReactNode;
  data : any;

  
}

interface ILoginData {
    postLogin: () => void;
  submitFunction: () => void;
}


const LoginContex = createContext<ILoginData>({} as ILoginData);

const LoginProvider = ( {data} : ILoginProps) => {

  const navigate = useNavigate();

  
  const postLogin = () => {axios.post('https://json-server-project-help-ts.herokuapp.com/login', data)
    .then((response) => {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('userId', response.data.user.id);
        navigate("/dashboard", { replace : true})
    }) 
    .catch((err) => console.log(err.response.data.message))
   }
  ;

  return (
    <LoginContex.Provider value={{ postLogin }}>{children}</LoginContex.Provider>
  );
};

const useLoginContext = () => useContext(LoginContex);

export { useLoginContext, LoginProvider };
