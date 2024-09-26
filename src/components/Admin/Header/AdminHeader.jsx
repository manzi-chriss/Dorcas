import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const AdminHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Admin
          </div>

          {/* Menu Button */}
          <div>
            <button
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              ☰
            </button>
          </div>

          {/* Desktop Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-full px-4 py-1 focus:outline-none"
            />
            <button className="absolute right-0 top-0 mt-1 mr-1 text-gray-400 hover:text-white">
              <FaSearch />
            </button>
          </div>

          {/* User Account and Cart Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="hover:text-red-500 flex items-center">
              <FaUser className="mr-1" /> Login/Signup
            </a>
            <a href="/cart" className="hover:text-red-500 flex items-center">
              <FaShoppingCart className="mr-1" /> Cart
            </a>
          </div>
        </div>

        {/* Sidebar for Menu on All Devices */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform transition-transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } z-50`}
        >
          <div className="flex justify-between items-center p-4">
            <div className="text-2xl font-bold">Menu</div>
            <button
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <a href="/" className="hover:text-red-500">Add video</a>
            <a href="/shop" className="hover:text-red-500">Post message</a>
            <a href="/about" className="hover:text-red-500">Comments</a>
            <a href="/contact" className="hover:text-red-500">Messages</a>
            <a href="/contact" className="hover:text-red-500">User</a>
          </nav>
          <div className="p-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none w-full"
            />
            <button className="text-white mt-2 w-full">
              <FaSearch className="inline mr-2" /> Search
            </button>
          </div>
          <div className="p-4">
            <a href="/login" className="hover:text-red-500 flex items-center mb-2">
              <FaUser className="mr-2" /> Login/Signup
            </a>
            <a href="/cart" className="hover:text-red-500 flex items-center">
              <FaShoppingCart className="mr-2" /> Cart
            </a>
          </div>
        </div>

        {/* Overlay for Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          />
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
