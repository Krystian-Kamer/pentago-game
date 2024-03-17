import { useState } from 'react';
import { useGameContext } from '../../gameContext';
import './PartOfBoard.css';
import Slot from '../Slot/Slot';

const PartOfBoard = ({ id: blockId }) => {
  const {
    isPlayer2Next,
    setIsPlayer2Next,
    setFullBoard,
    fullBoard,
    initialSlots,
  } = useGameContext();

  const [block, setBlock] = useState(initialSlots);

  const handleClick = (i) => {
    const newBlock = [...block];
    if (newBlock[i] !== null) return;
    isPlayer2Next === true
      ? (newBlock[i] = 'player-one')
      : (newBlock[i] = 'player-two');
    setIsPlayer2Next(!isPlayer2Next);
    setBlock(newBlock);

    const updatedFullBoard = [...fullBoard];
    updatedFullBoard[blockId] = newBlock;
    setFullBoard(updatedFullBoard);
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
  //   return setBlock(rotatedLeftPart);
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
  //   return setBlock(rotatedRightPart);
  // };

  return (
    <>
      <div className='part-of-board'>
        {initialSlots.map((el, i) => {
          return (
            <Slot onSlotClick={() => handleClick(i)} value={block[i]} key={i} />
          );
        })}
      </div>
    </>
  );
};
export default PartOfBoard;
