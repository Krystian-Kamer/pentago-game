import Board from './components/Board/Board';
import Navbar from './components/Navbar/Navbar';
import Turn from './components/Turn/Turn';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Turn />
      <Board />
      <Footer />
    </>
  );
};
export default App;
