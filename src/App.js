import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  Home,
  SlotGame
} from './routes';
import Menu from './Menu';
import { LoadingSpinner } from './styles';

const Loading = () => (
  <div>
    <LoadingSpinner className="lds-dual-ring" />
  </div>
);

const RedirectToGame = () => {
  window.location.href = `${window.location.origin}/game`;
  return null;
}

function App() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home fallback={Loading} />} />
        <Route path="/slot-game" element={<SlotGame fallback={Loading} />} />
        <Route path="/unity-game" element={<RedirectToGame />} />
      </Routes>
    </Router>
  );
}

export default App;
