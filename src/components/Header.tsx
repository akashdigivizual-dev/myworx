import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Locations', href: '/locations' },
    { name: 'Services', href: '/services' },
  ];

  const isHome = currentPath === '/';
  const headerClass = isHome && !isScrolled 
    ? 'bg-transparent py-4' 
    : 'bg-black/90 backdrop-blur-md py-2 shadow-md';

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      style={{ overflow: 'hidden' }}
    >
      <div className="w-full px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center gap-2 sm:gap-4">
          {/* Logo */}
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center group flex-shrink-0">
            <div className="flex flex-col items-start">
               <div className="text-white font-bold text-sm sm:text-lg md:text-2xl tracking-tighter flex items-center gap-1 sm:gap-2">
                  <span className="text-brand-orange text-xl sm:text-2xl md:text-4xl group-hover:scale-110 transition-transform">M</span>
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] sm:text-xs md:text-base">MYWORX</span>
                    <span className="text-[7px] sm:text-[8px] md:text-[10px] font-light tracking-widest text-gray-400">COWORKING</span>
                  </div>
               </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                  currentPath === item.href ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex flex-col items-end text-white">
                <div className="flex items-center gap-2 text-brand-orange font-bold">
                    <Phone size={16} />
                    <span>977-359-3037</span>
                </div>
            </div>
            <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="border-2 border-white text-white px-6 py-2 text-sm font-bold hover:bg-brand-orange hover:border-brand-orange transition-all uppercase tracking-widest">
               • Book A Visit •
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white ml-auto flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 p-4 sm:p-6 flex flex-col space-y-4 shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-white text-lg font-medium hover:text-brand-orange"
            >
              {item.name}
            </a>
          ))}
           <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="w-full bg-brand-orange text-white py-3 font-bold uppercase text-center block">
                Book A Visit
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;