import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarouselComponent from "./components/CarouselComponent";
import FooterComponent from "./components/FooterComponent";
import NavComponent from "./components/NavComponent";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/projects";
import Services from "./pages/Services";
import "./App.css";
import logo from './images/logo_secundario.png';

function App() {
  return (
    <Router>
      <div className="app">
        <NavComponent />
        <Routes>
          <Route
            path="/"
            element={
              <div className="carousel-container">
                <div className="carousel-text">
                  <div className="carousel-principal-text">
                  <img src={logo} alt="Logo principal" />

                    <h1>Welcome to Stealframing Construction</h1>
                    <p>We specialize in modern and innovative construction solutions.</p>
                  </div>
                  <div className="carousel-button">
                    <a href="/projects" className="btn">View Our Projects</a>
                  </div>
                </div>
                <CarouselComponent />
              </div>
            }
            
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComponent /> {/* El footer debe estar fuera de Routes */}
      </div>
    </Router>
  );
}

export default App;

