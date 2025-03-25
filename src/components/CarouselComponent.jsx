import React, { useState, useEffect } from "react";
import "../css/CarouselComponent.css"; // Asegúrate de crear este archivo para los estilos

const images = [
  "/src/images/contruction1.jpg",
  "/src/images/contruction2.jpg",
  "/src/images/contruction3.jpg",
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