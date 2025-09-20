import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IndividualTherapyDetails from './pages/IndividualTherapyDetails';
import CouplesTherapyDetails from './pages/CouplesTherapyDetails';
import FamilyTherapyDetails from './pages/FamilyTherapyDetails';
import TeamProfile from './pages/TeamProfile';
import FeesPage from './pages/FeesPage';
import ApproachPage from './pages/ApproachPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/individual-therapy" element={<IndividualTherapyDetails />} />
            <Route path="/services/couples-therapy" element={<CouplesTherapyDetails />} />
            <Route path="/services/family-therapy" element={<FamilyTherapyDetails />} />
            <Route path="/team/:slug" element={<TeamProfile />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;