import React from "react";
import "../css/about.css"; // Asegúrate de tener un archivo CSS para estilos personalizados

function About() {
  return (
    <div className="about-page">
      <div className="about-image">
        <img
          src="/src/images/contruction1.jpg" // Cambia esta ruta a la del logo de la empresa.
          alt="About Us"
        />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          At Mazz Service LLS, we specialize in steelframing construction, bathroom and kitchen renovations, and general construction projects.
        </p>
        <p>
          With years of experience in the industry, we provide innovative and efficient solutions to transform any space into a functional, safe, and modern environment.
          Our team of highly skilled professionals works with top-quality materials and the best techniques to ensure flawless finishes in every project. From structural work to the final details, we handle every phase with precision and dedication.
        </p>
        <p>
          We also offer interior and exterior painting services, guaranteeing a perfect aesthetic and long-lasting protection for every construction.
        </p>
        <p>
          We take pride in our attention to detail, customer satisfaction, and on-time project delivery. If you're looking for quality, innovation, and reliability, we are your best choice.
        </p>
        <address>
          📍 Location: Miami, USA
        </address>
        <p>
          📞 Contact: <a href="tel:7866420542">(786) 642-0542</a>
        </p>
        <p>
          📩 Email: <a href="mailto:sebamazz10@gmail.com">sebamazz10@gmail.com</a>
        </p>
        <p>
          <a href="/Contact">  Or complete our form here and I will contact you shortly</a>
        </p>
      </div>
    </div>
  );
}

export default About;