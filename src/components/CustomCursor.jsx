import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('.portfolio-item') ||
        e.target.closest('.filter-btn')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor-modern"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isClicking ? 0.5 : isHovering ? 2.5 : 1,
        opacity: isHovering ? 0.6 : 1,
      }}
      transition={{
        x: { type: 'spring', stiffness: 400, damping: 30 },
        y: { type: 'spring', stiffness: 400, damping: 30 },
        scale: { type: 'spring', stiffness: 250, damping: 20 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className="cursor-trail" />
    </motion.div>
  );
}

export default CustomCursor;
