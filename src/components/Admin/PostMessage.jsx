// PostMessage.js
import React, { useState } from 'react';
import axios from 'axios';

const PostMessage = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error message
    setSuccess(null); // Reset success message

    try {
      const response = await axios.post('https://dorcas-backend.onrender.com/admin-message', { message });
      if (response.status === 201) {
        setSuccess('Message sent successfully!'); // Set success message
        setMessage(''); // Clear message input
        setTimeout(onClose, 2000); // Automatically close the modal after 2 seconds
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while posting the message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message" className="block text-gray-700">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
      <button 
        type="submit" 
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        Post Message
      </button>
    </form>
  );
};

export default PostMessage;
