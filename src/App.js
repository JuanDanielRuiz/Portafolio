import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About';
import { Contacto } from './components/Contacto';
import { Portafolio } from './components/Portafolio';
import { Navar } from './components/Navar/Navar';
import { Piepagina } from './components/Pie/Piepagina';



function App() {
  return (
    <div className="App">
      <Navar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/portafolio" element={<Portafolio/>} />
      </Routes>
      <Piepagina/>
     
     
     
    </div>
  );
}

export default App;
