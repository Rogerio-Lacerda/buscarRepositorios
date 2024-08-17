import React from 'react';
import useFetch from '../hooks/useFetch';

export const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const { data, error, loading, request } = useFetch();
  return (
    <GlobalContext.Provider value={{ data, error, loading, request }}>
      {children}
    </GlobalContext.Provider>
  );
};
