import './Modal.css';
import { FaAngleDown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useGameContext } from '../../gameContext';

const Modal = () => {
  const { isModalOpen, setIsModalOpen, resetBoard } = useGameContext();

  return (
    <>
      {isModalOpen && (
        <div className='modal'>
          <button onClick={() => setIsModalOpen(false)} className='close-btn'>
            <IoClose />
          </button>

          <div className='details'>
            <button>
              <span onClick={resetBoard} className='text reset-btn'>
                reset game
              </span>
            </button>
          </div>

          <div className='details'>
            <button>
              <span className='text'>options</span>
              <span className='icon'>
                <FaAngleDown />
              </span>
            </button>
          </div>

          <div className='details'>
            <button>
              <span className='text'>rules</span>
              <span className='icon'>
                <FaAngleDown />
              </span>
            </button>
          </div>

          <div className='details'>
            <button>
              <span className='text'>about</span>
              <span className='icon'>
                <FaAngleDown />
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
