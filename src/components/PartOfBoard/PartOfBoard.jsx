import { useGameContext } from '../../gameContext';
import './PartOfBoard.css';
import Slot from '../Slot/Slot';

const PartOfBoard = ({ id: partId }) => {
  const {
    fullBoard,
    initialSlots,
    areArrowsShown,
    whoWon,
    isPartMoving,
    isPlayer2Next,
    setFullBoard,
    setPrevFullBoard,
    setAreArrowsShown,
  } = useGameContext();

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

  return (
    <>
      <div className='part-of-board'>
        {initialSlots.map((el, i) => {
          return (
            <Slot
              onSlotClick={
                areArrowsShown || whoWon || isPartMoving
                  ? undefined
                  : () => addBall(i, partId)
              }
              value={fullBoard[partId][i]}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};
export default PartOfBoard;
