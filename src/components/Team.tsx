import React from 'react';
import { Facebook, Instagram, Plus } from 'lucide-react';

// Import team images
const pankajRathiImg = new URL('../assets/PankajRathi.jpg', import.meta.url).href;
const manojKumarImg = new URL('../assets/manojKumar.jpg', import.meta.url).href;

const Team: React.FC = () => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10">
            <div className="mb-2">
                <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">our team</p>
            </div>
            <div>
                <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Driving Innovation One Space at a Time.
                </h4>
            </div>
        </div>

        {/* Inner Section */}
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Team Grid */}
            <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Team Member 1 */}
                    <div className="flex flex-col group">
                        <div className="mb-5 overflow-hidden relative rounded-lg">
                              <a href="/pankaj-rathi" onClick={(e) => handleNav(e, '/pankaj-rathi')}>
                                <img 
                                    src={pankajRathiImg}
                                    alt="Pankaj Rathi" 
                                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                             </a>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Pankaj Rathi</h3>
                            <p className="text-gray-500 text-sm mb-3">Founder & Director</p>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/pankaj.rathi.127" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                                    <Facebook size={16} />
                                </a>
                                <a href="https://www.instagram.com/pannkaj_rathhi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                                    <Instagram size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 - Manoj Kumar */}
                    <div className="flex flex-col group cursor-pointer">
                        <div className="mb-5 overflow-hidden relative rounded-lg">
                             <a href="/manoj-kumar-myworx" onClick={(e) => handleNav(e, '/manoj-kumar-myworx')}>
                                <img 
                                    src={manojKumarImg}
                                    alt="Manoj Kumar" 
                                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                             </a>
                        </div>
                        <div>
                            <a href="/manoj-kumar-myworx" onClick={(e) => handleNav(e, '/manoj-kumar-myworx')} className="hover:text-brand-orange transition-colors">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Manoj Kumar</h3>
                            </a>
                            <p className="text-gray-500 text-sm mb-3">Founder & Director</p>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/manojelectra0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                                    <Facebook size={16} />
                                </a>
                                <a href="https://www.instagram.com/iamrajput_07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                                    <Instagram size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Join Community Icon Box */}
            <div className="hidden lg:flex w-1/2 items-start justify-center pt-10">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                         <a href="/contact" onClick={(e) => handleNav(e, '/contact')} className="flex items-center justify-center w-24 h-24 rounded-full border-2 border-transparent bg-[#f39c12] text-white hover:bg-black transition-all duration-300 shadow-md">
                            <Plus size={32} />
                         </a>
                    </div>
                    <div className="max-w-xs">
                         <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            <a href="/contact" onClick={(e) => handleNav(e, '/contact')} className="hover:text-[#f39c12] transition-colors">Join Our Community</a>
                         </h3>
                         <p className="text-gray-500 text-base mb-4 leading-relaxed">
                            Dream bigger, achieve more: Join the Myworx community
                         </p>
                         <p className="font-bold text-gray-900 uppercase text-sm tracking-wider">
                            COLLABORATE WITH US
                         </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Team;