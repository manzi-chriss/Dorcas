import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img/bg.jpg';
import img2 from '../../assets/img/bg.jpg';
import img3 from '../../assets/img/bg.jpg'; 
import img4 from '../../assets/img/bg.jpg'; 
import { FaYoutube, FaVideo } from 'react-icons/fa'; // Import icons
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
            YOUR WORK WILL ACCOMPANY YOU
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
            This ministry provides missionary evangelism, preaching, get people receive salvation, baptizing, helping orphans and widows and the poor, this is done in various countries around the world. Scroll down for more...
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://www.youtube.com/@dorcasministryinkenya" // Redirect to YouTube
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practices
              className="bg-red-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-red-500 transition flex items-center justify-center"
            >
              <FaYoutube className="mr-2" /> {/* YouTube icon */}
              YouTube
            </a>
            <a 
              href="https://us06web.zoom.us/j/83703599665" // Redirect to Zoom
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practices
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-500 transition flex items-center justify-center"
            >
              <FaVideo className="mr-2" /> {/* Zoom icon */}
              Zoom
            </a>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="w-full">
        <MissionSection />
        <Vision />
        <Team />
      </div>
    </div>
  );
}; 

export default Banner;
