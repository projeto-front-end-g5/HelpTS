import { createContext, useState, useEffect, ReactNode } from 'react';


export const UserContext = createContext({});

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
    const token = localStorage.getItem('token');

    if (token != null) {
      fetch('https://kenziehub.herokuapp.com/profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => setUser(response))
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
