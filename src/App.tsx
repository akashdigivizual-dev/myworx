import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import PrivateCabinPage from './pages/PrivateCabinPage';
import DayPassPage from './pages/DayPassPage';
import BookMeetingRoom from './pages/BookMeetingRoom';
import VirtualOfficePage from './pages/VirtualOfficePage';
import VirtualOfficeLandingPage from './pages/VirtualOfficeLandingPage';
import BusinessRegistration from './pages/BusinessRegistration';
import GSTRegistrationPage from './pages/GSTRegistrationPage';
import MailingAddressPage from './pages/MailingAddressPage';
import MyworxPropertyPage from './pages/MyworxPropertyPage';
import AceStarlitPage from './pages/AceStarlitPage';
import ContactFooter from './pages/ContactFooter';
import ManojBio from './pages/ManojBio';
import PankajRathi from './pages/PankajRathi';
import Features from './pages/Features';
import FAQs from './pages/FAQs';
import WhyChooseUs from './pages/WhyChooseUs';
import NoidaSector1Page from './pages/NoidaSector1Page';
import NoidaSector2Page from './pages/NoidaSector2Page';
import NoidaSector3Page from './pages/NoidaSector3Page';
import NoidaSector4Page from './pages/NoidaSector4Page';
import PrivacyPage from './pages/PrivacyPage';

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
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/private-cabin" element={<PrivateCabinPage />} />
          <Route path="/day-pass-coworking" element={<DayPassPage />} />
          <Route path="/book-meeting-room" element={<BookMeetingRoom />} />
          <Route path="/virtual-office" element={<VirtualOfficePage />} />
          <Route path="/virtual-office-landing" element={<VirtualOfficeLandingPage />} />
          <Route path="/business-registration" element={<BusinessRegistration />} />
          <Route path="/gst-registration" element={<GSTRegistrationPage />} />
          <Route path="/mailing-address" element={<MailingAddressPage />} />
          <Route path="/myworx-property" element={<MyworxPropertyPage />} />
          <Route path="/ace-starlit-noida-sector-152-noida" element={<AceStarlitPage />} />
          <Route path="/manoj-kumar-myworx" element={<ManojBio />} />
          <Route path="/pankaj-rathi" element={<PankajRathi />} />
          <Route path="/noida-sector-1" element={<NoidaSector1Page />} />
          <Route path="/noida-sector-2" element={<NoidaSector2Page />} />
          <Route path="/noida-sector-3" element={<NoidaSector3Page />} />
          <Route path="/noida-sector-4" element={<NoidaSector4Page />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
