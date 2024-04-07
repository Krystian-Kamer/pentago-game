import './Turn.css';
import { useGameContext } from '../../gameContext';

const Turn = () => {
  const { isPlayer2Next, playerOptions } = useGameContext();
  const { playerOneColor, playerTwoColor, playerOneName, playerTwoName } =
    playerOptions;

  return (
    <div className='turn'>
      {isPlayer2Next ? playerOneName : playerTwoName}
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
