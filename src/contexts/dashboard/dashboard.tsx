import { createContext, useContext, useState, ReactNode } from 'react';

interface IDashboardProps {
  children: ReactNode;
}

interface IDashboardData {
  name: () => void;
}

const DashboardContext = createContext<IDashboardData>({} as IDashboardData);

const DashboardProvider = ({ children }: IDashboardProps) => {
  const name = () => {
    const b = 'b';
  };

  return (
    <DashboardContext.Provider value={{ name }}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => useContext(DashboardContext);

export { useDashboardContext, DashboardProvider };
