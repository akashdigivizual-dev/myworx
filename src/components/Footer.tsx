import React from 'react';
import { Facebook, X, Instagram, Linkedin, Pin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10 text-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16" id="locations">
            
            {/* Col 1 */}
            <div>
                <h4 className="text-lg font-medium mb-6">Noida Sector 1</h4>
                <p className="text-gray-400 leading-relaxed mb-6 text-xs">
                    B-8, Sector-1, Next to Sector-15 Metro Station, Noida, UP-201301
                </p>
                <p className="text-gray-400 leading-relaxed text-xs">
                    B-9, Sector-1, Next to Sector-15 Metro Station, Noida, UP-201301
                </p>
            </div>

            {/* Col 2 */}
            <div>
                <h4 className="text-lg font-medium mb-6">Noida Sector 2</h4>
                <p className="text-gray-400 leading-relaxed mb-6 text-xs">
                    A-67, Sector-2, Noida, Next to Sector-15 Metro Station, UP-201301
                </p>
                <p className="text-gray-400 leading-relaxed text-xs">
                    B-7 & 8, Sector-2, Next to Sector-15 Metro Station, Noida, UP-201301
                </p>
            </div>

             {/* Col 3 */}
             <div>
                <h4 className="text-lg font-medium mb-6">Noida Sector 4</h4>
                <p className="text-gray-400 leading-relaxed mb-4 text-xs">
                    A-57, Sector-4, Noida, UP-201301
                </p>
                <p className="text-gray-400 leading-relaxed mb-4 text-xs">
                    A-22, Sector-4, Noida, UP-201301
                </p>
                <p className="text-gray-400 leading-relaxed text-xs">
                    B-6, Sector-4, Noida, UP-201301
                </p>
            </div>

             {/* Col 4 - Newsletter */}
             <div>
                 <h4 className="text-lg font-medium mb-6">Join our Newsletter</h4>
                 <div className="flex flex-col gap-4">
                     <input type="email" placeholder="Your Email Address" className="bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-brand-orange" />
                     <button className="text-left text-brand-orange uppercase font-bold text-xs tracking-widest">Subscribe</button>
                 </div>
             </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-16">
             {/* Logo & Socials */}
             <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                     <span className="text-brand-orange text-3xl font-bold">M</span>
                     <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg">MYWORX</span>
                        <span className="text-[9px] tracking-widest text-gray-500">TECHNOLOGIES</span>
                     </div>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white"><Facebook size={16} /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><X size={16} /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><Instagram size={16} /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={16} /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><Pin size={16} /></a>
                </div>
             </div>

             {/* Head Office */}
             <div className="lg:col-span-1">
                <h4 className="text-white font-bold mb-4 text-base">Head Office</h4>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    B-7 & 8, Sector-2, Next to Sector-15 Metro Station, Noida, UP-201301
                </p>
                <p className="text-white font-bold text-xs mb-1">Call Us :</p>
                <p className="text-gray-300 text-xs mb-2">977-359-3037</p>
                <a href="mailto:contact@myworx.in" className="text-brand-orange text-xs">contact@myworx.in</a>
             </div>

             {/* Useful Links */}
             <div className="lg:col-span-1">
                <h4 className="text-white font-bold mb-4 text-base">Useful Links</h4>
                <ul className="text-gray-400 text-xs space-y-2">
                    <li><a href="/about" className="hover:text-brand-orange">About</a></li>
                    <li><a href="/locations" className="hover:text-brand-orange">Locations</a></li>
                    <li><a href="/faqs" className="hover:text-brand-orange">FAQs</a></li>
                    <li><a href="/privacy" className="hover:text-brand-orange">Privacy</a></li>
                    <li><a href="/contact" className="hover:text-brand-orange">Contact Us</a></li>
                </ul>
             </div>

             {/* Help */}
             <div className="lg:col-span-1">
                <h4 className="text-white font-bold mb-4 text-base opacity-0 lg:opacity-100">Help</h4>
                 <ul className="text-gray-400 text-xs space-y-2">
                    <li><a href="#" className="hover:text-brand-orange">Help & support</a></li>
                    <li><a href="#" className="hover:text-brand-orange">Our Coworking Partner</a></li>
                    <li><a href="https://www.youtube.com/watch?v=Peg4j60bjjY" className="hover:text-brand-orange">Virtual</a></li>
                    <li><a href="#" className="hover:text-brand-orange">Blog</a></li>
                </ul>
             </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500">
            <p>Copyright © 2024 MYWORX. All rights reserved. Designed and Maintained by graphotive.</p>
            <button className="mt-4 lg:mt-0 border border-gray-700 rounded-full p-2 hover:bg-brand-orange hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;