import React from 'react';
import founder from '../../assets/img/fouder.jpg';

const MissionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  justify-between p-4 sm:p-8 bg-black text-white">
      <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-400">Our Mission</h2>
        <p className="text-gray-300 text-sm sm:text-base">
        At Dorcas Ministries, our mission is to uplift and empower individuals by providing support, education, and community outreach. We strive to create a world where everyone, regardless of their background or circumstances, can achieve their full potential and live with dignity.

             We believe in fostering growth, compassion, and faith through our various ministries and programs that target the spiritual, emotional, and physical needs of people. Our goal is to serve as a beacon of hope, lighting the path for those who seek to improve their lives and the lives of others.

Whether through feeding programs, educational initiatives, or spiritual guidance, we are committed to making a lasting positive impact on our community and beyond.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center border-radius-20 rounder-xl ">
        <img 
          src={founder}
          alt="Our founder"
          className="w-full max-w-sm h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default MissionSection;