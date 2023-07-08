
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/Components/LandingPage/LandingPage";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Pie/PiePagina";
import Contact from "../src/Components/Contacto/Contact";
import ProyectosForm from "../src/Components/PanelProyect/PanelProyect";
import Proyectos from "../src/Components/Proyectos/Proyectos";
import LoginForm from "../src/Components/LoginAdmin/LoginAdmin"


function App() {
  return (
      <div>
          <Navbar/>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/admin/proyect" element={<ProyectosForm />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/admin" element={<LoginForm />} />
          </Routes>
          <Footer/>
     
    </div>
  );
}

export default App;
