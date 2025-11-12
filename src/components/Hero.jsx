import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    'https://images.unsplash.com/photo-1583585635793-0e1894c169bd?w=1920&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=1920&q=80',
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=80',
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
          UNDERWATER PHOTOGRAPHER
          <br />
          & CINEMATOGRAPHER
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Creating stunning imagery beneath the surface
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="btn-secondary">Book a Shoot</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
