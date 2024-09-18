"use client"
import { createContext, useEffect, useState } from 'react';

const CurrentContext = createContext();
const AuthContext = createContext();


const CurrentProvider = ({ children }) => {
  const [current, setCurrent] = useState('');
  const [login, setLogin] = useState(false)
  return (
    <CurrentContext.Provider value={{ current, setCurrent }}>
      <AuthContext.Provider value={{ login, setLogin }}>
        {children}
      </AuthContext.Provider>
    </CurrentContext.Provider>
  );
};

export { CurrentProvider, CurrentContext, AuthContext };

