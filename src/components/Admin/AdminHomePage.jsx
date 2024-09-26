import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import PostMessage from './PostMessage'; 
import UserMessages from './UserMessages'; // Import the UserMessages component

const AdminHomePage = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false); // State for posting messages
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false); // State for user messages modal

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentHour = time.getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, [time]);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const togglePostModal = () => {
    setIsPostModalOpen(!isPostModalOpen);
  };

  const toggleMessageModal = () => {
    setIsMessageModalOpen(!isMessageModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <div className="container mx-auto">
        <div className="text-3xl text-white font-bold mb-6">Admin Dashboard</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Time and Greeting Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">{greeting}</h2>
            <p className="text-2xl text-black">{formattedTime}</p>
          </div>

          {/* Other Cards with Links */}
          <button onClick={toggleMessageModal} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Messages</h2>
            <p className="text-black">Check user messages here.</p>
          </button>

          <Link to="/add-video" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Add Video</h2>
            <p className="text-black">Upload and manage videos.</p>
          </Link>

          <button onClick={togglePostModal} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Post Message</h2>
            <p className="text-black">Post new updates and notifications.</p>
          </button>

          <Link to="/comments" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Comments</h2>
            <p className="text-black">View user comments on posts.</p>
          </Link>

          <Link to="/users" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Users</h2>
            <p className="text-black">Manage user accounts and roles.</p>
          </Link>
        </div>
      </div>

      {/* Modal for Posting Message */}
      {isPostModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Post Message</h2>
              <button onClick={togglePostModal} className="text-red-500 text-lg">&times;</button>
            </div>
            <PostMessage onClose={togglePostModal} />
          </div>
        </div>
      )}

      {/* Modal for User Messages */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">User Messages</h2>
              <button onClick={toggleMessageModal} className="text-red-500 text-lg">&times;</button>
            </div>
            <UserMessages /> {/* Render the UserMessages component */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHomePage;
