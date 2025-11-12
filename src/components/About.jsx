import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">ABOUT DIOGO BORDIN</h2>
          <div className="about-text">
            <p>
              Diogo Bordin is an internationally recognized underwater photographer and cinematographer
              based in Los Angeles. With over 15 years of experience, Diogo has worked with some of the
              biggest names in entertainment, fashion, and advertising.
            </p>
            <p>
              Specializing in underwater portraiture and commercial work, Diogo brings a unique artistic
              vision to every project. His work has been featured in major publications worldwide and
              has earned numerous industry awards.
            </p>
            <p>
              Beyond his commercial work, Diogo is passionate about education and mentoring. He teaches
              underwater photography workshops around the world and hosts "The Underwater Podcast,"
              where he interviews other professionals in the field.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <img src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800" alt="Brett Stanley" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
