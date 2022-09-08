import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import api from '../../services/api';

interface userPoviderProps {
  children: ReactNode;

}

interface IUserData {
  user: string[];
}


export const UserContext = createContext<IUserData>({} as IUserData);

export const UserProvider = ({ children }: userPoviderProps) => {
  const [user, setUser] = useState<string[]>([]);

  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    if (token != null) {
      api.get(`https://json-server-project-help-ts.herokuapp.com/users/${id}`,{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => setUser(response.data))
        .catch((error) => {
          console.error(error);

          localStorage.removeItem('token');
          localStorage.removeItem('userId');
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext };
