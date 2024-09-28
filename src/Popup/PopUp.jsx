import React, { useEffect, useState } from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp,FaEnvelope } from 'react-icons/fa';

const NotificationPopup = () => {
  const messages = [
    { 
      text: 'Follow us on Instagram', 
      icon: <FaInstagram />, 
      duration: 1000, 
      link: 'https://www.instagram.com/apostle__dorcas/' 
    },
    { 
      text: 'Subscribe on YouTube', 
      icon: <FaYoutube />, 
      duration: 1000, 
      link: 'https://www.youtube.com/@dorcasministryinkenya' 
    },
    { 
      text: 'Whatsapp & Tel:+254 757 646 917', 
      icon: <FaWhatsapp />, 
      duration: 2000, 
      link: 'https://whatsapp.com' 
    },
    { 
      text: 'dorcastv@gmail.com', 
      icon: <FaEnvelope />, 
      duration: 5000, 
      link: 'https://whatsapp.com' 
    },
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const totalDuration = messages.reduce((total, message) => total + message.duration, 0);

    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex === messages.length - 1) {
          return 0; // Loop back to the first message
        }
        return prevIndex + 1;
      });
    }, totalDuration);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div
      className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-md shadow-lg z-50 transition-opacity duration-300"
      style={{ opacity: currentMessageIndex === -1 ? 0 : 1 }}
    >
      <div className="flex items-center">
        {messages[currentMessageIndex].icon}
        <a 
          href={messages[currentMessageIndex].link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-2 hover:underline"
        >
          {messages[currentMessageIndex].text}
        </a>
      </div>
    </div>
  );
};

export default NotificationPopup;
