import { useState, createContext, useContext } from 'react';
import { sortSlots } from './data';

const Context = createContext();

const GameContext = ({ children }) => {
  const initialSlots = new Array(9).fill(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isPlayer2Next, setIsPlayer2Next] = useState(true);
  const [score, setScore] = useState([{ player1: 0 }, { player2: 0 }]);
  const [fullBoard, setFullBoard] = useState([
    initialSlots,
    initialSlots,
    initialSlots,
    initialSlots,
  ]);

  const checkIfWin = (fullBoard) => {
    const sortedSlots = sortSlots(fullBoard);
    const players = ['player-one', 'player-two'];

    for (let player of players) {
      // Rows
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j <= 1; j++) {
          let count = 0;
          for (let k = j; k < j + 5; k++) {
            if (
              sortedSlots[i * 6 + k] &&
              sortedSlots[i * 6 + k][Object.keys(sortedSlots[i * 6 + k])[0]] ===
                player
            ) {
              count++;
            }
          }
          if (count === 5) {
            console.log(
              'Player',
              player === 'player-one' ? 'one' : 'two',
              'wins'
            );
            return;
          }
        }
      }
      // Columns
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j <= 1; j++) {
          let count = 0;
          for (let k = j; k < j + 5; k++) {
            if (
              sortedSlots[k * 6 + i] &&
              sortedSlots[k * 6 + i][Object.keys(sortedSlots[k * 6 + i])[0]] ===
                player
            ) {
              count++;
            }
          }
          if (count === 5) {
            console.log(
              'Player',
              player === 'player-one' ? 'one' : 'two',
              'wins'
            );
            return;
          }
        }
      }
      // Diagonals
      for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
          let count = 0;
          for (let k = 0; k < 5; k++) {
            if (
              sortedSlots[(i + k) * 6 + j + k] &&
              sortedSlots[(i + k) * 6 + j + k][
                Object.keys(sortedSlots[(i + k) * 6 + j + k])[0]
              ] === player
            ) {
              count++;
            }
          }
          if (count === 5) {
            console.log(
              'Player',
              player === 'player-one' ? 'one' : 'two',
              'wins'
            );
            return;
          }
        }
      }
      // Reverse diagonals
      for (let i = 0; i <= 1; i++) {
        for (let j = 4; j < 6; j++) {
          let count = 0;
          for (let k = 0; k < 5; k++) {
            if (
              sortedSlots[(i + k) * 6 + j - k] &&
              sortedSlots[(i + k) * 6 + j - k][
                Object.keys(sortedSlots[(i + k) * 6 + j - k])[0]
              ] === player
            ) {
              count++;
            }
          }
          if (count === 5) {
            console.log(
              'Player',
              player === 'player-one' ? 'one' : 'two',
              'wins'
            );
            return;
          }
        }
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
