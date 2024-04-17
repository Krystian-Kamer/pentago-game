import PartOfBoard from '../PartOfBoard/PartOfBoard';
import './Board.css';
import { PiArrowArcLeftBold, PiArrowArcRightBold } from 'react-icons/pi';
import { useGameContext } from '../../gameContext';

const Board = () => {
  const {
    areArrowsShown,
    setIsPlayer2Next,
    isPlayer2Next,
    fullBoard,
    setFullBoard,
    setAreArrowsShown,
    setIsPartMoving,
  } = useGameContext();

  const parts = [
    'part top-left-part',
    'part top-right-part',
    'part bottom-left-part',
    'part bottom-right-part',
  ];

  const rotateLeft = (i) => {
    setIsPartMoving(true);
    const parts = document.querySelectorAll('.part-of-board');
    parts[i].classList.add('spin-to-left');
    setTimeout(() => {
      parts[i].classList.remove('spin-to-left');
      setIsPlayer2Next(!isPlayer2Next);
      setIsPartMoving(false);
    }, 2000);

    const rotatedLeftPart = [
      fullBoard[i][2],
      fullBoard[i][5],
      fullBoard[i][8],
      fullBoard[i][1],
      fullBoard[i][4],
      fullBoard[i][7],
      fullBoard[i][0],
      fullBoard[i][3],
      fullBoard[i][6],
    ];
    const updatedFullBoard = [...fullBoard];
    updatedFullBoard[i] = rotatedLeftPart;
    setFullBoard(updatedFullBoard);
    setAreArrowsShown(false);
  };

  const rotateRight = (i) => {
    setIsPartMoving(true);
    const parts = document.querySelectorAll('.part-of-board');
    parts[i].classList.add('spin-to-right');
    setTimeout(() => {
      parts[i].classList.remove('spin-to-right');
      setIsPlayer2Next(!isPlayer2Next);
      setIsPartMoving(false);
    }, 2000);

    const rotatedRightPart = [
      fullBoard[i][6],
      fullBoard[i][3],
      fullBoard[i][0],
      fullBoard[i][7],
      fullBoard[i][4],
      fullBoard[i][1],
      fullBoard[i][8],
      fullBoard[i][5],
      fullBoard[i][2],
    ];
    const updatedFullBoard = [...fullBoard];
    updatedFullBoard[i] = rotatedRightPart;
    setAreArrowsShown(false);
    setFullBoard(updatedFullBoard);
  };

  return (
    <div className='board-wrapper'>
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
    </div>
  );
};
export default Board;
