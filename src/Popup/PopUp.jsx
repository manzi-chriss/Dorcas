import React, { useEffect, useState } from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const NotificationPopup = () => {
  const messages = [
    { 
      text: 'Followers on Instagram', 
      icon: <FaInstagram />, 
      duration: 2000, 
      link: 'https://instagram.com' 
    },
    { 
      text: 'Subscribe on YouTube', 
      icon: <FaYoutube />, 
      duration: 5000, 
      link: 'https://youtube.com' 
    },
    { 
      text: 'WhatsApp', 
      icon: <FaWhatsapp />, 
      duration: 3000, 
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
