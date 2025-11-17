import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import img1 from '../assets/images/inicio/IMG_9240.jpg';
import img2 from '../assets/images/inicio/JPEG image 3.jpg';
import img3 from '../assets/images/inicio/horizonta60x40-1.jpg';
import img4 from '../assets/images/inicio/horizonta60x40-2.jpg';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const backgroundImages = [
    img1,
    img2,
    img3,
    img4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
      ))}
      <div className="hero-overlay" style={{ opacity: Math.min(scrollY / 500, 0.7) }}></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          FOTOGRAFIA, MODA
          <br />
          E PUBLICIDADE
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Imagens autorais com clareza, estética e propósito
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a href="#portfolio" className="btn-primary">Ver Portfólio</a>
          <a href="#contact" className="btn-secondary">Entrar em Contato</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
