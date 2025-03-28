import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "../css/NavComponent.css"; 

function NavComponent() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Stealframing</Link> {/* Este enlace lleva a la página principal */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavComponent;