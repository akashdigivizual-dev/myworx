import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselVideo = new URL('../assets/video/carousel_1.mp4', import.meta.url).href;

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={carouselVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Welcome to <span className="text-primary">Myworx</span>
            <br className="hidden md:block" /> Your Smart Coworking Destination
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Pioneering the future of workspace innovation with cutting-edge facilities and a thriving professional community
          </p>
          <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-8 md:px-12 text-sm md:text-base uppercase tracking-widest transition-all transform hover:scale-105 hover:shadow-lg">
            <a href='/contact'> <a href="/contact">BOOK NOW</a></a>
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <button className="bg-white/10 hover:bg-primary text-white p-3 rounded-full backdrop-blur-sm transition-all">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <button className="bg-white/10 hover:bg-primary text-white p-3 rounded-full backdrop-blur-sm transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
