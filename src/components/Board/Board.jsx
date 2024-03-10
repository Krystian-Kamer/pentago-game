import PartOfBoard from '../PartOfBoard/PartOfBoard';
import './Board.css';
import { PiArrowArcLeftBold, PiArrowArcRightBold } from 'react-icons/pi';

const Board = () => {
  return (
    <>
      <button className='arrow arrow-left'>
        <PiArrowArcLeftBold />
      </button>
      <button className='arrow arrow-right'>
        <PiArrowArcRightBold />
      </button>

      <div className='board'>
        {[1, 2, 3, 4].map((partOfBoard, index) => {
          return <PartOfBoard key={index} />;
        })}
      </div>
    </>
  );
};
export default Board;
