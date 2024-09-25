import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import './App.css';

function App() {
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
            <Route path="/ministries" element={<Ministries />} />
            <Route path="*" element={<NotFound />} /> {/* Fallback route for 404 */}
          </Routes>
          <NotificationPopup />
          <div className="h-16" />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
