import { useState } from 'react';
import { availableColors } from '../data';
import { nanoid } from 'nanoid';

const Options = () => {
  const [playerOneColor, setPlayerOneColor] = useState('black');
  const [playerTwoColor, setPlayerTwoColor] = useState('white');

  const changeBallColor = (e, player) => {
    if (player === 'p1') setPlayerOneColor(e.target.value);
    if (player === 'p2') setPlayerTwoColor(e.target.value);
    // here I must figure out how to update color of ball using bgc inside availableColors and bgc from ball
  };

  return (
    <form>
      <p>Who goes first?</p>
      <div style={{ display: 'flex' }}>
        <p> Player one color:</p>
        <select
          name='color'
          id='color'
          value={playerOneColor}
          onChange={(e) => changeBallColor(e, 'p1')}
        >
          {availableColors.map((color) => {
            return <option key={nanoid()}>{color.name}</option>;
          })}
        </select>
      </div>

      <div style={{ display: 'flex' }}>
        <p> Player one color:</p>
        <select
          name='color'
          id='color'
          value={playerTwoColor}
          onChange={(e) => changeBallColor(e, 'p2')}
        >
          {availableColors.map((color) => {
            return <option key={nanoid()}>{color.name}</option>;
          })}
        </select>
      </div>
    </form>
  );
};
export default Options;
