import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import popupImage from '../assets/img/popup.jpg';

const ImagePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const imageData = {
    src: popupImage,
    description: 'Certificate of Excellence',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Popup - Highest z-index */}
      <div className="fixed top-16 right-4 z-[9998] animate-fade-in w-64">
        <div className="bg-black rounded-lg shadow-xl overflow-hidden">
          <div 
            onClick={() => setShowModal(true)}
            className="cursor-pointer"
          >
            <img
              src={imageData.src}
              alt={imageData.description}
              className="w-64 h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <div className="p-2 bg-gray-800 text-white">
              <p className="text-sm font-medium">
                {imageData.description}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal - Highest z-index + 1 */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[80vh] overflow-hidden rounded-lg">
              <img
                src={imageData.src}
                alt={imageData.description}
                className="w-full h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;