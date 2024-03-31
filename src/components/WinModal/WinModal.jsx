import './WinModal.css';
import { useGameContext } from '../../gameContext';

const WinModal = () => {
  const { whoWon, startNewGame } = useGameContext();

  return (
    <>
      {whoWon && (
        <div className='win-modal'>
          <p>{whoWon}</p>
          <button onClick={startNewGame}>new game</button>
        </div>
      )}
    </>
  );
};
export default WinModal;
