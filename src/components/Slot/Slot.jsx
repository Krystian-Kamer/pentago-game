import { useGameContext } from '../../gameContext';
import './Slot.css';

const Slot = ({ value, onSlotClick }) => {
  const { isPlayer2Next, playerOneColor, playerTwoColor } = useGameContext();

  return (
    <div
      onClick={onSlotClick}
      className={
        value === null
          ? isPlayer2Next
            ? `slot-1 slot-color-${playerOneColor}`
            : `slot-2 slot-color-${playerTwoColor}`
          : value === 'player-one'
          ? `ball color-${playerOneColor}`
          : `ball color-${playerTwoColor}`
      }
    ></div>
  );
};
export default Slot;
