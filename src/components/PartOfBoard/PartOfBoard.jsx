import { useState } from 'react';
import { useGameContext } from '../../gameContext';
import './PartOfBoard.css';
import '../Ball/Ball.css';
import '../Slot/Slot.css';

const initialSlotsArray = new Array(9).fill(null);

const PartOfBoard = () => {
  const { isPlayer2Next, setIsPlayer2Next } = useGameContext();
  const [partOfBoard, setPartOfBoard] = useState(initialSlotsArray);

  const handleClick = (i) => {
    const newPartOfBoard = [...partOfBoard];
    if (newPartOfBoard[i] !== null) return
    isPlayer2Next === true
      ? (newPartOfBoard[i] = 'player-two-color')
      : (newPartOfBoard[i] = 'player-one-color');
    setIsPlayer2Next(!isPlayer2Next);
    setPartOfBoard(newPartOfBoard);

    // const upLeft = document.querySelector('.top-left-part');
    // const child = upLeft.querySelector('.part-of-board');
    // const divos = [...child.querySelectorAll('div')];
    // const newArr = divos.map((div) => div.className);
    // console.log(newArr);
  };

  // const rotateLeft = () => {
  //   const rotatedLeftPart = [
  //     part[2],
  //     part[5],
  //     part[8],
  //     part[1],
  //     part[4],
  //     part[7],
  //     part[0],
  //     part[3],
  //     part[6],
  //   ];
  //   return setPart(rotatedLeftPart);
  // };
  // const rotateRight = () => {
  //   const rotatedRightPart = [
  //     part[6],
  //     part[3],
  //     part[0],
  //     part[7],
  //     part[4],
  //     part[1],
  //     part[8],
  //     part[5],
  //     part[2],
  //   ];
  //   return setPart(rotatedRightPart);
  // };

  return (
    <>
      {/* <button onClick={rotateLeft}>left</button>
      <button onClick={rotateRight}> right</button> */}
      <div className='part-of-board'>
        {initialSlotsArray.map((el, i) => {
          return (
            <div
              onClick={() => handleClick(i)}
              className={
                partOfBoard[i] === 'player-two-color'
                  ? 'ball player-two-color'
                  : partOfBoard[i] === 'player-one-color'
                  ? 'ball player-one-color'
                  : 'slot'
              }
              id={i}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};
export default PartOfBoard;
