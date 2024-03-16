import { useState, createContext, useContext } from 'react';

const Context = createContext();


const GameContext = ({ children }) => {
  const initialSlots = new Array(9).fill(null);
  const [isPlayer2Next, setIsPlayer2Next] = useState(true);
  const [fullBoard, setFullBoard] = useState([
    initialSlots,
    initialSlots,
    initialSlots,
    initialSlots,
  ]);

  return (
    <Context.Provider
      value={{ isPlayer2Next, setIsPlayer2Next, setFullBoard, fullBoard }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGameContext = () => useContext(Context);
export default GameContext;
