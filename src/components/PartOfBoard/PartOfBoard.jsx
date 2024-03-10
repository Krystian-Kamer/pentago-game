import { useState } from 'react';
import './PartOfBoard.css';

const slotsArray = new Array(9).fill('null');

const PartOfBoard = ({blackIsNext, setBlackIsNext}) => {
  const [part, setPart] = useState(slotsArray);
  const handleClick = (i) => {
    const newPart = [...part];
    if (newPart[i] === 'black' || newPart[i] === 'white') return;
    blackIsNext === true ? (newPart[i] = 'black') : (newPart[i] = 'white');
    setPart(newPart);
    setBlackIsNext(!blackIsNext);
  };

  return (
    <div className='part-of-board'>
      {slotsArray.map((slot, index) => {
        return (
          <div
            onClick={() => handleClick(index)}
            className={
              part[index] === 'black'
                ? 'ball black-ball'
                : part[index] === 'white'
                ? 'ball white-ball'
                : 'slot'
            }
            id={index}
            key={index}
            value={part[index]}
          />
        );
      })}
    </div>
  );
};
export default PartOfBoard;
