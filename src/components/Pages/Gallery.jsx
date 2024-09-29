import React, { useEffect, useState } from 'react';
import ImageModal from './ImageModal'; // Import the modal component
import img1 from '../../assets/img/gallery/img1.JPEG';
import img2 from '../../assets/img/gallery/img2.JPEG';
import img3 from '../../assets/img/gallery/img3.JPEG';
import img4 from '../../assets/img/gallery/img4.JPEG';
import img5 from '../../assets/img/gallery/img5.JPEG';

const images = [img1, img2, img3, img4, img5];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative w-full h-96">
        <img
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#10094; {/* Left arrow */}
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>

      <h2 className="text-2xl font-bold text-center mt-4">Gallery</h2>
      <div className="flex justify-center mt-4 space-x-2 flex-wrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Thumbnail ${index + 1}`}
            className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 ${index === currentIndex ? 'border-2 border-blue-500' : ''}`}
            onClick={() => openModal(image)} 
          />
        ))}
      </div>

      {isModalOpen && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}

export default Gallery;
