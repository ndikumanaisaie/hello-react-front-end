import { NavLink } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
const App = () => {
  return (
    <BrowserRouter>
      <NavLink to="/" role="button">
        <span>Home | </span>
      </NavLink>
      <NavLink to="/greet" role="button">
        <span>Greet someone</span>
      </NavLink>
      <Routes>
        <Route exact path="/greet" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
