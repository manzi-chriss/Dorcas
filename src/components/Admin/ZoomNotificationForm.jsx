import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ZoomNotificationForm = () => {
  const [meetingMessage, setMeetingMessage] = useState('');
  const [zoomLink, setZoomLink] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('https://dorcas-backend.onrender.com/zoom/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meetingmessage: meetingMessage,
          zoomLink,
          countdownsettings: { meetingTime },
        }),
      });

      const responseData = await response.json(); // Parse response JSON

      if (!response.ok) {
        // Check if server provided error message in the response
        const errorMessage = responseData?.message || 'Failed to post notification';
        throw new Error(errorMessage);
      }

      setSuccessMessage('Notification posted successfully!');
      setMeetingMessage('');
      setZoomLink('');
      setMeetingTime('');
    } catch (err) {
      console.error('Error posting notification:', err);
      setError(err.message || 'Failed to post notification. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Post Zoom Notification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="meetingMessage" className="block text-sm font-medium text-gray-700">
            Meeting Message
          </label>
          <input
            type="text"
            id="meetingMessage"
            value={meetingMessage}
            onChange={(e) => setMeetingMessage(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
          <FaPaperPlane className="mr-2" /> Post Notification
        </button>
      </form>
      {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default ZoomNotificationForm;
