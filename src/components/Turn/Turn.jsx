import './Turn.css';
import { useGameContext } from '../../gameContext';

const Turn = () => {
  const { blackIsNext } = useGameContext();
  return (
    <div className='turn'>
      Player
      <div className='ball-container'>
        <div
          className={blackIsNext ? 'ball black-ball' : 'ball white-ball'}
        ></div>
        <div className='shadow'></div>
      </div>
      Goes
    </div>
  );
};
export default Turn;
