import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/data'
import { NavBar } from './components/NavB';
import { SliderImage } from './components/Carrousel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route exact path={'/'} element={<SliderImage />} />
        </Routes>

      </BrowserRouter>
        
    </div>
  );
}

export default App;
