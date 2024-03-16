import PartOfBoard from '../PartOfBoard/PartOfBoard';
import './Board.css';
import { PiArrowArcLeftBold, PiArrowArcRightBold } from 'react-icons/pi';

const Board = () => {
  // <button  className='arrow arrow-left'>
  //   <PiArrowArcLeftBold />
  // </button>
  // <button className='arrow arrow-right'>
  //   <PiArrowArcRightBold />
  // </button>

  const classesOfPart = [
    'part top-left-part',
    'part top-right-part',
    'part bottom-left-part',
    'part bottom-right-part',
  ];

  return (
    <div className='board'>
      {classesOfPart.map((part, i) => {
        return (
          <div key={i} id={i} className={part}>
            <PartOfBoard id={i} />
          </div>
        );
      })}
    </div>
  );
};
export default Board;
