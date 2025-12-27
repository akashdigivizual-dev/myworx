import React from 'react';
import { Video } from 'lucide-react';
const sector_2 = new URL('../assets/locations/book-meeting-room.jpg', import.meta.url).href;

const VirtualTour: React.FC = () => {
  return (
    <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: `url("${sector_2}")`}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Video className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Take a Virtual Tour</h2>
          <p className="text-xl text-gray-100 mb-8">Take a 360 view of the workspace</p>
          <a
            href="https://www.youtube.com/watch?v=Peg4j60bjjY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Watch Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
