import React from 'react';
import pictureone from '../../assets/img/group.jpg';

const Vision = () => {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Container for both image and text */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image Container */}
          <div className="w-full lg:w-1/2">
          <div className="lg:w-1/2 flex justify-center border-radius-20 rounder-xl ">
        <img 
          src={pictureone}
          alt="Our founder"
          className="w-full max-w-sm h-auto rounded-lg shadow-md object-cover"
        />
      </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative">
                <span className="relative">
                  Our Vision
                  <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-green-500 rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
                Our vision is to create a community of believers who are passionate about spreading the gospel and making a difference in the world.
              </p>
              
              <div className="mt-6 space-y-4 text-white">
                {[
                  "Build shelters for widows, orphans, and the poor",
                  "Build churches in different countries",
                  "Give comfort to those affected by war"
                ].map((goal, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <p>{goal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-sm text-white italic">
                Scroll to see more...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;