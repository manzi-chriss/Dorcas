import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import PostMessage from './PostMessage';  
import UserMessages from './UserMessages';  
import AddVideo from './AddVideo';   
import ZoomNotificationForm from './ZoomNotificationForm';  
import ZoomNotificationTable from './ZoomNotificationTable'; 

const AdminHomePage = () => { 
  const [time, setTime] = useState(new Date()); 
  const [greeting, setGreeting] = useState(''); 
  const [isPostModalOpen, setIsPostModalOpen] = useState(false); 
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false); 
  const [isAddVideoModalOpen, setIsAddVideoModalOpen] = useState(false); 
  const [isZoomNotificationModalOpen, setIsZoomNotificationModalOpen] = useState(false);
  const [isZoomNotificationTableModalOpen, setIsZoomNotificationTableModalOpen] = useState(false); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentHour = time.getHours();
    setGreeting(currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening');
  }, [time]);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const togglePostModal = () => setIsPostModalOpen(!isPostModalOpen);
  const toggleMessageModal = () => setIsMessageModalOpen(!isMessageModalOpen);
  const toggleAddVideoModal = () => setIsAddVideoModalOpen(!isAddVideoModalOpen);
  const toggleZoomNotificationModal = () => setIsZoomNotificationModalOpen(!isZoomNotificationModalOpen);
  const toggleZoomNotificationTableModal = () => setIsZoomNotificationTableModalOpen(!isZoomNotificationTableModalOpen);

  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <div className="container mx-auto">
        <div className="text-3xl text-white font-bold mb-6">Admin Dashboard</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">{greeting}</h2>
            <p className="text-2xl text-black">{formattedTime}</p>
          </div>
          <button onClick={toggleMessageModal} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Messages</h2>
            <p className="text-black">Check user messages here.</p>
          </button>
          <button onClick={toggleAddVideoModal} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Add Video</h2>
            <p className="text-black">Upload and manage videos.</p>
          </button>
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

          <button onClick={toggleZoomNotificationModal} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Zoom Notifications</h2>
            <p className="text-black">Posting Notification.</p>
          </button>

          <button onClick={toggleZoomNotificationTableModal} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Zoom Notification Table</h2>
            <p className="text-black">View Zoom notifications.</p>
          </button>
        </div>
      </div>

      {/* Modal for Posting Message */}
      {isPostModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 max-h-[80vh] overflow-y-auto">
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">User Messages</h2>
              <button onClick={toggleMessageModal} className="text-red-500 text-lg">&times;</button>
            </div>
            <UserMessages />
          </div>
        </div>
      )}

      {/* Modal for Add Video */}
      {isAddVideoModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Add Video</h2>
              <button onClick={toggleAddVideoModal} className="text-red-500 text-lg">&times;</button>
            </div>
            <AddVideo onClose={toggleAddVideoModal} />
          </div>
        </div>
      )}

      {/* Modal for Zoom Notifications */}
      {isZoomNotificationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Zoom Notifications</h2>
              <button onClick={toggleZoomNotificationModal} className="text-red-500 text-lg">&times;</button>
            </div>
            <ZoomNotificationForm onClose={toggleZoomNotificationModal} />
          </div>
        </div>
      )}

      {/* Modal for Zoom Notification Table */}
      {isZoomNotificationTableModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Zoom Notification Table</h2>
              <button onClick={toggleZoomNotificationTableModal} className="text-red-500 text-lg">&times;</button>
            </div>
            <ZoomNotificationTable onClose={toggleZoomNotificationTableModal} />
          </div>
        </div>
      )}
    </div> 
  ); 
};

export default AdminHomePage;
