import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../../assets/img/fouder.jpg';

const Mission = () => { 
  const [isImageEnlarged, setIsImageEnlarged] = useState(false); 
 
  const toggleImageSize = () => { 
    setIsImageEnlarged(!isImageEnlarged); 
  }; 
 
  return ( 
    <div className="container mx-auto px-4 py-10"> 
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Mission</h1>

      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Dorcas Ministries, our mission is to uplift and empower individuals by providing support, education, and community outreach. We strive to create a world where everyone, regardless of their background or circumstances, can achieve their full potential and live with dignity.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe in fostering growth, compassion, and faith through our various ministries and programs that target the spiritual, emotional, and physical needs of people. Our goal is to serve as a beacon of hope, lighting the path for those who seek to improve their lives and the lives of others.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether through feeding programs, educational initiatives, or spiritual guidance, we are committed to making a lasting positive impact on our community and beyond.
          </p>
        </div>

        {/* Clickable Image Section */}
        <div className="lg:w-1/2 relative group mt-8 lg:mt-0"> {/* Added margin-top on small screens */}
          <AnimatePresence>
            <motion.div
              className={`relative cursor-pointer transition-all duration-400 ease-in-out ${isImageEnlarged ? 'w-full' : 'w-full lg:w-64'}`} // Use full width on mobile
              onClick={toggleImageSize}
              layout
            >
              <motion.img
                src={img}
                alt="Our Mission"
                className="rounded-lg shadow-lg object-cover w-full" // Ensures full width
                layout
                transition={{ duration: 0.5 }}
              />

              {/* Overlay with Founder Information */}
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100`}>
                <div className="text-white text-center">
                  <h2 className="text-2xl font-bold">Founder: John Doe</h2>
                  <p className="mt-2">Visionary and Leader of Dorcas Ministries</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {isImageEnlarged && (
            <p className="text-sm text-gray-500 mt-2 text-center">Click the image to minimize.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mission;
