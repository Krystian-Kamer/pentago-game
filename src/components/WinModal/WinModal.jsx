import './WinModal.css';
import { useGameContext } from '../../gameContext';

const WinModal = () => {
  const { whoWon } = useGameContext();

  return (
    <>
      {whoWon && (
        <div className='win-modal'>
          <p>{whoWon}</p>
          <button>new game</button>
        </div>
      )}
    </>
  );
};
export default WinModal;
