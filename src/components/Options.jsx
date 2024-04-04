import { availableColors } from '../data';
import { nanoid } from 'nanoid';
import { useGameContext } from '../gameContext';

const Options = () => {
  const {
    playerOneColor,
    setPlayerOneColor,
    setPlayerTwoColor,
    playerTwoColor,
  } = useGameContext();

  const changeBallColor = (e, player) => {
    if (player === 'p1') setPlayerOneColor(e.target.value);
    if (player === 'p2') setPlayerTwoColor(e.target.value);
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
            return <option key={nanoid()}>{color}</option>;
          })}
        </select>
      </div>

      <div style={{ display: 'flex' }}>
        <p> Player two color:</p>
        <select
          name='color'
          id='color'
          value={playerTwoColor}
          onChange={(e) => changeBallColor(e, 'p2')}
        >
          {availableColors.map((color) => {
            return <option key={nanoid()}>{color}</option>;
          })}
        </select>
      </div>
    </form>
  );
};
export default Options;
