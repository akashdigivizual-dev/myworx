import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import PrivateCabinPage from './pages/PrivateCabinPage';
import DayPassPage from './pages/DayPassPage';
import ContactFooter from './pages/ContactFooter';
import ManojBio from './pages/ManojBio';
import PankajRathi from './pages/PankajRathi';

// 404 Page
const NotFound: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600">Page not found</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/private-cabin" element={<PrivateCabinPage />} />
          <Route path="/day-pass-coworking" element={<DayPassPage />} />
          <Route path="/manoj-kumar-myworx" element={<ManojBio />} />
          <Route path="/pankaj-rathi" element={<PankajRathi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
