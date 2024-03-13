import { useState, createContext, useContext } from 'react';

const Context = createContext();

const GameContext = ({ children }) => {
  const [isPlayer2Next, setIsPlayer2Next] = useState(true);

  return (
    <Context.Provider value={{ isPlayer2Next, setIsPlayer2Next }}>
      {children}
    </Context.Provider>
  );
};

export const useGameContext = () => useContext(Context);
export default GameContext;
