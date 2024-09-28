import React, { useState, useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const ZoomNotificationPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [notifications, setNotifications] = useState([]); 
  const [error, setError] = useState(''); 

  useEffect(() => { 
    const fetchAndToggle = async () => { 
      await fetchZoomNotifications(); 
    }; 

    fetchAndToggle(); 
    const interval = setInterval(fetchAndToggle, 80000); // Fetch every 80 seconds 

    return () => clearInterval(interval);
  }, []);

  const fetchZoomNotifications = async () => { 
    try { 
      const response = await fetch('https://dorcas-backend.onrender.com/zoom/');
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      const data = await response.json();
      console.log('Fetched Notifications:', data);
      setNotifications(data.slice(0, 2)); // Keep only the latest 2 notifications
      setError('');
      if (data.length > 0) {
        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 40000); // Hide after 40 seconds
      }
    } catch (err) {
      console.error('Error fetching notifications:', err);
      setError('Failed to load notifications. Please try again.');
      setNotifications([]);
    }
  };

  const formatCountdown = (countdownsettings) => {
    if (!countdownsettings || !countdownsettings.meetingTime) return 'Time not set';
    const now = new Date();
    const meetingTime = new Date(countdownsettings.meetingTime);
    const timeLeft = meetingTime - now;

    if (timeLeft <= 0) return 'Meeting has started';

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };

  return (
    <>
      {/* Popup */}
      {isPopupVisible && (
        <div className={`fixed top-16 left-0 right-0 mx-auto bg-opacity-90 z-50 transition-all duration-300`}>
          <div className="bg-blue-600 bg-opacity-10 text-white p-4 rounded-md shadow-lg max-w-xs w-full relative">
            <button 
              onClick={handleClosePopup} 
              className="absolute top-1 right-1 text-white hover:text-gray-200 text-lg"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            {error ? (
              <p className="text-red-300 text-xs">{error}</p>
            ) : (
              <div>
                {notifications.map((notification, index) => (
                  <div key={index} className="mb-2 pb-2 border-b border-blue-500 last:border-b-0">
                    <h3 className="font-bold text-xs mb-1">{notification.meetingmessage}</h3>
                    <p className="mb-1 text-xs">Time until meeting: {formatCountdown(notification.countdownsettings)}</p>
                    <a 
                      href={notification.zoomLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-blue-600 text-xs px-2 py-1 rounded-md inline-flex items-center hover:bg-gray-100"
                    >
                      Join <FaExternalLinkAlt className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ZoomNotificationPopup;
