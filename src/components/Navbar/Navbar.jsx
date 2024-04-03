import './Navbar.css';
import { HiBars3 } from 'react-icons/hi2';
import { useGameContext } from '../../gameContext';
import Options from '../Options';
import Rules from '../Rules';
import About from '../About';
import { nanoid } from 'nanoid';

const Header = () => {
  const { setIsMenuOpen, detail, setDetail } = useGameContext();

  const detailComponents = [
    { name: 'options', component: <Options /> },
    { name: 'rules', component: <Rules /> },
    { name: 'about', component: <About /> },
  ];

  const handleMouseEnter = (detail) => {
    setDetail((prevDetail) => (prevDetail === detail ? '' : detail));
  };

  return (
    <>
      <div className='navbar-container'>
        <h1>
          pentago <span>game</span>
        </h1>
        <button onClick={() => setIsMenuOpen(true)} className='bars-icon'>
          <HiBars3 />
        </button>

        <div className='options'>
          {detailComponents.map(({ name }) => (
            <button
              key={nanoid()}
              onClick={() => handleMouseEnter(name)}
              className='navbar-icon'
              style={
                detail === name
                  ? { borderBottom: '3px solid rgb(156, 76, 76)' }
                  : { borderBottom: '3px solid transparent' }
              }
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div
        className='details-container'
        style={detail ? { visibility: 'visible' } : { visibility: 'hidden' }}
      >
        {detailComponents.map(
          ({ name, component }) =>
            detail === name && (
              <>
                <div key={nanoid()}>{component}</div>
                <button
                  className='close-details-btn'
                  onClick={() => setDetail('')}
                >
                  x
                </button>
              </>
            )
        )}
      </div>
    </>
  );
};
export default Header;
