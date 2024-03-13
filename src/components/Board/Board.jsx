import PartOfBoard from '../PartOfBoard/PartOfBoard';
import './Board.css';
import { PiArrowArcLeftBold, PiArrowArcRightBold } from 'react-icons/pi';

const Board = () => {
  const rotate = () => {};

  return (
    <div className='board'>
      <div className='part top-left-part'>
        <PartOfBoard />
        <button onClick={rotate} className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button onClick={rotate} className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>

      <div className='part top-right-part'>
        <PartOfBoard />
        <button onClick={rotate} className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button onClick={rotate} className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>

      <div className='part bottom-left-part'>
        <PartOfBoard />
        <button onClick={rotate} className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button onClick={rotate} className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>

      <div className='part bottom-right-part'>
        <PartOfBoard />
        <button onClick={rotate} className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button onClick={rotate} className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>
    </div>
  );
};
export default Board;
