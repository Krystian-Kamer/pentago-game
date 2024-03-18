import PartOfBoard from '../PartOfBoard/PartOfBoard';
import './Board.css';
import { PiArrowArcLeftBold, PiArrowArcRightBold } from 'react-icons/pi';
import { useGameContext } from '../../gameContext';

const Board = () => {
  const { setFullBoard, fullBoard } = useGameContext();

  const rotateLeft = (i) => {
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
    return setFullBoard(updatedFullBoard);
  };

  const rotateRight = (i) => {
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
    return setFullBoard(updatedFullBoard);
  };

  const fourClassesOfPart = [
    'part top-left-part',
    'part top-right-part',
    'part bottom-left-part',
    'part bottom-right-part',
  ];

  return (
    <div className='board'>
      {fourClassesOfPart.map((part, i) => {
        return (
          <div key={i} id={i} className={part}>
            <PartOfBoard id={i} />
            <button onClick={() => rotateLeft(i)} className='arrow arrow-left'>
              <PiArrowArcLeftBold />
            </button>
            <button
              onClick={() => rotateRight(i)}
              className='arrow arrow-right'
            >
              <PiArrowArcRightBold />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Board;
