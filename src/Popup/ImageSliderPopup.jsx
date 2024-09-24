import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import img1 from '../assets/img/pic1.jpg';
import img2 from '../assets/img/pic2.jpg';
import img3 from '../assets/img/pic3.jpg';
import img4 from '../assets/img/pic4.jpg';
import img5 from '../assets/img/pic4.jpg';

const images = [
  { src: img1, id: 1 },
  { src: img2, id: 2 },
  { src: img3, id: 3 },
  { src: img4, id: 4 },
  { src: img5, id: 5 },
];

const ImageSliderPopup = ({ isOpen, onRequestClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <div className="slider" style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Slide ${image.id}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
              opacity: index === currentIndex ? 1 : 0.5,
              transition: 'transform 0.5s ease, opacity 0.5s ease',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto',
            }}
          />
        ))}
      </div>
    </Modal>
  );
};

export default ImageSliderPopup;
