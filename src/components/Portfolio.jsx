import { useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Lightbox from './Lightbox';
import './Portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      category: 'stills',
      title: 'Underwater Portrait 1',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
      exif: { camera: 'Canon EOS R5', iso: '400', aperture: '2.8', shutter: '1/250' }
    },
    {
      id: 2,
      category: 'stills',
      title: 'Underwater Portrait 2',
      image: 'https://images.unsplash.com/photo-1583585635793-0e1894c169bd?w=1200',
      exif: { camera: 'Sony A7III', iso: '800', aperture: '1.8', shutter: '1/500' }
    },
    {
      id: 3,
      category: 'motion',
      title: 'Underwater Scene 1',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
      exif: { camera: 'Canon EOS R6', iso: '1600', aperture: '4.0', shutter: '1/125' }
    },
    {
      id: 4,
      category: 'stills',
      title: 'Underwater Portrait 3',
      image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=1200',
      exif: { camera: 'Nikon Z7', iso: '640', aperture: '2.0', shutter: '1/320' }
    },
    {
      id: 5,
      category: 'motion',
      title: 'Underwater Scene 2',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200',
      exif: { camera: 'Sony A1', iso: '1000', aperture: '5.6', shutter: '1/200' }
    },
    {
      id: 6,
      category: 'stills',
      title: 'Underwater Portrait 4',
      image: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=1200',
      exif: { camera: 'Canon EOS R5', iso: '500', aperture: '2.8', shutter: '1/400' }
    },
    {
      id: 7,
      category: 'stills',
      title: 'Deep Blue',
      image: 'https://images.unsplash.com/photo-1682687220063-4742bd7f9b1a?w=1200',
      exif: { camera: 'Sony A7III', iso: '320', aperture: '3.5', shutter: '1/160' }
    },
    {
      id: 8,
      category: 'motion',
      title: 'Ocean Movement',
      image: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=1200',
      exif: { camera: 'Canon EOS R6', iso: '2000', aperture: '4.0', shutter: '1/100' }
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <motion.h2
          className="portfolio-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          PORTFOLIO
        </motion.h2>
        <motion.p
          className="portfolio-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Explore my underwater photography and cinematography work
        </motion.p>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            ALL <span className="filter-count">({portfolioItems.length})</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'stills' ? 'active' : ''}`}
            onClick={() => setActiveFilter('stills')}
          >
            STILLS <span className="filter-count">({portfolioItems.filter(i => i.category === 'stills').length})</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'motion' ? 'active' : ''}`}
            onClick={() => setActiveFilter('motion')}
          >
            MOTION <span className="filter-count">({portfolioItems.filter(i => i.category === 'motion').length})</span>
          </button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="portfolio-masonry"
            columnClassName="portfolio-masonry-column"
          >
            {filteredItems.map((portfolioItem, index) => (
              <motion.div
                key={portfolioItem.id}
                variants={item}
                className="portfolio-item"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleImageClick(index)}
              >
                <div className="portfolio-image-wrapper">
                  <img src={portfolioItem.image} alt={portfolioItem.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <h3>{portfolioItem.title}</h3>
                    <p className="portfolio-view">Click to view</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        image={filteredItems[currentImageIndex]}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}

export default Portfolio;
