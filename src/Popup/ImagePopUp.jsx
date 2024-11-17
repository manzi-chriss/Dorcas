import React, { useState, useEffect } from 'react';
import certificate from '../assets/img/certificate.jpg'

const ImagePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Single image configuration
  const imageData = {
    src: '/api/placeholder/300/200',  // Replace with your actual image path: certificate
    description: 'Certificate of Excellence', // Replace with your description
    link: 'certificates', // Replace with your link
  };

  useEffect(() => {
    // Show for 30 seconds then hide
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 right-4 z-50 animate-fade-in">
      <div className="bg-black rounded-lg shadow-xl overflow-hidden">
        <a
          href={imageData.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={certificate}
            alt={imageData.description}
            className="w-64 h-48 object-cover"
          />
          <div className="p-3 bg-gray-800 text-white">
            <p className="text-sm font-medium">
              {imageData.description}
            </p>
          </div>
        </a>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center 
                   bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;