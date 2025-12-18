import React from 'react';
import { ArrowRight } from 'lucide-react';


const carouselVideo = new URL('../assets/video/carousel_1.mp4', import.meta.url).href;

const HeroSlider: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={carouselVideo} type="video/mp4" />
        </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Welcome to <span className="text-primary">Myworx</span>
            <br className="hidden sm:block" /> Your Smart Coworking Destination
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 px-2 sm:px-0">Pioneering the future of workspace innovation with cutting-edge facilities and a thriving professional community</p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-12 rounded-lg transition-colors text-sm sm:text-lg border-2 border-primary"
          >
            BOOK NOW
          </a>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute bottom-20 left-0 w-40 h-40 bg-white rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-orange-600 rounded-full opacity-20"></div>
    </div>
  );
};

export default HeroSlider;
