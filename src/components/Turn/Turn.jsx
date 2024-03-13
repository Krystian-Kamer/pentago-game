import './Turn.css';
import { useGameContext } from '../../gameContext';

const Turn = () => {
  const { isPlayer2Next } = useGameContext();

  return (
    <div className='turn'>
      Player
      <div className='ball-container'>
        <div
          className={
            isPlayer2Next ? 'ball player-one-color' : 'ball player-two-color'
          }
        ></div>

        <div className='shadow'></div>
      </div>
      Goes
    </div>
  );
};
export default Turn;
