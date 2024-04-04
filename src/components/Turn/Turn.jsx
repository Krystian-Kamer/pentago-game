import './Turn.css';
import { useGameContext } from '../../gameContext';

const Turn = () => {
  const { isPlayer2Next, playerOneColor, playerTwoColor } = useGameContext();

  return (
    <div className='turn'>
      Player
      <div className='ball-container'>
        <div
          className={
            isPlayer2Next
              ? `ball color-${playerOneColor}`
              : `ball color-${playerTwoColor}`
          }
        ></div>

        <div className='shadow'></div>
      </div>
      Goes
    </div>
  );
};
export default Turn;
