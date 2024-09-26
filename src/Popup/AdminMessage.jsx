import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bell } from 'lucide-react';

const AdminMessage = () => {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  const fetchMessage = async () => {
    try {
      const response = await axios.get('https://dorcas-backend.onrender.com/admin-message');
      if (response.data && response.data.length > 0) {
        setMessage(response.data[0].message);
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
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
          aria-label="Toggle administrative message"
        >
          <Bell size={24} />
        </button>
        {visible && (
          <div className="absolute right-0 bottom-12 bg-blue-500 text-white p-3 rounded-lg shadow-lg max-w-sm text-sm">
            <div className="flex items-center mb-2">
              <Bell size={16} className="mr-2" />
              <span className="font-bold">Administrative Message</span>
            </div>
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessage;