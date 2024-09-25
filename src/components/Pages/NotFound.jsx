import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { FaExclamationTriangle } from 'react-icons/fa'; // Example icon

const NotFound = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [countdown, setCountdown] = useState(8); // Initialize countdown state

  useEffect(() => {
    // Set a timer to decrease countdown every second
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000); // 1000 milliseconds = 1 second

    // Redirect after countdown reaches zero
    const redirectTimer = setTimeout(() => {
      navigate('/'); // Redirect to home
    }, 8000); // 8000 milliseconds = 8 seconds

    return () => {
      clearInterval(timer); // Cleanup the countdown timer
      clearTimeout(redirectTimer); // Cleanup the redirect timer
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-5xl mb-4">
        <FaExclamationTriangle />
      </div>
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-300 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      
      {/* Countdown display */}
      <div className="text-red-600 text-6xl font-bold mb-4">
        {countdown}
      </div>

      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Return to Home Page
      </Link>
      <p className="text-sm text-gray-400 mt-4">
        You will be redirected to the home page in {countdown} seconds.
      </p>
    </div>
  );
};

export default NotFound;
