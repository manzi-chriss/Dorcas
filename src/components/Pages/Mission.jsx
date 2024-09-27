import React from 'react';
import founder from '../../assets/img/group.jpg';

const MissionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  justify-between p-4 sm:p-8 bg-black text-white">
      <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-400">Our Mission</h2>
        <p className="text-gray-300 text-sm sm:text-base">
        In this ministry of dorcas we do many things including: paying people for mutual health care (MITUEL) in the country of Rwanda, where we have paid for 1000 people, most of all are orphans, widows, and the elderly. We provide food to refugees in Uganda. We clothe orphans, widows and the poor in Tanzania, we visit orphanages in Kenya, we do evangelism on social media like ZOOM. scroll to see more...
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