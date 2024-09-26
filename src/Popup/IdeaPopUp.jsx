import React, { useState } from 'react';
import { FaCommentDots, FaPaperPlane } from 'react-icons/fa';

const IdeaPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [idea, setIdea] = useState('');
  const [messages, setMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('User Idea:', idea);

    const token = 'your-web-token'; // Replace with actual token logic
    const response = await fetch('https://dorcas-backend.onrender.com/message', { // Update to your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ message: idea }),
    });

    if (response.ok) {
      const newMessage = await response.json(); // Get the created message from the response
      setMessages([...messages, newMessage.message]); // Add the message to the chat
      setIdea(''); // Clear input after submission
      setSuccessMessage('Idea sent successfully!'); // Set success message
      setIsPopupVisible(false); // Hide the popup after submission

      // Clear success message after a few seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      console.error('Failed to send message');
    }
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="fixed top-16 right-4 bg-black text-white p-4 bg-opacity-70 rounded-md shadow-lg z-50 transition-opacity duration-300">
          <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="flex items-center">
              <textarea
                id="idea"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="p-2 rounded-md w-full h-24 bg-gray-800 text-white"
                placeholder="Type your idea here..."
              />
              <button type="submit" className="ml-2 bg-red-500 text-white p-2 rounded-md flex items-center">
                <FaPaperPlane /> {/* Submit icon */}
              </button>
            </form>
            <button onClick={() => setIsPopupVisible(false)} className="mt-2 text-white">
              &times; {/* Close icon */}
            </button>
          </div>
          {successMessage && (
            <div className="mt-2 text-green-400">
              {successMessage}
            </div>
          )}
          <div className="mt-4">
            {messages.map((msg, index) => (
              <div key={index} className="bg-gray-700 p-2 rounded-md mb-2">
                {msg}
              </div>
            ))}
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsPopupVisible(!isPopupVisible)} // Toggle visibility
        className="fixed top-16 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg z-50 transition-opacity duration-300"
      >
        <FaCommentDots /> {/* Message Us icon */}
      </button>
    </div>
  );
};

export default IdeaPopup;
