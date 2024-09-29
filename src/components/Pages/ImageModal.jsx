import React from 'react';
import './image.css';

function ImageModal({ image, onClose }) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" 
      onClick={onClose} // Close the modal on backdrop click
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside the modal */}
        <img src={image} alt="Modal" className="max-w-full image-popup" />
        <button 
          onClick={onClose} 
          className="absolute top-2 image-popup right-2 text-white text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
