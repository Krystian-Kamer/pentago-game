import PartOfBoard from '../PartOfBoard/PartOfBoard';
import './Board.css';
import { PiArrowArcLeftBold, PiArrowArcRightBold } from 'react-icons/pi';

const Board = () => {



  
  return (
    <div className='board'>
      <div className='part top-left-part'>
        <PartOfBoard
        />
        <button className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>

      <div className='part top-right-part'>
        <PartOfBoard
        />
        <button className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>

      <div className='part bottom-left-part'>
        <PartOfBoard
        />
        <button className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>

      <div className='part bottom-right-part'>
        <PartOfBoard
        />
        <button className='arrow arrow-left'>
          <PiArrowArcLeftBold />
        </button>
        <button className='arrow arrow-right'>
          <PiArrowArcRightBold />
        </button>
      </div>
    </div>
  );
};
export default Board;
