import './Navbar.css';
import { HiBars3 } from 'react-icons/hi2';
import { useGameContext } from '../../gameContext';
import { useState } from 'react';
import Options from '../Options';
import Rules from '../Rules';
import About from '../About';

const Header = () => {
  const { setIsModalOpen } = useGameContext();
  const [detail, setDetail] = useState('');

  const detailComponents = [
    { name: 'options', component: <Options /> },
    { name: 'rules', component: <Rules /> },
    { name: 'about', component: <About /> },
  ];

  const handleMouseEnter = (detail) => {
    setDetail(detail);
  };

  return (
    <>
      <div className='navbar-container'>
        <h1>
          pentago <span>game</span>
        </h1>
        <button onClick={() => setIsModalOpen(true)} className='bars-icon'>
          <HiBars3 />
        </button>
        <div className='options'>
          {detailComponents.map(({ name }) => (
            <button
              key={name}
              onMouseEnter={() => handleMouseEnter(name)}
              className='navbar-icon'
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      {detailComponents.map(
        ({ name, component }) =>
          detail === name && <div key={name}> {component}</div>
      )}
    </>
  );
};
export default Header;
