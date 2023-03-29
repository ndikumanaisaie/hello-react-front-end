import Greeting from './components/Greeting';
const App = () => {
  return (
    <Routes>
      <Route exact path="/greet" element={<Greeting />} />
    </Routes>
  )
}

export default App;
