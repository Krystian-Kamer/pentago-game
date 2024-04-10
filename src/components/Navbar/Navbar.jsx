import './Navbar.css';
import { HiBars3 } from 'react-icons/hi2';
import { useGameContext } from '../../gameContext';
import Options from '../Options/Options';
import Rules from '../Rules/Rules';
import About from '../About/About';
import { useState } from 'react';

const Header = () => {
  const { setIsMenuOpen } = useGameContext();
  const [activeDetail, setActiveDetail] = useState(null);

  const detailComponents = {
    options: <Options />,
    rules: <Rules />,
    about: <About />,
  };

  const handleMenuClick = (detailName) => {
    setActiveDetail((prevDetail) =>
      prevDetail === detailName ? null : detailName
    );
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
          {Object.keys(detailComponents).map((name) => (
            <button
              key={name}
              onClick={() => handleMenuClick(name)}
              className='navbar-icon'
              style={{
                borderBottom:
                  activeDetail === name
                    ? '3px solid rgb(156, 76, 76)'
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
    </>
  );
};
export default Header;
