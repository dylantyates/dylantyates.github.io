import Container from '@mui/material/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  HomeLazy,
  SlotGameLazy
} from './routes';
import Menu from './Menu';

const RedirectToGame = () => {
  window.location.href = `${window.location.origin}/game`;
  return null;
}

function App() {
  return (
    <Router>
      <Menu />
      <Container sx={{ paddingTop: 8 }}>
        <Routes>
          <Route path="/" element={<HomeLazy fallback={(<div>Loading...</div>)} />} />
          <Route path="/slot-game" element={<SlotGameLazy fallback={(<div>Loading...</div>)} />} />
          <Route path="/unity-game" element={<RedirectToGame />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
