import { useGameContext } from '../../gameContext';
import './PartOfBoard.css';
import Slot from '../Slot/Slot';

const PartOfBoard = ({ id: partId }) => {
  const { fullBoard, initialSlots, addBall, areArrowsShown } = useGameContext();

  return (
    <>
      <div className='part-of-board'>
        {initialSlots.map((el, i) => {
          return (
            <Slot
              onSlotClick={
                areArrowsShown ? undefined : () => addBall(i, partId)
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
