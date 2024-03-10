import './PartOfBoard.css';
import Ball from '../Ball/Ball';

const array = [1,2,3,4,5,6,7,8,9]

const PartOfBoard = () => {
  return (
    <div className='part-of-board'>
      {array.map((ball) => {
        return <Ball key={ball.id} />;
      })}
    </div>
  );
};
export default PartOfBoard;
