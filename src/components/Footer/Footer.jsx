import { useState } from 'react';
import './Footer.css';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Footer = () => {
  const [details, setDetails] = useState('');

  return (
    <div className='footer'>
      <button  className='arrow-up'>
        <MdKeyboardArrowUp />
      </button>
    </div>
  );
};
export default Footer;
