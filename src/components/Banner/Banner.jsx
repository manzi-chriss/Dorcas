import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img/bg.jpg';
import img2 from '../../assets/img/bg.jpg';
import img3 from '../../assets/img/bg.jpg';
import img4 from '../../assets/img/bg.jpg';
import MissionSection from '../Pages/Mission';
import Vision from '../Pages/Vision';
import Team from '../Pages/Team';

const Banner = () => {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col">
      <div className="relative h-screen mt-4"> {/* Banner section */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6 md:p-8 lg:p-10 xl:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Together, we can make a difference
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
            His Church provides secure, ethical, sustainable, full transport and logistics, charitable solutions for surplus products including food (ambient, chilled and frozen), clothing and a diverse range of supplies. We redistribute these products through a network of over 3,000 charities, at home and abroad, to help vulnerable people.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/company-solutions" className="bg-white text-black px-6 py-3 rounded-md shadow-lg hover:bg-gray-300 transition">
              COMPANY SOLUTIONS
            </a>
            <a href="/charitable-distributions" className="bg-white text-black px-6 py-3 rounded-md shadow-lg hover:bg-gray-300 transition">
              CHARITABLE DISTRIBUTIONS
            </a>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="w-full">
        <MissionSection />
        <Vision/>
        <Team/>
      </div>
    </div>
  );
};

export default Banner;