import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';
import GameContext from './gameContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameContext>
    <App />
  </GameContext>
);
