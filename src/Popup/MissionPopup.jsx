import React from 'react';
import { motion } from 'framer-motion';

const MissionPopup = ({ isVisible, onClose }) => {
  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p>
            Our mission is to uplift and empower communities through faith, service, and education.
          </p>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded-md">
            Close
          </button>
        </motion.div>
      </div>
    )
  );
};

export default MissionPopup;
