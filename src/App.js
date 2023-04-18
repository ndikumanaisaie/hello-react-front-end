import { NavLink, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <>
    <NavLink to="/" role="button">
      <span>Home | </span>
    </NavLink>
    <NavLink to="/greet" role="button">
      <span>Greet someone</span>
    </NavLink>
    <Routes>
      <Route exact path="/greet" element={<Greeting />} />
    </Routes>
  </>
);

export default App;
