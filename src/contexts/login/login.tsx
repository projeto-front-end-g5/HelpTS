import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { string } from 'yup';

interface ILoginProps {
  children: ReactNode;
  data : any; 
}

interface ISubmitLogin {
  email: string;
  password: string;
}

interface ILoginData {
   postLogin: () => void;
  openEye: boolean;
  typeInput: string;
  submitLogin: (data: ISubmitLogin) => void;
  changeStateOpenEyes: () => void;
}

const LoginContex = createContext<ILoginData>({} as ILoginData);

const LoginProvider = ({ data, children }: ILoginProps) => {
  const [openEye, setOpenEye] = useState(false);
  const [typeInput, setTypeInput] = useState('password');
  
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
      value={{ openEye, submitLogin, changeStateOpenEyes, typeInput, postLogin }}
    >
      {children}
    </LoginContex.Provider>
  );
};

const useLoginContext = () => useContext(LoginContex);

export { useLoginContext, LoginProvider };
