import React, { useEffect, useState } from 'react';

const ZoomNotificationTable = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [meetingMessage, setMeetingMessage] = useState('');
  const [zoomLink, setZoomLink] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  // Fetch notifications from the backend
  const fetchNotifications = async () => {
    try {
      const response = await fetch('https://dorcas-backend.onrender.com/zoom/');
      if (!response.ok) throw new Error('Failed to fetch notifications');
      const data = await response.json();
      setNotifications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Function to handle delete operation
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      try {
        const response = await fetch(`https://dorcas-backend.onrender.com/zoom/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete notification');
        fetchNotifications(); // Refresh the list after deletion
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // Function to handle edit operation
  const handleEdit = (notification) => {
    setSelectedNotification(notification);
    setMeetingMessage(notification.meetingmessage);
    setZoomLink(notification.zoomLink);
    setMeetingTime(notification.countdownsettings.meetingTime);
  };

  // Function to handle update operation
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedNotification) return;

    try {
      const response = await fetch(`https://dorcas-backend.onrender.com/zoom/${selectedNotification._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meetingmessage: meetingMessage,
          zoomLink,
          countdownsettings: { meetingTime },
        }),
      });

      if (!response.ok) throw new Error('Failed to update notification');
      setSelectedNotification(null);
      setMeetingMessage('');
      setZoomLink('');
      setMeetingTime('');
      fetchNotifications(); // Refresh the list after updating
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Zoom Notifications Management</h2>

      {/* Update Form */}
      {selectedNotification && (
        <form onSubmit={handleUpdate} className="mb-6">
          <h3 className="text-lg font-semibold">Edit Notification</h3>
          <div className="mb-4">
            <label htmlFor="meetingMessage" className="block text-sm font-medium text-gray-700">
              Meeting Message
            </label>
            <input
              type="text"
              id="meetingMessage"
              value={meetingMessage}
              onChange={(e) => setMeetingMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zoomLink" className="block text-sm font-medium text-gray-700">
              Zoom Link
            </label>
            <input
              type="url"
              id="zoomLink"
              value={zoomLink}
              onChange={(e) => setZoomLink(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="meetingTime" className="block text-sm font-medium text-gray-700">
              Meeting Time
            </label>
            <input
              type="datetime-local"
              id="meetingTime"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            Update Notification
          </button>
        </form>
      )}

      {/* Notifications Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border text-green-500 px-4 py-2">Meeting Message</th>
            <th className="border text-green-400 px-4 py-2">Zoom Link</th>
            <th className="border text-green-400 px-4 py-2">Meeting Time</th>
            <th className="border text-green-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification._id}>
              <td className="border text-black px-4 py-2">{notification.meetingmessage}</td>
              <td className="border text-black px-4 py-2">{notification.zoomLink}</td>
              <td className="border text-black px-4 py-2">{new Date(notification.countdownsettings.meetingTime).toLocaleString()}</td>
              <td className="border text-black px-4 py-2">
                <button
                  onClick={() => handleEdit(notification)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(notification._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ZoomNotificationTable;
