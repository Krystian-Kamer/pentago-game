import './Navbar.css';
import { HiBars3 } from 'react-icons/hi2';

const Header = () => {
  return (
    <div className='navbar-container'>
      <h1>
        pentago <span>game</span>
      </h1>
      <button className='bars-icon'>
        <HiBars3 />
      </button>
      <div className='options'>
        <button className='navbar-icon'>rules</button>
        <button className='navbar-icon'>options</button>
        <button className='navbar-icon'>about</button>
      </div>
    </div>
  );
};
export default Header;
