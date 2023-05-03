import './App.css';
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Navbar from './Components/Nav';
import Mountains from './Components/Mountains';
import Default from './Components/Default';
import Birds from './Components/Birds';
import Food from './Components/Food';
import Beaches from './Components/Beaches';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* <Default /> */}
      <Routes >
        <Route path='/default' element={<Default/>} />
        <Route path='/mountains' element={<Mountains/>} />
        <Route path='/birds' element={<Birds/>} />
        <Route path='/food' element={<Food />} />
        <Route path='/beaches' element={<Beaches/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
