import { createContext, useContext, useState, ReactNode } from 'react';
import axios from "axios"

interface ISolutionsProps {
  children: ReactNode;
  data : any;
}

interface ISolutionsData {
  createSolution: () => void;
  getSolution: () => void
}
const SolutionsContext = createContext<ISolutionsData>({} as ISolutionsData);

const SolutionsProvider = ({ children , data }: ISolutionsProps) => {

    const token = localStorage.getItem("token");

  const createSolution = () => {
    axios.post('https://json-server-project-help-ts.herokuapp.com/solutions ', data, {
        headers: {Authorization: `Bearer ${token}`}
      }).then((response) => {console.log("Solução criada")}) 
    .catch((err) => console.log(err.response.data.message))
};

  const getSolution = () => {
    axios.get('https://json-server-project-help-ts.herokuapp.com/solutions' , data)
    .then((response) => {console.log(response)}) 
    .catch((err) => console.log(err.response.data.message))

  }

  return (
    <SolutionsContext.Provider value={{ createSolution, sssssgetSolution }}>
      {children}
    </SolutionsContext.Provider>
  );
};

const useSolutionsContext = () => useContext(SolutionsContext);

export { useSolutionsContext, SolutionsProvider };
