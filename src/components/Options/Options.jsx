import { availableColors } from '../../data';
import { nanoid } from 'nanoid';
import { useGameContext } from '../../gameContext';
import './Options.css';

const Options = () => {
  const { playerOptions, setPlayerOptions } = useGameContext();
  const { playerOneColor, playerTwoColor } = playerOptions;

  const playerOneColors = availableColors.filter(
    (color) => color !== playerTwoColor
  );
  const playerTwoColors = availableColors.filter(
    (color) => color !== playerOneColor
  );

  const changeBallColor = (e, player) => {
    if (player === 'p1')
      setPlayerOptions((prevOptions) => ({
        ...prevOptions,
        playerOneColor: e.target.value,
      }));

    if (player === 'p2')
      setPlayerOptions((prevOptions) => ({
        ...prevOptions,
        playerTwoColor: e.target.value,
      }));
  };

  return (
    <form>
      <div>
        <p> Player one color:</p>
        <select
          name='color'
          id='color'
          value={playerOneColor}
          onChange={(e) => changeBallColor(e, 'p1')}
        >
          {playerOneColors.map((color) => {
            return <option key={nanoid()}>{color}</option>;
          })}
        </select>
      </div>
      <div>
        <p> Player two color:</p>
        <select
          name='color'
          id='color'
          value={playerTwoColor}
          onChange={(e) => changeBallColor(e, 'p2')}
        >
          {playerTwoColors.map((color) => {
            return <option key={nanoid()}>{color}</option>;
          })}
        </select>
      </div>
      <label htmlFor=''>
        Player one name:
        <input type='text' />
      </label>
      <label htmlFor=''>
        Player two name:
        <input type='text' />
      </label>
      <p>For random background color</p> <button>Click</button>
    </form>
  );
};
export default Options;
