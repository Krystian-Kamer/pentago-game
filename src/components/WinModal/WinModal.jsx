import './WinModal.css';
import { useGameContext } from '../../gameContext';

const WinModal = () => {
  const {
    whoWon,
    setFullBoard,
    initialSlots,
    isMenuOpen,
    setIsMenuOpen,
    areArrowsShown,
    setAreArrowsShown,
    setWhoWon,
    isPlayer2Next,
    setIsPlayer2Next,
  } = useGameContext();

  const startNewGame = () => {
    setFullBoard([initialSlots, initialSlots, initialSlots, initialSlots]);
    if (isMenuOpen) setIsMenuOpen(false);
    if (areArrowsShown) setAreArrowsShown(false);
    setIsPlayer2Next(!isPlayer2Next);
    setWhoWon('');
  };

  return (
    <>
      {whoWon && (
        <div className='win-modal'>
          <p>{whoWon} won</p>
          <button onClick={startNewGame}>new game</button>
        </div>
      )}
    </>
  );
};
export default WinModal;
