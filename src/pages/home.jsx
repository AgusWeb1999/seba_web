import React from 'react';
import styles from './Home.module.css'; // Importa los estilos modulares
import CarouselComponent from '../components/CarouselComponent'; // Ajusta la ruta si es necesario

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Steelframing Construction</h1>
      <p className={styles.subtitle}>
        We specialize in modern and innovative construction solutions.
      </p>
      <div className={styles.carousel}>
        <CarouselComponent />
      </div>
    </div>
  );
};

export default Home;