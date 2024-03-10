import Ball from '../Ball/Ball';
import './Turn.css';
const Turn = ({ blackIsNext }) => {
  return (
    <div className='turn'>
      Player
      <div className='ball-container'>
        <div className={blackIsNext ? 'ball black-ball' : 'ball white-ball'}></div>
        <div className='shadow'></div>
      </div>
      Goes
    </div>
  );
};
export default Turn;
