import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronUp } from 'lucide-react';

const ContactFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-16 md:pt-20 pb-6 border-t border-gray-800 relative">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
                {/* Column 1: Noida Sector 1 */}
                <div>
                    <h4 className="text-base md:text-lg font-medium mb-6 text-gray-100">Noida Sector 1</h4>
                    <p className="text-gray-400 text-xs leading-loose">
                        B-8, Sector-1, Next to Sector-15 Metro Station, Noida, UP-201301
                    </p>
                    <p className="text-gray-400 text-xs leading-loose mt-4">
                        B-9, Sector-1, Next to Sector-15 Metro Station, Noida, UP-201301
                    </p>
                     {/* Logo */}
                    <div className="mt-8">
                        <div className="font-bold text-2xl tracking-tighter flex flex-col leading-none">
                            <span className="text-white">My<span className="text-primary">Worx</span></span>
                            
                        </div>
                        {/* Socials */}
                        <div className="flex space-x-4 text-gray-400 mt-4">
                            <a href="https://www.facebook.com/myworxnoida" className="hover:text-white transition-colors"><Facebook size={16} /></a>
                            <a href="https://x.com/Myworxnoida" className="hover:text-white transition-colors"><Twitter size={16} /></a>
                            <a href="https://www.instagram.com/myworxnoida/" className="hover:text-white transition-colors"><Instagram size={16} /></a>
                            <a href="https://www.linkedin.com/company/myworx/" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
                        </div>
                    </div>
                </div>

                {/* Column 2: Noida Sector 2 & Head Office */}
                <div>
                    <h4 className="text-lg font-medium mb-6 text-gray-100">Noida Sector 2</h4>
                    <p className="text-gray-400 text-xs leading-loose mb-8">
                        A-67, Sector-2, Noida, Next to Sector-15 Metro Station, UP-201301
                    </p>
                     <p className="text-gray-400 text-xs leading-loose mb-8">
                        B-7 & 8, Sector-2, Next to Sector-15 Metro Station, Noida, UP-201301
                    </p>

                    <h4 className="text-lg font-medium mb-4 text-gray-100">Head Office</h4>
                    <p className="text-gray-400 text-xs leading-loose">
                         B-7 & 8, Sector-2, Next to Sector-15 Metro Station, Noida, UP-201301
                    </p>
                     <div className="mt-4 text-xs">
                        <p className="text-gray-300 font-bold">Call Us :</p>
                        <p className="text-white font-bold">977-359-3037</p>
                        <a href="mailto:contact@Myworx.in" className="text-primary hover:underline mt-1 block">contact@Myworx.in</a>
                    </div>
                </div>

                 {/* Column 3: Noida Sector 4 & Useful Links */}
                 <div>
                    <h4 className="text-lg font-medium mb-6 text-gray-100">Noida Sector 4</h4>
                     <p className="text-gray-400 text-xs leading-loose mb-4">
                        A-57, Sector-4, Noida, UP-201301
                    </p>
                     <p className="text-gray-400 text-xs leading-loose mb-8">
                        A-22, Sector-4, Noida, UP-201301
                    </p>
                    <p className="text-gray-400 text-xs leading-loose mb-8">
                        B-6, Sector-4, Noida, UP-201301
                    </p>

                    <h4 className="text-lg font-medium mb-4 text-gray-100">Useful Links</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-400">
                        <a href="/about" className="hover:text-primary transition-colors">About</a>
                        <a href="#" className="hover:text-primary transition-colors">Help & support</a>
                        <a href="/locations" className="hover:text-primary transition-colors">Locations</a>
                        <a href="#" className="hover:text-primary transition-colors">Our Coworking Partner</a>
                        <a href="#" className="hover:text-primary transition-colors">FAQs</a>
                        <a href="#" className="hover:text-primary transition-colors">Virtual</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Blog</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
                    </div>
                </div>

                 {/* Column 4: Newsletter */}
                 <div>
                    <h4 className="text-lg font-medium mb-6 text-gray-100">Join our Newsletter</h4>
                    <div className="flex flex-col space-y-4">
                        <input type="email" placeholder="Email address" className="bg-gray-800 text-white px-4 py-3 outline-none text-xs w-full border border-gray-700 focus:border-primary transition-colors" />
                        <button className="bg-primary px-4 py-3 text-white font-bold text-xs uppercase hover:bg-orange-600 transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="text-center pt-8 border-t border-gray-800 text-[10px] text-gray-500 flex justify-center items-center relative">
                <p>Copyright © {new Date().getFullYear()} <span className="text-white font-bold">Myworx</span>. All rights reserved. Designed and Maintained by <span className="font-bold text-white">AARTI</span>.</p>
                
                <button 
                  onClick={scrollToTop}
                  className="absolute right-0 bottom-0 w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                  <ChevronUp size={16} />
                </button>
            </div>
        </div>
      </footer>
  );
};

export default ContactFooter;