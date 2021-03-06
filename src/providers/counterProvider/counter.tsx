import { createContext, ReactNode, useContext, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
}



export const CounterContext = createContext(0);

export const CounterProvider = ({ children }: ProvidersProps) => {
  let [counter, setCounter] = useState(0);

  const plusOne = () => {
    setCounter(counter + 1);
  };

  const minusOne = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ minusOne, plusOne }}>
      {children}
    </CounterContext.Provider>
  );
};
