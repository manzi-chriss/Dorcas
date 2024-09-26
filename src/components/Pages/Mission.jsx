import React from 'react';
import founder from '../../assets/img/group.jpg';

const MissionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  justify-between p-4 sm:p-8 bg-black text-white">
      <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-400">Our Mission</h2>
        <p className="text-gray-300 text-sm sm:text-base">
        
Our vision is to create a community of believers who are passionate about spreading the gospel and making a difference in the world.
we want to build shelters for widows and orphans and the poor, build churches in different countries, give comfort to those affected by war. scroll to see more...
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