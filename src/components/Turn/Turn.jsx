import Ball from '../Ball/Ball';
import './Turn.css';
const Turn = () => {
  return (
    <div className='turn'>
      Player
      <div className='ball-container'>
        <Ball />
        <div className='shadow'></div>
      </div>
      Goes
    </div>
  );
};
export default Turn;
