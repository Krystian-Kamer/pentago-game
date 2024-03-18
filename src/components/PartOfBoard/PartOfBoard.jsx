import { useEffect, useState } from 'react';
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


//later think about changing this functionality and do not use block but instead fullBoard[id] to work only with one state and not multiple states

  const [block, setBlock] = useState(fullBoard[blockId]);

  useEffect(() => {
    setBlock(fullBoard[blockId]);
  }, [fullBoard]);

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
