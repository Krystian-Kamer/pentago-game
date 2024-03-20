import { useState, createContext, useContext } from 'react';
import { sortSlots, winConditions } from './data';

const initialSlots = new Array(9).fill(null);

const Context = createContext();

const GameContext = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayer2Next, setIsPlayer2Next] = useState(true);
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [areArrowsShown, setAreArrowsShown] = useState(false);
  const [fullBoard, setFullBoard] = useState([
    initialSlots,
    initialSlots,
    initialSlots,
    initialSlots,
  ]);

  const addBall = (i, partId) => {
    const updatedFullBoard = [...fullBoard];
    const updatedPart = [...updatedFullBoard[partId]];
    if (updatedPart[i] !== null) return;
    updatedPart[i] = isPlayer2Next ? 'player-one' : 'player-two';
    updatedFullBoard[partId] = updatedPart;
    setFullBoard(updatedFullBoard);
    setIsPlayer2Next(!isPlayer2Next);
    setAreArrowsShown(true);
    checkIfWin(updatedFullBoard);
  };

  const rotateLeft = (i) => {
    // document.querySelector('.part-of-board').classList.add('top-left-part-2');
    const rotatedLeftPart = [
      fullBoard[i][2],
      fullBoard[i][5],
      fullBoard[i][8],
      fullBoard[i][1],
      fullBoard[i][4],
      fullBoard[i][7],
      fullBoard[i][0],
      fullBoard[i][3],
      fullBoard[i][6],
    ];
    const updatedFullBoard = [...fullBoard];
    updatedFullBoard[i] = rotatedLeftPart;
    setFullBoard(updatedFullBoard);
    setAreArrowsShown(false);
    checkIfWin(updatedFullBoard);
  };

  const rotateRight = (i) => {
    const rotatedRightPart = [
      fullBoard[i][6],
      fullBoard[i][3],
      fullBoard[i][0],
      fullBoard[i][7],
      fullBoard[i][4],
      fullBoard[i][1],
      fullBoard[i][8],
      fullBoard[i][5],
      fullBoard[i][2],
    ];
    const updatedFullBoard = [...fullBoard];
    updatedFullBoard[i] = rotatedRightPart;
    setFullBoard(updatedFullBoard);
    setAreArrowsShown(false);
    checkIfWin(updatedFullBoard);
  };

  const checkIfWin = (fullBoard) => {
    const sortedBoard = sortSlots(fullBoard);
    for (const condition of winConditions) {
      const [p1, p2, p3, p4, p5] = condition.map((pos) => sortedBoard[pos]);
      if ([p1, p2, p3, p4, p5].every((player) => player === 'player-one')) {
        console.log('Player One wins!');
        setScore((prevScore) => ({
          ...prevScore,
          player1: prevScore.player1 + 1,
        }));
      } else if (
        [p1, p2, p3, p4, p5].every((player) => player === 'player-two')
      ) {
        console.log('Player Two wins!');
        setScore((prevScore) => ({
          ...prevScore,
          player2: prevScore.player2 + 1,
        }));
      }
    }
  };

  const resetBoard = () => {
    setFullBoard([initialSlots, initialSlots, initialSlots, initialSlots]);
    setScore({ player1: 0, player2: 0 });
    if (isModalOpen) setIsModalOpen(false);
  };

  return (
    <Context.Provider
      value={{
        isPlayer2Next,
        setIsPlayer2Next,
        setFullBoard,
        fullBoard,
        initialSlots,
        score,
        isModalOpen,
        setIsModalOpen,
        rotateLeft,
        rotateRight,
        addBall,
        areArrowsShown,
        resetBoard,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGameContext = () => useContext(Context);
export default GameContext;
