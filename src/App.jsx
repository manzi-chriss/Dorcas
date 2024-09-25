import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/TopBar/TopBar';
import Banner from './components/Banner/Banner';
import About from './components/Pages/About';
import Gallery from './components/Pages/Gallery';
import History from './components/Pages/History';
import Mission from './components/Pages/Mission';
import Team from './components/Pages/Team';
import Vision from './components/Pages/Vision';
import Videos from './components/Pages/Videos';
import NotificationPopup from './Popup/PopUp';
import IdeaPopup from './Popup/IdeaPopUp';
import Ministries from './components/Pages/Ministries';
import Footer from './components/Footer/Footer';
import './App.css';
import { div } from 'framer-motion/client';

function App() {
  return (
    <div>
    
    <Router>
      <div>
        <Header />
        <IdeaPopup />
        <div className="h-18" />
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/history" element={<History />} />
          <Route path="//team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
        </Routes>
        <NotificationPopup />
        <div className="h-16" />
        <Mission/>
       <Vision/>
        <Footer />
      </div>
    </Router>
    
    
    </div>
  );
}

export default App;