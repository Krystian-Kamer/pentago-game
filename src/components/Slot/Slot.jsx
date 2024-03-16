import { useGameContext } from '../../gameContext';
import './Slot.css';

const Slot = ({ value, onSlotClick }) => {
  const { isPlayer2Next } = useGameContext();

  return (
    <div
      onClick={onSlotClick}
      className={
        value === null
          ? isPlayer2Next
            ? 'slot-1'
            : 'slot-2'
          : value === 'player-one'
          ? 'ball player-one'
          : 'ball player-two'
      }
    ></div>
  );
};
export default Slot;
