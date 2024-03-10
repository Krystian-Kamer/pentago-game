import './Navbar.css';
import { icons } from '../../data';
console.log(icons);
const Header = () => {
  return (
    <div className='navbar-container'>
      <h1>pentago game</h1>
      <div className='options'>
        <button>new game</button>
        <button>rules</button>
        <button>options</button>
        <button>about</button>
      </div>
    </div>
  );
};
export default Header;
