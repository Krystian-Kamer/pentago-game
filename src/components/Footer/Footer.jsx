import { useState } from 'react';
import './Footer.css';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { FaUndo } from 'react-icons/fa';

const Footer = () => {
  const [details, setDetails] = useState(false);

  const showDetails = () => {
    setDetails(!details);
  };
  return (
    <div className='footer'>
      {details && (
        <div className='details-container'>
          <button className='new-game'>new game</button>
          <button className='restart-game'>restart game</button>
        </div>
      )}

      <button className='undo'>
        <FaUndo />
      </button>
      <button onClick={showDetails} className='arrow-up'>
        {details ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </button>
    </div>
  );
};
export default Footer;
