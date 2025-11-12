import { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, category: 'stills', title: 'Underwater Portrait 1', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800' },
    { id: 2, category: 'stills', title: 'Underwater Portrait 2', image: 'https://images.unsplash.com/photo-1583585635793-0e1894c169bd?w=800' },
    { id: 3, category: 'motion', title: 'Underwater Video 1', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800' },
    { id: 4, category: 'stills', title: 'Underwater Portrait 3', image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=800' },
    { id: 5, category: 'motion', title: 'Underwater Video 2', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800' },
    { id: 6, category: 'stills', title: 'Underwater Portrait 4', image: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">PORTFOLIO</h2>
        <p className="portfolio-description">
          Explore my underwater photography and cinematography work
        </p>

        <div className="portfolio-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            ALL
          </button>
          <button
            className={`filter-btn ${activeFilter === 'stills' ? 'active' : ''}`}
            onClick={() => setActiveFilter('stills')}
          >
            STILLS
          </button>
          <button
            className={`filter-btn ${activeFilter === 'motion' ? 'active' : ''}`}
            onClick={() => setActiveFilter('motion')}
          >
            MOTION
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
