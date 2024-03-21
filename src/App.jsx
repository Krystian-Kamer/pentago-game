import Board from './components/Board/Board';
import Navbar from './components/Navbar/Navbar';
import Turn from './components/Turn/Turn';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
// import WinModal from './components/WinModal/WinModal';

const App = () => {
  return (
    <>
      <Modal />
      {/* <WinModal /> */}
      <Navbar />
      <Turn />
      <Board />
      <Footer />
    </>
  );
};
export default App;
