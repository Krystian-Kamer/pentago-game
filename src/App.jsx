import { useState } from 'react';
import Board from './components/Board/Board';
import Navbar from './components/Navbar/Navbar';
import Turn from './components/Turn/Turn';

const App = () => {
  const [blackIsNext, setBlackIsNext] = useState(true);

  return (
    <>
      <Navbar />
      <Turn blackIsNext={blackIsNext} setBlackIsNext={setBlackIsNext} />
      <Board blackIsNext={blackIsNext} setBlackIsNext={setBlackIsNext} />
    </>
  );
};
export default App;
