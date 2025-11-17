import { useState, useEffect } from 'react';
import './ProgressiveImage.css';

function ProgressiveImage({ thumbnail, fullImage, alt, onClick }) {
  const [currentSrc, setCurrentSrc] = useState(thumbnail);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = fullImage;
    img.onload = () => {
      setCurrentSrc(fullImage);
      setLoading(false);
    };
  }, [fullImage]);

  return (
    <div className="progressive-image-wrapper" onClick={onClick}>
      <img
        src={currentSrc}
        alt={alt}
        className={`progressive-image ${loading ? 'loading' : 'loaded'}`}
      />
      {loading && <div className="progressive-loader"></div>}
    </div>
  );
}

export default ProgressiveImage;
