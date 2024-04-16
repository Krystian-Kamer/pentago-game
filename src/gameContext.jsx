import { useState, createContext, useContext, useEffect } from 'react';
import { sortSlots, winConditions, initialPlayerOptions } from './data';

const initialSlots = new Array(9).fill(null);
const initialBoard = [initialSlots, initialSlots, initialSlots, initialSlots];

const Context = createContext();

const GameContext = ({ children }) => {
  const [fullBoard, setFullBoard] = useState(() => {
    const localBoard = localStorage.getItem('localBoard');
    return localBoard ? JSON.parse(localBoard) : initialBoard;
  });
  const [prevFullBoard, setPrevFullBoard] = useState(fullBoard);
  const [isPlayer2Next, setIsPlayer2Next] = useState(() => {
    const localIsPlayer2Next = localStorage.getItem('localIsPlayer2Next');
    return localIsPlayer2Next ? JSON.parse(localIsPlayer2Next) : true;
  });
  const [isPartMoving, setIsPartMoving] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playerOptions, setPlayerOptions] = useState(() => {
    const localPlayerOptions = localStorage.getItem('localPlayerOptions');
    return localPlayerOptions
      ? JSON.parse(localPlayerOptions)
      : initialPlayerOptions;
  });
  const [areArrowsShown, setAreArrowsShown] = useState(() => {
    const localAreArrowsShown = localStorage.getItem('localAreArrowsShown');
    return localAreArrowsShown ? JSON.parse(localAreArrowsShown) : false;
  });
  const [whoWon, setWhoWon] = useState('');

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
    localStorage.setItem('localBoard', JSON.stringify(fullBoard));
    checkIfWin(fullBoard);
  }, [fullBoard]);

  useEffect(() => {
    localStorage.setItem('localIsPlayer2Next', JSON.stringify(isPlayer2Next));
    setPrevFullBoard(fullBoard);
  }, [isPlayer2Next]);

  useEffect(() => {
    localStorage.setItem('localAreArrowsShown', JSON.stringify(areArrowsShown));
  }, [areArrowsShown]);

  useEffect(() => {
    localStorage.setItem('localPlayerOptions', JSON.stringify(playerOptions));
    const root = document.documentElement;
    root.style.setProperty(
      '--bgcBodyBottom',
      playerOptions.backgroundColorBottom
    );
    root.style.setProperty('--bgcBodyTop', playerOptions.backgroundColorTop);
  }, [playerOptions]);
  return (
    <Context.Provider
      value={{
        fullBoard,
        setFullBoard,
        isPlayer2Next,
        setIsPlayer2Next,
        isMenuOpen,
        setIsMenuOpen,
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
