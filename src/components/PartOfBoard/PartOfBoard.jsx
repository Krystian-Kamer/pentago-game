import { useState } from 'react';
import './PartOfBoard.css';
import { useGameContext } from '../../gameContext';
import '../Ball/Ball.css';

const initialSlotsArray = new Array(9).fill('none');

const PartOfBoard = () => {
  const { blackIsNext, setBlackIsNext } = useGameContext();
  const [part, setPart] = useState(initialSlotsArray);

  const handleClick = (i) => {
    const newPart = [...part];
    if (newPart[i] === 'black' || newPart[i] === 'white') return;
    blackIsNext === true ? (newPart[i] = 'black') : (newPart[i] = 'white');
    setPart(newPart);
    setBlackIsNext(!blackIsNext);
  };

  const rotateLeft = () => {
    const rotatedLeftPart = [
      part[2],
      part[5],
      part[8],
      part[1],
      part[4],
      part[7],
      part[0],
      part[3],
      part[6],
    ];
    return setPart(rotatedLeftPart);
  };

  const rotateRight = () => {
    const rotatedRightPart = [
      part[6],
      part[3],
      part[0],
      part[7],
      part[4],
      part[1],
      part[8],
      part[5],
      part[2],
    ];
    return setPart(rotatedRightPart);
  };

  return (
    <>
      <button onClick={rotateLeft}>left</button>
      <span>________</span>
      <button onClick={rotateRight}> right</button>
      <div className='part-of-board'>
        {initialSlotsArray.map((slot, index) => {
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
    </>
  );
};
export default PartOfBoard;
