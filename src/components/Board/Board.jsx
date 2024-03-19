import PartOfBoard from '../PartOfBoard/PartOfBoard';
import './Board.css';
import { PiArrowArcLeftBold, PiArrowArcRightBold } from 'react-icons/pi';
import { useGameContext } from '../../gameContext';

const Board = () => {
  const { rotateLeft, rotateRight, areArrowsShown } = useGameContext();

  const parts = [
    'part top-left-part',
    'part top-right-part',
    'part bottom-left-part',
    'part bottom-right-part',
  ];

  return (
    <div className='board'>
      {parts.map((part, i) => {
        return (
          <div key={i} id={i} className={part}>
            <PartOfBoard id={i} />
            {areArrowsShown && (
              <>
                <button
                  onClick={() => rotateLeft(i)}
                  className='arrow arrow-left'
                >
                  <PiArrowArcLeftBold />
                </button>
                <button
                  onClick={() => rotateRight(i)}
                  className='arrow arrow-right'
                >
                  <PiArrowArcRightBold />
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Board;
