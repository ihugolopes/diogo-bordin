import './ProgressiveImage.css';

function ProgressiveImage({ thumbnail, alt, onClick }) {
  return (
    <div className="progressive-image-wrapper" onClick={onClick}>
      <img
        src={thumbnail}
        alt={alt}
        className="progressive-image loaded"
        loading="lazy"
      />
    </div>
  );
}

export default ProgressiveImage;
