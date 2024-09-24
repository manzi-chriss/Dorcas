import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">DORCAS MINISTRIES</h3>
          <p className="text-sm">Empowering communities through faith and service.</p>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <NavLink to="/" className="hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">About</NavLink>
            </li>
            <li>
              <NavLink to="/ministries" className="hover:underline">Ministries</NavLink>
            </li>
            <li>
              <NavLink to="/media" className="hover:underline">Media</NavLink>
            </li>
            <li>
              <NavLink to="/connect" className="hover:underline">Connect</NavLink>
            </li>
          </ul>
        </nav>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()}manzi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
