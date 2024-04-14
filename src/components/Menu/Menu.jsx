import './Menu.css';
import { FaAngleDown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useGameContext } from '../../gameContext';
import Options from '../Options/Options';
import About from '../About/About';
import Rules from '../Rules/Rules';
import { useState } from 'react';

const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useGameContext();

  const detailComponents = {
    options: <Options />,
    rules: <Rules />,
    about: <About />,
  };

  const [activeComponent, setActiveComponent] = useState('');

  const handleMenuClick = (detailName) => {
    setActiveComponent((prevDetail) =>
      prevDetail === detailName ? null : detailName
    );
  };

  return (
    <>
      {isMenuOpen && (
        <div className='menu'>
          <button onClick={() => setIsMenuOpen(false)} className='close-btn'>
            <IoClose />
          </button>

          {Object.keys(detailComponents).map((detail) => {
            return (
              <div key={detail}>
                <div
                  className={
                    activeComponent === detail
                      ? 'detail active-detail'
                      : 'detail'
                  }
                >
                  <button onClick={() => handleMenuClick(detail)}>
                    <span className='text'>{detail}</span>
                    <span className='icon'>
                      <FaAngleDown />
                    </span>
                  </button>
                </div>
                {activeComponent === detail && (
                  <div className='active-component'>
                    {detailComponents[activeComponent]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Menu;
