import React, { useState } from "react";
import "./CarouselComponent.css"; // Asegúrate de crear este archivo para los estilos

const images = [
  "src/images/contruction1.jpg",
  "src/images/contruction2.jpg",
  "src/images/contruction3.jpg",
];

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : "inactive"
            }`}
          />
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
}

export default CarouselComponent;