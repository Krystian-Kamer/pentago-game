import './Footer.css';
import { FaUndoAlt } from 'react-icons/fa';
import { useGameContext } from '../../gameContext';
import { initialPlayerOptions } from '../../data';

const Footer = () => {
  const {
    playerOptions,
    setAreArrowsShown,
    setFullBoard,
    initialSlots,
    isMenuOpen,
    setIsMenuOpen,
    areArrowsShown,
    whoWon,
    setWhoWon,
    setPlayerOptions,
    isPlayer2Next,
    setIsPlayer2Next,
    prevFullBoard,
    isPartMoving,
  } = useGameContext();
  
  const { playerOneScore, playerTwoScore } = playerOptions;

  const resetBoard = () => {
    setFullBoard([initialSlots, initialSlots, initialSlots, initialSlots]);
    if (isMenuOpen) setIsMenuOpen(false);
    if (areArrowsShown) setAreArrowsShown(false);
    if (whoWon) setWhoWon('');
    if (!isPlayer2Next) setIsPlayer2Next(true);
    setPlayerOptions(initialPlayerOptions);
  };

  const undo = () => {
    setAreArrowsShown(false);
    setFullBoard(prevFullBoard);
  };

  return (
    <div className='footer'>
      <button onClick={isPartMoving ? null : undo} title='Undo'>
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
