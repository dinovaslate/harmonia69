import React, { useState, createContext } from 'react';

export const Context = createContext();

export default function LoginContext({ children }) {
  const [user, setUser] = useState();
  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}
