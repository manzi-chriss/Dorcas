import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../../assets/img/LogoPng.png'; 
import { NavLink, useLocation } from 'react-router-dom'; 

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [expandedMenu, setExpandedMenu] = useState(null); 
  const location = useLocation(); // Get the current location 

  const menuItems = [
    { title: 'HOME', link: '/' }, 
    { 
      title: 'ABOUT', 
      subMenu: [
        { title: 'Mission', link: '/mission' },
        { title: 'Vision', link: '/vision' },
        { title: 'History', link: '/history' },
        { title: 'Team', link: '/team' },
      ],
    },
    { title: 'MINISTRIES', link: '/ministries' },
    {
      title: 'MEDIA',
      subMenu: [
        { title: 'Press Gallery', link: '/Gallery' },
        { title: 'Video Gallery', link: '/media/video-gallery' },
      ],
    },
    {
      title: 'CONNECT',
      subMenu: [
        { title: 'Contact Us', link: '/connect/contact' },
        { title: 'Instagram', link: '/instagram' },
        { title: 'Twitter', link: '/twitter' },
        { title: 'Whatsapp', link: '/whatsapp' },
        { title: 'Facebook', link: '/facebook' },
        { title: 'YouTube', link: '/youtube' },
        { title: 'LinkedIn', link: '/linkedin' },
        { title: 'Email', link: '/email' },
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    setExpandedMenu(index);
  };

  const handleMouseLeave = () => {
    setExpandedMenu(null);
  };

  const toggleSubMenu = (index) => {
    setExpandedMenu(prev => (prev === index ? null : index));
  };

  const isSubMenuActive = (item) => {
    return item.subMenu && item.subMenu.some(subItem => location.pathname === subItem.link);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-black bg-opacity-40 text-white p-4 shadow-lg z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full lg:w-auto mb-4 lg:mb-0">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <NavLink to="/">
              <img src={Logo} alt="Dorcas Ministries Logo" className="w-12 h-12 rounded-full mr-2 shadow-md" />
            </NavLink>
            <NavLink to="/" className="font-bold text-xl">DORCAS MINISTRIES</NavLink>
          </motion.div>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Accessibility
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  className="flex items-center justify-between cursor-pointer px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    if (item.subMenu) {
                      toggleSubMenu(index); // Toggle submenu
                    } else {
                      handleMenuItemClick(); // Close menu
                    }
                  }} // Close menu or toggle submenu
                >
                  <NavLink
                    to={item.link || '#'}
                    className={({ isActive }) =>
                      `text-white ${isActive || isSubMenuActive(item) ? 'border-b-2 border-red-500 font-bold' : ''} hover:underline`
                    }
                  >
                    {item.title}
                  </NavLink>
                  {item.subMenu && (
                    <ChevronDown
                      className={`ml-2 transition-transform ${expandedMenu === index ? 'rotate-180' : ''}`}
                      size={16}
                    />
                  )}
                </motion.div>
                {item.subMenu && (
                  <AnimatePresence>
                    {expandedMenu === index && (
                      <motion.ul
                        className="absolute top-full left-0 bg-gray-800 mt-2 p-2 rounded-md shadow-lg z-10"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="py-1">
                            <motion.div
                              className="block text-sm text-white hover:underline hover:underline-red-500 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                              onClick={handleMenuItemClick} // Close menu on submenu item click
                            >
                              <NavLink to={subItem.link || '#'}>
                                {subItem.title}
                              </NavLink>
                            </motion.div>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
