import { useState, createContext, useContext, useEffect } from 'react';
import { sortSlots, winConditions } from './data';

const initialSlots = new Array(9).fill(null);

const Context = createContext();

const GameContext = ({ children }) => {
  const [fullBoard, setFullBoard] = useState([
    initialSlots,
    initialSlots,
    initialSlots,
    initialSlots,
  ]);
  const [prevFullBoard, setPrevFullBoard] = useState(fullBoard);
  const [isPlayer2Next, setIsPlayer2Next] = useState(true);
  const [isPartMoving, setIsPartMoving] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playerOptions, setPlayerOptions] = useState({
    playerOneScore: 0,
    playerTwoScore: 0,
    playerOneName: 'Player 1',
    playerTwoName: 'Player 2',
    playerOneColor: 'black',
    playerTwoColor: 'white',
    backgroundColorBottom: '#f55e7a',
    backgroundColorTop: '#fe9a8b',
  });
  const [areArrowsShown, setAreArrowsShown] = useState(false);
  const [whoWon, setWhoWon] = useState('');

  const addBall = (i, partId) => {
    const updatedFullBoard = [...fullBoard];
    const updatedPart = [...updatedFullBoard[partId]];
    if (updatedPart[i] !== null) return;
    updatedPart[i] = isPlayer2Next ? 'player-one' : 'player-two';
    updatedFullBoard[partId] = updatedPart;
    setFullBoard(updatedFullBoard);
    setPrevFullBoard(fullBoard);
    setAreArrowsShown(true);
  };

  const checkIfWin = (fullBoard) => {
    const sortedBoard = sortSlots(fullBoard);
    for (const condition of winConditions) {
      const [p1, p2, p3, p4, p5] = condition.map((pos) => {
        return sortedBoard[pos];
      });
      if ([p1, p2, p3, p4, p5].every((player) => player === 'player-one')) {
        setWhoWon(playerOptions.playerOneName);
        setAreArrowsShown(false);
        setPlayerOptions((prevOptions) => ({
          ...prevOptions,
          playerOneScore: prevOptions.playerOneScore + 1,
        }));
      } else if (
        [p1, p2, p3, p4, p5].every((player) => player === 'player-two')
      ) {
        setWhoWon(playerOptions.playerTwoName);
        setAreArrowsShown(false);
        setPlayerOptions((prevOptions) => ({
          ...prevOptions,
          playerTwoScore: prevOptions.playerTwoScore + 1,
        }));
      }
    }
  };

  useEffect(() => {
    checkIfWin(fullBoard);
  }, [fullBoard]);

  useEffect(() => {
    setPrevFullBoard(fullBoard);
  }, [isPlayer2Next]);

  return (
    <Context.Provider
      value={{
        fullBoard,
        setFullBoard,
        isPlayer2Next,
        setIsPlayer2Next,
        isMenuOpen,
        setIsMenuOpen,
        addBall,
        whoWon,
        setWhoWon,
        playerOptions,
        setPlayerOptions,
        areArrowsShown,
        setAreArrowsShown,
        isPartMoving,
        setIsPartMoving,
        prevFullBoard,
        initialSlots,
        setPrevFullBoard,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGameContext = () => useContext(Context);
export default GameContext;
