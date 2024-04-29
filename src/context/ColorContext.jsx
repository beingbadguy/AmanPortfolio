import { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ContextProvider = (props) => {
  const [clr, setclr] = useState(true);
  return <ColorContext.Provider value={{ clr, setclr }}>{props.children}</ColorContext.Provider>;
};
