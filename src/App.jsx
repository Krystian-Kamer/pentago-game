import Board from './components/Board/Board';
import Navbar from './components/Navbar/Navbar';
import Turn from './components/Turn/Turn';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import WinModal from './components/WinModal/WinModal';

const App = () => {
  return (
    <>
      <Menu />
      <Navbar />
      <Turn />
      <Board />
      <WinModal />
      <Footer />
    </>
  );
};
export default App;
