import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarouselComponent from "./components/CarouselComponent";
import FooterComponent from "./components/footerComponent";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/projects";
import Services from "./pages/Services";
import "./App.css";

function App() {
  return (
    <Router>
<header>
  <nav className="navbar">
    <div className="logo">
      <Link to="/">Stealframing</Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</header>

      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <div className="carousel-container">
                <div className="carousel-text">
                  <h1>Welcome to Stealframing Construction</h1>
                  <p>We specialize in modern and innovative construction solutions.</p>
                </div>
                <CarouselComponent />
                <FooterComponent />
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;