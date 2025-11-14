import { useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Lightbox from './Lightbox';
import './Portfolio.css';

// Portraits
import p1 from '../assets/images/portraits/550A8F47-EF1E-4AD0-992B-857D56C5814B.JPEG';
import p2 from '../assets/images/portraits/CY5A0692.png';
import p3 from '../assets/images/portraits/CY5A0700.png';
import p4 from '../assets/images/portraits/CY5A0717-Edit-2.jpg';
import p5 from '../assets/images/portraits/CY5A0731-Edit-2.jpg';
import p6 from '../assets/images/portraits/CY5A0735.jpg';
import p7 from '../assets/images/portraits/CY5A1435.jpg';
import p8 from '../assets/images/portraits/CY5A1457.jpg';
import p9 from '../assets/images/portraits/CY5A1490P.jpg';
import p10 from '../assets/images/portraits/CY5A1746.jpg';
import p11 from '../assets/images/portraits/CY5A1761.jpg';
import p12 from '../assets/images/portraits/Canon EOS 7D120.jpg';
import p13 from '../assets/images/portraits/Canon EOS 7D189.jpg';
import p14 from '../assets/images/portraits/E449AEAF-4A41-4C2C-B5FC-3CAF0DA55CFE.JPEG';
import p15 from '../assets/images/portraits/IMG_1208.jpg';
import p16 from '../assets/images/portraits/IMG_3187.jpg';
import p17 from '../assets/images/portraits/_MG_0169-1.jpg';
import p18 from '../assets/images/portraits/_MG_0273-38.jpg';
import p19 from '../assets/images/portraits/_MG_0289-1.jpg';
import p20 from '../assets/images/portraits/_MG_0333-54.jpg';
import p21 from '../assets/images/portraits/_MG_6303-1.jpg';
import p22 from '../assets/images/portraits/_MG_7370-1.jpg';
import p23 from '../assets/images/portraits/_MG_7411-3.jpg';
import p24 from '../assets/images/portraits/_MG_7766-1.jpg';
import p25 from '../assets/images/portraits/_MG_8093-1.jpg';
import p26 from '../assets/images/portraits/_MG_9089-5.jpg';
import p27 from '../assets/images/portraits/ana3.jpg';
import p28 from '../assets/images/portraits/lagarto.jpg';

// Campanha Italia
import c1 from '../assets/images/campanha/Italia/_MG_0205-26.jpg';
import c2 from '../assets/images/campanha/Italia/_MG_0206-27.jpg';
import c3 from '../assets/images/campanha/Italia/_MG_0298-45.jpg';
import c4 from '../assets/images/campanha/Italia/_MG_0299-46.jpg';
import c5 from '../assets/images/campanha/Italia/_MG_0311-48.jpg';
import c6 from '../assets/images/campanha/Italia/_MG_0312-49.jpg';
import c7 from '../assets/images/campanha/Italia/_MG_0402-67.jpg';
import c8 from '../assets/images/campanha/Italia/_MG_0416-70.jpg';
import c9 from '../assets/images/campanha/Italia/_MG_0515-91.jpg';

// Campanha LVYL
import c10 from '../assets/images/campanha/LVYL/IMG_2313.JPG';
import c11 from '../assets/images/campanha/LVYL/IMG_2339.JPG';
import c12 from '../assets/images/campanha/LVYL/IMG_2340.JPG';
import c13 from '../assets/images/campanha/LVYL/IMG_2362.JPG';
import c14 from '../assets/images/campanha/LVYL/IMG_2387.JPG';
import c15 from '../assets/images/campanha/LVYL/IMG_2396.JPG';
import c16 from '../assets/images/campanha/LVYL/IMG_2401.JPG';
import c17 from '../assets/images/campanha/LVYL/IMG_2406.JPG';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems = [
    // Portraits
    { id: 1, category: 'stills', title: 'Retrato 1', image: p1, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 2, category: 'stills', title: 'Retrato 2', image: p2, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 3, category: 'stills', title: 'Retrato 3', image: p3, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 4, category: 'stills', title: 'Retrato 4', image: p4, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 5, category: 'stills', title: 'Retrato 5', image: p5, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 6, category: 'stills', title: 'Retrato 6', image: p6, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 7, category: 'stills', title: 'Retrato 7', image: p7, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 8, category: 'stills', title: 'Retrato 8', image: p8, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 9, category: 'stills', title: 'Retrato 9', image: p9, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 10, category: 'stills', title: 'Retrato 10', image: p10, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 11, category: 'stills', title: 'Retrato 11', image: p11, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 12, category: 'stills', title: 'Retrato 12', image: p12, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 13, category: 'stills', title: 'Retrato 13', image: p13, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 14, category: 'stills', title: 'Retrato 14', image: p14, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 15, category: 'stills', title: 'Retrato 15', image: p15, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 16, category: 'stills', title: 'Retrato 16', image: p16, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 17, category: 'stills', title: 'Retrato 17', image: p17, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 18, category: 'stills', title: 'Retrato 18', image: p18, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 19, category: 'stills', title: 'Retrato 19', image: p19, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 20, category: 'stills', title: 'Retrato 20', image: p20, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 21, category: 'stills', title: 'Retrato 21', image: p21, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 22, category: 'stills', title: 'Retrato 22', image: p22, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 23, category: 'stills', title: 'Retrato 23', image: p23, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 24, category: 'stills', title: 'Retrato 24', image: p24, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 25, category: 'stills', title: 'Retrato 25', image: p25, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 26, category: 'stills', title: 'Retrato 26', image: p26, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 27, category: 'stills', title: 'Retrato 27', image: p27, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 28, category: 'stills', title: 'Retrato 28', image: p28, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},

    // Campanha
    { id: 29, category: 'motion', title: 'Campanha Italia 1', image: c1, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 30, category: 'motion', title: 'Campanha Italia 2', image: c2, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 31, category: 'motion', title: 'Campanha Italia 3', image: c3, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 32, category: 'motion', title: 'Campanha Italia 4', image: c4, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 33, category: 'motion', title: 'Campanha Italia 5', image: c5, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 34, category: 'motion', title: 'Campanha Italia 6', image: c6, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 35, category: 'motion', title: 'Campanha Italia 7', image: c7, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 36, category: 'motion', title: 'Campanha Italia 8', image: c8, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 37, category: 'motion', title: 'Campanha Italia 9', image: c9, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 38, category: 'motion', title: 'Campanha LVYL 1', image: c10, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 39, category: 'motion', title: 'Campanha LVYL 2', image: c11, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 40, category: 'motion', title: 'Campanha LVYL 3', image: c12, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 41, category: 'motion', title: 'Campanha LVYL 4', image: c13, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 42, category: 'motion', title: 'Campanha LVYL 5', image: c14, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 43, category: 'motion', title: 'Campanha LVYL 6', image: c15, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 44, category: 'motion', title: 'Campanha LVYL 7', image: c16, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
    { id: 45, category: 'motion', title: 'Campanha LVYL 8', image: c17, exif: { camera: 'Canon', iso: '400', aperture: '2.8', shutter: '1/250' }},
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
          PORTFÓLIO
        </motion.h2>
        <motion.p
          className="portfolio-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Explore meu trabalho de fotografia
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
            TODOS <span className="filter-count">({portfolioItems.length})</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'stills' ? 'active' : ''}`}
            onClick={() => setActiveFilter('stills')}
          >
            RETRATOS <span className="filter-count">({portfolioItems.filter(i => i.category === 'stills').length})</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'motion' ? 'active' : ''}`}
            onClick={() => setActiveFilter('motion')}
          >
            CAMPANHA <span className="filter-count">({portfolioItems.filter(i => i.category === 'motion').length})</span>
          </button>
        </motion.div>

        <motion.div
          key={activeFilter}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Masonry
            key={activeFilter}
            breakpointCols={breakpointColumns}
            className="portfolio-masonry"
            columnClassName="portfolio-masonry-column"
          >
            {filteredItems.map((portfolioItem, index) => (
              <motion.div
                key={`${activeFilter}-${portfolioItem.id}`}
                variants={item}
                className="portfolio-item"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleImageClick(index)}
              >
                <div className="portfolio-image-wrapper">
                  <img src={portfolioItem.image} alt={portfolioItem.title} loading="lazy" />
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
