import './Footer.css';
import { FaUndoAlt } from 'react-icons/fa';
import { useGameContext } from '../../gameContext';

const Footer = () => {
  const { score, resetBoard } = useGameContext();

  return (
    <div className='footer'>
      <button>
        <FaUndoAlt className='undo-btn' />
      </button>
      <div className='score'>
        <span className='player-score player1-score'>{score.player1}</span>:
        <span className='player-score player2-score'>{score.player2}</span>
      </div>
      <button onClick={resetBoard}>reset</button>
    </div>
  );
};
export default Footer;
