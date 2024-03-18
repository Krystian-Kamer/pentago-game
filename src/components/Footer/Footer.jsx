import './Footer.css';
import { FaUndoAlt } from 'react-icons/fa';
import { useGameContext } from '../../gameContext';

const Footer = () => {
  const { setFullBoard, initialSlots, score } = useGameContext();

  const resetBoard = () => {
    setFullBoard([initialSlots, initialSlots, initialSlots, initialSlots]);
    //need also to empty those slots
  };

  return (
    <div className='footer'>
      <button>
        <FaUndoAlt />
      </button>
      <div className='score'>
        {score.player1}:{score.player2}
      </div>
      <button onClick={resetBoard}>reset</button>
    </div>
  );
};
export default Footer;
