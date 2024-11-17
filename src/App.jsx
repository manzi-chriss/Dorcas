import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/TopBar/TopBar'; 
import Banner from './components/Banner/Banner'; 
import About from './components/Pages/About'; 
import Gallery from './components/Pages/Gallery';
import History from './components/Pages/History';
import MissionSection from './components/Pages/Mission';
import Team from './components/Pages/Team';
import Vision from './components/Pages/Vision';
import Videos from './components/Pages/Videos';
import NotificationPopup from './Popup/PopUp';
import IdeaPopup from './Popup/IdeaPopUp';
import Ministries from './components/Pages/Ministries';
import Footer from './components/Footer/Footer';
import NotFound from './components/Pages/NotFound'; // Import NotFound component
import AdminLayout from './components/Admin/Header/Layout';
import AdminMessage from './Popup/AdminMessage';
import AdminLoginPage from './components/Admin/AdminLoginPage';
import ZoomNotificationPopup from './Popup/ZoomNotificationPopup';
import ImagePopup from './Popup/ImagePopUp';
import Certificates from './Popup/Certificates';
import './App.css';

function App() {
  // Retrieve the token from localStorage
  const token = localStorage.getItem('dorcasmistries');

  // Function to verify if the user is authenticated
  const isAuthenticated = () => {
    return !!token;
  };

  return (
    <div>
      <Router>
        <div>
          <Header />
          <IdeaPopup />
          <div className="h-20" />
          <Routes>
            <Route exact path="/" element={<Banner />} />
            <Route path="/mission" element={<MissionSection />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/history" element={<History />} />
            <Route path="/team" element={<Team />} /> {/* Corrected this path */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificates" element={<Certificates />} />

            <Route path="/ministries" element={<Ministries />} />

            <Route 
              path="/admin" 
              element={isAuthenticated() ? <AdminLayout /> : <Navigate to="/admin/login" />} 
            /> {/* Admin layout */}
            <Route path="/admin/login" element={<AdminLoginPage />} /> {/* Admin login page */}
            <Route path="*" element={<NotFound />} /> {/* Fallback route for 404 */}
          </Routes>
          <AdminMessage /> 
          <ZoomNotificationPopup />  {/* Zoom notification popup */}
          <NotificationPopup />
          <ImagePopup /> {/* Image popup */}
          <div className="h-16" />
          <Footer />
        </div>
      </Router>
    </div> 
  ); 
} 

export default App; 
