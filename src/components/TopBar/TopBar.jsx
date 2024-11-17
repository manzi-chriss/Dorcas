import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import { PropagateLoader } from 'react-spinners';
import Logo from '../../assets/img/LogoPng.png';  
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [expandedMenu, setExpandedMenu] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    {
      title: 'MEDIA',
      subMenu: [
        { title: 'Press Gallery', link: '/Gallery' },
        { title: 'Video Gallery', link: '/videos' },
        { title: 'Certificates', link: '/certificates' },
      ],
    },
    {
      title: 'CONNECT',
      subMenu: [
        { title: 'Instagram', link: 'https://www.instagram.com/apostle__dorcas/', external: true },
        { title: 'Whatsapp', link: 'https://wa.me/qr/7RTTU5V3PMQPK1', external: true },
        { title: 'YouTube', link: 'https://www.youtube.com/@dorcasministryinkenya', external: true },
        { title: 'ZOOM', link: 'https://us06web.zoom.us/j/83703599665', external: true },
      ],
    },
  ];

  const toggleSubMenu = (index) => {
    setExpandedMenu(prev => (prev === index ? null : index));
  };

  const isSubMenuActive = (item) => {
    return item.subMenu && item.subMenu.some(subItem => location.pathname === subItem.link);
  };

  const handleNavigation = (link) => {
    setIsLoading(true);
    setIsMenuOpen(false);
    setExpandedMenu(null);
    setTimeout(() => {
      navigate(link);
      setIsLoading(false);
    }, 1000);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.menu-item')) {
      setExpandedMenu(null);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <PropagateLoader color="#FF0000" size={15} />
        </div>
      )}
      <motion.header
        className="fixed top-0 left-0 w-full bg-black bg-opacity-40 text-white p-4 shadow-lg z-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleOutsideClick}
      >
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full lg:w-auto mb-4 lg:mb-0">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <NavLink to="/" onClick={() => handleNavigation('/')}>
                <img src={Logo} alt="Dorcas Ministries Logo" className="w-12 h-12 rounded-full mr-2 shadow-md" />
              </NavLink>
              <NavLink to="/" onClick={() => handleNavigation('/')} className="font-bold text-xl">DORCAS MINISTRIES</NavLink>
            </motion.div>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group menu-item"
                >
                  <motion.div
                    className="flex items-center justify-between cursor-pointer px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.subMenu) {
                        toggleSubMenu(index);
                      } else {
                        handleNavigation(item.link);
                      }
                    }}
                  >
                    <span
                      className={`text-white ${location.pathname === item.link || isSubMenuActive(item) ? 'border-b-2 border-greenn- font-bold' : ''} hover:underline`}
                    >
                      {item.title}
                    </span>
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
                        <motion.div
                          className="lg:absolute top-full left-0 bg-gray-900 mt-2 rounded-md shadow-lg z-10 w-48"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="py-2">
                            {item.subMenu.map((subItem, subIndex) => (
                              <li key={subIndex} className="px-4 py-2 hover:bg-gray-800">
                                {subItem.external ? (
                                  <a
                                    href={subItem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm text-white hover:bg-green-50 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {subItem.title}
                                    <ExternalLink size={14} className="ml-2" />
                                  </a>
                                ) : (
                                  <motion.div
                                    className="flex items-center text-sm text-white hover:text-greenn-500 transition-colors cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleNavigation(subItem.link);
                                    }}
                                  >
                                    {subItem.title}
                                  </motion.div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;