import { useState, createContext, useContext } from 'react';

const Context = createContext();

const GameContext = ({ children }) => {
  const [blackIsNext, setBlackIsNext] = useState(true);

  return (
    <Context.Provider value={{ blackIsNext, setBlackIsNext }}>
      {children}
    </Context.Provider>
  );
};

export const useGameContext = () => useContext(Context);
export default GameContext;
