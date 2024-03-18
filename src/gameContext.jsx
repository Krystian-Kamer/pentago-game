import { useState, createContext, useContext } from 'react';
import { sortSlots, winConditions } from './data';

const Context = createContext();

const GameContext = ({ children }) => {
  const initialSlots = new Array(9).fill(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayer2Next, setIsPlayer2Next] = useState(true);
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [fullBoard, setFullBoard] = useState([
    initialSlots,
    initialSlots,
    initialSlots,
    initialSlots,
  ]);
  const checkIfWin = (fullBoard) => {
    const sortedBoard = sortSlots(fullBoard);

    for (const condition of winConditions) {
      const [p1, p2, p3, p4, p5] = condition.map((pos) => sortedBoard[pos]);

      if ([p1, p2, p3, p4, p5].every((player) => player === 'player-one')) {
        console.log('Player One wins!');
      } else if (
        [p1, p2, p3, p4, p5].every((player) => player === 'player-two')
      ) {
        console.log('Player Two wins!');
      }
    }
  };

  checkIfWin(fullBoard);

  return (
    <Context.Provider
      value={{
        isPlayer2Next,
        setIsPlayer2Next,
        setFullBoard,
        fullBoard,
        initialSlots,
        score,
        setScore,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGameContext = () => useContext(Context);
export default GameContext;
