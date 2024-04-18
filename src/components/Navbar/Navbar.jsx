import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { useGameContext } from '../../gameContext';
import Options from '../Options/Options';
import Rules from '../Rules/Rules';
import About from '../About/About';
import { useState } from 'react';

const Header = () => {
  const { setIsMenuOpen } = useGameContext();
  const [activeDetail, setActiveDetail] = useState('');

  const detailComponents = {
    options: <Options />,
    rules: <Rules />,
    about: <About />,
  };
  const handleMenuClick = (componentName) => {
    setActiveDetail((prevComponent) =>
      prevComponent === componentName ? null : componentName
    );
  };

  return (
    <div className='container'>
      <div className='navbar-container'>
        <h1>
          pentago <span>game</span>
        </h1>
        <button onClick={() => setIsMenuOpen(true)} className='bars-icon'>
          <FaBars />
        </button>

        <div className='options'>
          {Object.keys(detailComponents).map((name) => (
            <button
              key={name}
              onClick={() => handleMenuClick(name)}
              className='navbar-icon'
              style={{
                borderBottom:
                  activeDetail === name
                    ? '3px solid var(--bgcBodyBottom)'
                    : '3px solid transparent',
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div
        className='details-container'
        style={{ visibility: activeDetail ? 'visible' : 'hidden' }}
      >
        {activeDetail && (
          <div>
            <div>{detailComponents[activeDetail]}</div>
            <button
              className='close-details-btn'
              onClick={() => setActiveDetail(null)}
            >
              x
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
