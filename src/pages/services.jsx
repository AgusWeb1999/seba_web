import React from "react";
import { Link } from "react-router-dom"; 
import "../css/services.css"; 

const servicesData = [
  {
    title: "Kitchen Renovations",
    description: "Upgrade your kitchen with modern designs and high-quality finishes.",
    images: [
      "src/images/kitchen remodel.jpg",
      "src/images/04-Kitchen.jpg",
      "src/images/WhatsApp Image 2025-03-31 at 17.00.14_8edf9ea6.jpg",
      "src/images/WhatsApp Image 2025-03-31 at 17.00.14_c0650b7b.jpg",
    ],
  },

  {
    title: "Bathroom Remodeling",
    description: "Transform your bathroom into a luxurious and functional space.",
    images: [
      "src/images/WhatsApp Image 2025-03-31 at 17.00.09_7bdf6ea9.jpg",
      "src/images/WhatsApp Image 2025-03-31 at 17.00.10_3a0332df.jpg",
      "src/images/WhatsApp Image 2025-03-31 at 17.00.10_486a56b6.jpg",
      "src/images/WhatsApp Image 2025-03-31 at 17.00.12_97f909fa.jpg",
    ],
  },
  {
    title: "Pool service",
    description: "High-quality fencing solutions for your pool area.",
    images: [
      "src/images/bomba-de-agua-para-piscina.jpg",
      "src/images/bomb.jpg",
      "src/images/Portada-pintar-piscinas-Pinturas-JUNO-768x516.jpg",
      "src/images/WhatsApp Image 2025-03-31 at 17.00.13_fbd6c1f3.jpg",
    ],
  },
  {
    title: "Exterior and Interior Painting",
    description: "Enhance your space with our professional painting services.",
    images: [
      "src/images/Colores-Naturales-para-pintar-Fachadas.jpg",
      "src/images/colores-nuetros-para-pintar-fahcas.jpg",
      "src/images/images.jpg",
      "src/images/pared-interior-pintura.jpg",
    ],
  },
];

function Services() {
  return (
    <div className="services-page">
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-images-grid">
              {service.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${service.title} ${imgIndex + 1}`}
                  className="service-image"
                />
              ))}
            </div>
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="contact-button-container">
        <Link to="/contact" className="contact-button">
          CONTACT US FOR A QUOTE
        </Link>
      </div>
    </div>
  );
}

export default Services;