import { useState, useEffect, memo } from 'react';
import member1 from '../../assets/img/member.jpg';
import member2 from '../../assets/img/member2.jpg';
import member3 from '../../assets/img/member3.jpg';
import member4 from '../../assets/img/member4.jpg';
import member5 from '../../assets/img/member5.jpg';
import member6 from '../../assets/img/member6.jpg';

const teamMembers = [
  { name: 'APOSTLE CLAIRE', position: 'Founder', image: member1 },
  { name: 'PASTOR JEAN', position: 'WISER', image: member2 },
  { name: 'EV LILIANE', position: 'CO ACCOUNTANT', image: member3 },
  { name: 'DEACON BEATRICE', position: 'WISER', image: member4 },
  { name: 'EV. UWASE NELLY', position: 'ACCOUNTANT', image: member5 },
  { name: 'EV NELLA', position: 'SECRETARY', image: member6 },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + teamMembers.length) % teamMembers.length;
    let translateX = '0%';
    let scale = 1;
    let zIndex = teamMembers.length - diff;
    let opacity = 1;

    if (diff === 0) {
      translateX = '0%';
      scale = 1.3; // Slightly increase scale for the active member
      zIndex = teamMembers.length;
    } else {
      translateX = `${20 * diff}%`; // Adjust spacing for non-active cards
      scale = 0.85; // Keep other members slightly smaller
      opacity = 1 - 0.3 * diff;
    }

    return {
      transform: `translateX(${translateX}) scale(${scale})`,
      zIndex,
      opacity: Math.max(opacity, 0),
    };
  };

  return (
    <div className="flex flex-col items-center w-full max-w-full mx-auto p-4 sm:p-6 bg-black text-white">
      <div className="p-4 sm:p-6 text-center">
        <h2 className="text-2xl text-gray-500 sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Meet Our Team
        </h2>
        <p className="text-sm sm:text-md md:text-lg text-gray-300 leading-relaxed mb-6">
          Our team is made up of highly talented and dedicated individuals. our mission is to uplift and empower individuals by providing support, education, and community outreach. We strive to create a world where everyone, regardless of their background or circumstances, can achieve their full potential and live with dignity.
        </p>
      </div>
      <div className="relative w-full h-64 sm:h-96 md:h-[28rem] flex items-center justify-center mt-8 overflow-hidden">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="absolute w-32 sm:w-36 md:w-44 lg:w-56 h-48 sm:h-60 md:h-72 lg:h-80 transition-all duration-700 ease-in-out rounded-lg overflow-hidden shadow-lg"
            style={getCardStyle(index)}
          >
            <div className="relative rounded-xl w-full h-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 p-2 sm:p-4 text-center">
                <h3 className="text-sm sm:text-lg md:text-xl font-bold">{member.name}</h3>
                <p className="text-xs sm:text-sm md:text-md">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Memoizing the Team component to prevent unnecessary re-renders
export default memo(Team);
