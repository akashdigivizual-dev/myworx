import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronRight, ChevronDown } from 'lucide-react';
import BookVisitModal from '../components/BookVisitModal';

const logoImg = new URL('../assets/image.png', import.meta.url).href;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [mobileServiceExpanded, setMobileServiceExpanded] = useState(false);
  const [isBookVisitModalOpen, setIsBookVisitModalOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceMenuData: Record<string, { name: string; path: string }[]> = {
    "Coworking Space": [
      { name: "Private Cabin Space In Noida", path: "/private-cabin" },
      { name: "Book Meeting Room", path: "/book-meeting-room" },
      { name: "Day Pass Coworking Space in Noida", path: "/day-pass-coworking" }
    ],
    "Virtual Office": [
      { name: "Business Registration", path: "/business-registration" },
      { name: "GST Registration", path: "/gst-registration" },
      { name: "Mailing Address", path: "/mailing-address" }
    ]
  };

  // Main menu paths for category headers
  const mainMenuPaths: Record<string, string> = {
    "Coworking Space": "",
    "Virtual Office": "/virtual-office"
  };

  const [activeServiceCategory, setActiveServiceCategory] = useState('Coworking Space');

  const navLinkClasses = (isActive = false) => `
    text-sm font-bold uppercase tracking-wide transition-all duration-300 relative group flex items-center cursor-pointer
    ${isScrolled ? 'text-white hover:text-primary' : 'text-white/90 hover:text-primary'}
    ${isActive ? 'text-primary' : ''}
  `;

  const NavUnderline = () => (
    <span className="absolute -bottom-6 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-6'
      }`}
    >
      {/* Top Bar Info */}
      <div className={`hidden md:flex justify-end container mx-auto px-6 mb-2 text-xs font-medium transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 text-white/80'}`}>
         <div className="flex items-center mr-8 hover:text-white transition-colors cursor-pointer">
            <Phone size={14} className="mr-2 text-primary" /> +91 977-359-3037
         </div>
         <div className="flex items-center hover:text-white transition-colors cursor-pointer">
            <MapPin size={14} className="mr-2 text-primary" /> Sector-2, Noida
         </div>
      </div>

      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center group z-50">
          <div className={`font-bold text-2xl tracking-tighter flex flex-col leading-none transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
            <span className="group-hover:translate-x-1 transition-transform"><img src={logoImg} alt="Myworx_logo" className="h-16 w-auto" /></span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 h-full">
          <Link to="/" className={navLinkClasses()}>
            Home
            <NavUnderline />
          </Link>
          
          <Link to="/about" className={navLinkClasses()}>
            About Us
            <NavUnderline />
          </Link>

          <Link to="/locations" className={navLinkClasses()}>
            Locations
            <NavUnderline />
          </Link>

          <Link to="/virtual-office-landing" className={navLinkClasses()}>
            Virtual Office
            <NavUnderline />
          </Link>

          <Link to="/price" className={navLinkClasses()}>
            Price
            <NavUnderline />
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <div className={navLinkClasses(isServicesHovered)}>
              Services
              <ChevronDown size={16} className={`ml-2 transition-transform ${isServicesHovered ? 'rotate-180' : ''}`} />
              <NavUnderline />
            </div>

            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-[-50px] mt-4 w-[650px] bg-white shadow-2xl flex transform transition-all duration-300 origin-top-left border-t-2 border-primary ${
                isServicesHovered ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}
            >
              {/* Left Sidebar (Categories) - Now clickable */}
              <div className="w-5/12 bg-gray-50 py-4 border-r border-gray-100">
                {Object.keys(serviceMenuData).map((category) => (
                  <Link
                    key={category}
                    to={mainMenuPaths[category]}
                    className={`px-6 py-4 flex justify-between items-center cursor-pointer transition-all duration-200 block ${
                      activeServiceCategory === category 
                        ? 'bg-white text-primary font-bold border-l-4 border-primary shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onMouseEnter={() => setActiveServiceCategory(category)}
                  >
                    <span className={`text-sm ${activeServiceCategory === category ? 'font-bold' : 'font-medium'}`}>{category}</span>
                    {activeServiceCategory === category && <ChevronRight size={16} />}
                  </Link>
                ))}
              </div>

              {/* Right Content (Items) */}
              <div className="w-7/12 p-6 bg-white">
                <h4 className="text-gray-900 font-bold text-base mb-4 pb-2 border-b border-gray-100">
                  {activeServiceCategory}
                </h4>
                <ul className="space-y-3">
                  {serviceMenuData[activeServiceCategory].map((item, index) => (
                    <li 
                      key={index} 
                      className="group flex items-center cursor-pointer"
                    >
                      <Link to={item.path} className="text-sm text-gray-500 font-medium group-hover:text-primary transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link to="/contact" className={navLinkClasses()}>
            Contact
            <NavUnderline />
          </Link>

          <Link to="/myworx-property" className={navLinkClasses()}>
            My Worx Property
            <NavUnderline />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => setIsBookVisitModalOpen(true)}
            className={`border-2 px-5 py-1.5 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 rounded-md ${
              isScrolled 
              ? 'border-primary text-primary hover:bg-primary hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-primary'
          }`}>
            Book Visit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors relative z-50 p-2 ${isScrolled ? 'text-white' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-screen h-screen bg-black/95 backdrop-blur-sm z-[9999] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-20 px-4 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close button area with logo space */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-12 flex items-center">
            <img src={logoImg} alt="Myworx_logo" className="h-full w-auto" />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <Link to="/" className="text-lg sm:text-xl font-bold text-white py-3 border-b border-white/20 flex justify-between items-center hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          Home
          <ChevronRight size={18} className="text-primary" />
        </Link>
        <Link to="/about" className="text-lg sm:text-xl font-bold text-white py-3 border-b border-white/20 flex justify-between items-center hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          About Us
          <ChevronRight size={18} className="text-primary" />
        </Link>
        <Link to="/locations" className="text-lg sm:text-xl font-bold text-white py-3 border-b border-white/20 flex justify-between items-center hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          Locations
          <ChevronRight size={18} className="text-primary" />
        </Link>

        <Link to="/price" className="text-lg sm:text-xl font-bold text-white py-3 border-b border-white/20 flex justify-between items-center hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          Price
          <ChevronRight size={18} className="text-primary" />
        </Link>
        
        {/* Mobile Services Accordion */}
        <div className="border-b border-white/20">
          <div 
            className="text-lg sm:text-xl font-bold text-white py-3 flex justify-between items-center cursor-pointer hover:text-primary transition-colors"
            onClick={() => setMobileServiceExpanded(!mobileServiceExpanded)}
          >
            Services 
            <ChevronDown size={18} className={`text-primary transition-transform ${mobileServiceExpanded ? 'rotate-180' : ''}`} />
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${mobileServiceExpanded ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
            {Object.keys(serviceMenuData).map(cat => (
              <div key={cat} className="mb-3">
                {/* Clickable category header */}
                <Link 
                  to={mainMenuPaths[cat]} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-bold text-primary mb-2 block hover:text-orange-400 transition-colors"
                >
                  {cat}
                </Link>
                <ul className="pl-4 border-l-2 border-primary/40 space-y-2">
                  {serviceMenuData[cat].map(item => (
                    <li key={item.name} className="text-sm sm:text-base text-white/80">
                      <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link to="/contact" className="text-lg sm:text-xl font-bold text-white py-3 border-b border-white/20 flex justify-between items-center hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          Contact
          <ChevronRight size={18} className="text-primary" />
        </Link>

        <Link to="/myworx-property" className="text-lg sm:text-xl font-bold text-white py-3 border-b border-white/20 flex justify-between items-center hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          My Worx Property
          <ChevronRight size={18} className="text-primary" />
        </Link>
        
        <button 
          onClick={() => {
            setIsBookVisitModalOpen(true);
            setIsMobileMenuOpen(false);
          }}
          className="mt-6 mb-4 bg-primary text-white py-3 text-sm sm:text-base font-bold uppercase tracking-widest shadow-lg rounded-lg w-full hover:bg-orange-600 transition-colors duration-200"
        >
          Book a Visit
        </button>
      </div>

      {/* Book Visit Modal */}
      <BookVisitModal 
        isOpen={isBookVisitModalOpen}
        onClose={() => setIsBookVisitModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
