import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

const AdminMessage = () => {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  const fetchMessage = async () => {
    try {
      const response = await fetch('https://dorcas-backend.onrender.com/admin-message');
      const data = await response.json();
      if (data && data.length > 0) {
        setMessage(data[0].message);
        setVisible(true);
      } else {
        setMessage(null);
        setVisible(false);
      }
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage(null);
      setVisible(false);
    }
  };

  useEffect(() => {
    fetchMessage();
    const interval = setInterval(fetchMessage, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleVisibility = () => {
    setVisible(prev => !prev);
  };

  if (!message) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="relative">
        <button
          onClick={toggleVisibility}
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          aria-label="Toggle administrative message"
        >
          <Bell size={20} />
        </button>
        {visible && (
          <div className="absolute right-0 bottom-12 w-64 bg-green-50 text-black rounded-lg shadow-lg p-2 text-sm">
            <div className="flex items-center  text-xs font-semibold mb-1">
              <Bell size={12} className="mr-1" />
              Admin Message
            </div>
            <p className="text-xs">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessage;