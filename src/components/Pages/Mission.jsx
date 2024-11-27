import React from 'react';
import { 
  HeartPulse, 
  Users, 
  Cookie, 
  MessageCircle, 
  Globe, 
  Smile 
} from 'lucide-react';
import founder from '../../assets/img/popup.jpg';

const MissionSection = () => {
  const missionActivities = [
    { 
      icon: <HeartPulse className="text-blue-400" />, 
      text: "Paid mutual health care (MITUEL) for 1000 people in Rwanda, focusing on orphans, widows, and the elderly" 
    },
    { 
      icon: <Cookie className="text-green-400" />, 
      text: "Provide food to refugees in Uganda" 
    },
    { 
      icon: <Users className="text-purple-400" />, 
      text: "Clothe orphans, widows, and the poor in Tanzania" 
    },
    { 
      icon: <Smile className="text-yellow-400" />, 
      text: "Visit orphanages in Kenya" 
    },
    { 
      icon: <MessageCircle className="text-red-400" />, 
      text: "Conduct evangelism through social media platforms like ZOOM" 
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 bg-black text-white">
      <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-200 flex items-center">
          <Globe className="mr-4 text-blue-500" size={36} />
          Our Mission
        </h2>
        <p className="text-gray-300 text-base mb-6">
          Our ministry is dedicated to serving communities across Africa through compassionate and targeted support.
        </p>
        <div className="space-y-4">
          {missionActivities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-10">{activity.icon}</div>
              <p className="text-gray-300 text-sm">{activity.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src={founder}
            alt="Our founder"
            className="w-full max-w-sm h-auto rounded-xl shadow-2xl transform transition-transform hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-xl text-center">
            <p className="text-white text-sm">Vision</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;