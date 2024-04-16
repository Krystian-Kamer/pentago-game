import { useEffect } from 'react';
import { availableColors } from '../../data';
import { useGameContext } from '../../gameContext';
import './Options.css';

const Options = () => {
  const { playerOptions, setPlayerOptions } = useGameContext();
  const {
    playerOneColor,
    playerTwoColor,
    playerOneName,
    playerTwoName,
    backgroundColorBottom,
    backgroundColorTop,
  } = playerOptions;

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

  const changePlayerName = (e, player) => {
    if (player === 'p1') {
      setPlayerOptions((prevOptions) => ({
        ...prevOptions,
        playerOneName: e.target.value,
      }));
    }

    if (player === 'p2') {
      setPlayerOptions((prevOptions) => ({
        ...prevOptions,
        playerTwoName: e.target.value,
      }));
    }
  };

  const changeBgcColor = (e, style) => {
    e.preventDefault();
    const randomColor = () => Math.round(Math.random() * 255);
    if (style === 'random') {
      setPlayerOptions((prevOptions) => ({
        ...prevOptions,
        backgroundColorBottom: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
        backgroundColorTop: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
      }));
    }
    if (style === 'default') {
      setPlayerOptions((prevOptions) => ({
        ...prevOptions,
        backgroundColorBottom: '#f55e7a',
        backgroundColorTop: '#fe9a8b',
      }));
    }
  };

  return (
    <form>
      <div className='player-colors'>
        <div className='player-color'>
          <p> Player one color:</p>
          <select
            name='color-one'
            id='color-one'
            value={playerOneColor}
            onChange={(e) => changeBallColor(e, 'p1')}
          >
            {playerOneColors.map((color) => {
              return <option key={color}>{color}</option>;
            })}
          </select>
        </div>
        <div className='player-color'>
          <p> Player two color:</p>
          <select
            name='color-two'
            id='color-two'
            value={playerTwoColor}
            onChange={(e) => changeBallColor(e, 'p2')}
          >
            {playerTwoColors.map((color) => {
              return <option key={color}>{color}</option>;
            })}
          </select>
        </div>
      </div>
      <div className='player-names'>
        <label htmlFor='player-one-name'>
          Player one name:
          <input
            type='text'
            id='player-one-name'
            placeholder='Player 1'
            value={playerOneName}
            onChange={(e) => changePlayerName(e, 'p1')}
          />
        </label>
        <label htmlFor='player-two-name'>
          Player two name:
          <input
            type='text'
            id='player-two-name'
            placeholder='Player 2'
            value={playerTwoName}
            onChange={(e) => changePlayerName(e, 'p2')}
          />
        </label>
      </div>
      <div className='bgc-color'>
        <div className='bgc-style random'>
          <p>For random background color:</p>
          <button type='button' onClick={(e) => changeBgcColor(e, 'random')}>
            click
          </button>
        </div>
        <div className='bgc-style default'>
          <p>Default color:</p>
          <button type='button' onClick={(e) => changeBgcColor(e, 'default')}>
            click
          </button>
        </div>
      </div>
    </form>
  );
};
export default Options;
