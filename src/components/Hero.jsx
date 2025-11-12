import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="hero">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          UNDERWATER PHOTOGRAPHER
          <br />
          & CINEMATOGRAPHER
        </h1>
        <p className="hero-subtitle">
          Creating stunning imagery beneath the surface
        </p>
        <div className="hero-cta">
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="btn-secondary">Book a Shoot</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
