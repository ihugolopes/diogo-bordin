import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Magazine Editor, Vogue',
      text: 'Diogo\'s underwater photography is absolutely breathtaking. His ability to capture emotion beneath the surface is unmatched.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Creative Director, Nike',
      text: 'Working with Diogo was an incredible experience. His professionalism and artistic vision elevated our campaign beyond expectations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Art Director, National Geographic',
      text: 'Diogo brings a unique perspective to underwater photography. His technical skill combined with creative vision is truly exceptional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CLIENT TESTIMONIALS
        </motion.h2>

        <div className="testimonials-carousel">
          <button className="carousel-nav carousel-prev" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="testimonial-avatar"
              />
              <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
              <p className="testimonial-role">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>

          <button className="carousel-nav carousel-next" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
