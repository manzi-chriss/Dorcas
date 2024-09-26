import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaTimes } from 'react-icons/fa'; // Importing icons

const UserMessages = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://dorcas-backend.onrender.com/message');
        setMessages(response.data);
        setError('');
      } catch (error) {
        setError('Failed to fetch messages. Please try again.');
      }
    };

    fetchMessages();
  }, []);

  const handleReplyChange = (e, messageId) => {
    setReply((prev) => ({ ...prev, [messageId]: e.target.value }));
  };

  const handleReplySubmit = async (e, messageId) => {
    e.preventDefault();
    try {
      await axios.post(`https://dorcas-backend.onrender.com/message/reply`, { messageId, reply: reply[messageId] });
      setSuccess('Reply sent successfully!');
      setError('');
      setReply((prev) => ({ ...prev, [messageId]: '' })); // Reset reply for this message
    } catch (error) {
      setError('Failed to send reply. Please try again.');
      setSuccess('');
    }
  };

  const handleDelete = async (messageId) => {
    try {
      await axios.delete(`https://dorcas-backend.onrender.com/message/${messageId}`);
      setMessages((prev) => prev.filter((message) => message._id !== messageId));
      setSuccess('Message deleted successfully!');
      setError('');
    } catch (error) {
      setError('Failed to delete message. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Messages</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message._id} className="p-4 border border-gray-300 rounded-lg flex justify-between items-start">
            <div className="flex-1 mr-2">
              <p className="font-semibold">User Message:</p>
              <p className='text-gray-500'>{message.message}</p>
            </div>
            <div className="flex flex-col items-end">
              <button 
                onClick={() => handleDelete(message._id)} 
                className="text-red-500 hover:text-red-600 transition duration-200 mb-2"
              >
                <FaTrash size={20} />
              </button>
              <form onSubmit={(e) => handleReplySubmit(e, message._id)} className="mt-2 w-full">
                <textarea
                  value={reply[message._id] || ''}
                  onChange={(e) => handleReplyChange(e, message._id)}
                  placeholder="Type your reply here..."
                  className="border border-gray-300 rounded-lg p-2 mb-2 w-full"
                  rows="2"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200"
                >
                  Send Reply
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMessages;
