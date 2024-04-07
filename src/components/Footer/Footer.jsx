import './Footer.css';
import { FaUndoAlt } from 'react-icons/fa';
import { useGameContext } from '../../gameContext';

const Footer = () => {
  const { playerOptions, resetBoard } = useGameContext();
  const { playerOneScore, playerTwoScore } = playerOptions;

  return (
    <div className='footer'>
      <button>
        <FaUndoAlt className='undo-btn' />
      </button>
      <div className='score'>
        <span className='player-score player1-score'>{playerOneScore}</span>:
        <span className='player-score player2-score'>{playerTwoScore}</span>
      </div>
      <button className='reset-btn' onClick={resetBoard}>
        reset
      </button>
    </div>
  );
};
export default Footer;
