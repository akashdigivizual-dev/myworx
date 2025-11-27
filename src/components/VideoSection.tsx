import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Use local image for background
  const backgroundImage = new URL('../assets/locations/D99_Sector2.JPG', import.meta.url).href;

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.3); // Parallax effect
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden stretched-section bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Parallax Background Container */}
      <div 
        className="absolute inset-0 z-0 opacity-0"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 0%',
          backgroundRepeat: 'no-repeat',
          transform: `translate3d(0px, ${scrollOffset}px, 0px)`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex items-center justify-center w-full h-screen">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center">
          <div className="w-full max-w-2xl">
            {/* Video Popup Wrapper */}
            <div className="video-wrapper behub-video-popup">
              <button
                onClick={handleVideoClick}
                className="relative w-full h-auto group block focus:outline-none transition-all duration-300"
                aria-label="Play video"
                role="button"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src={backgroundImage}
                    alt="Video Thumbnail" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50">
                      <Play 
                        className="ml-1 text-primary fill-primary" 
                        size={48} 
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal - Hidden by default */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl mx-4 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube Embed */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Peg4j60bjjY?autoplay=1"
              title="Myworx Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>

            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm z-60"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;