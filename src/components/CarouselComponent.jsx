import React, { useState, useEffect } from "react";
import "../css/CarouselComponent.css"; // Asegúrate de crear este archivo para los estilos

const images = [
  "./images/WhatsApp Image 2025-03-31 at 17.00.10_486a56b6.jpg",
  "./images/WhatsApp Image 2025-03-31 at 17.00.10_4e2da799.jpg",
  "./images/WhatsApp Image 2025-03-31 at 17.00.12_97f909fa.jpg",
  "./images/WhatsApp Image 2025-03-31 at 17.00.14_8edf9ea6.jpg",
  "./images/WhatsApp Image 2025-03-31 at 17.00.13_fbd6c1f3.jpg",
];

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent;