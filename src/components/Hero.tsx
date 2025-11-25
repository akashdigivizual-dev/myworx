import React, { type ReactNode } from 'react';

interface HeroProps {
  title?: string;
  backgroundImage?: string;
  breadcrumbs?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({ 
  title = 'About Us', 
  backgroundImage = "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')",
  breadcrumbs
}) => {
  return (
    <section id="home" className="relative h-[60vh] lg:h-[70vh] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: typeof backgroundImage === 'string' 
            ? backgroundImage.startsWith('url') 
              ? backgroundImage 
              : `url('${backgroundImage}')`
            : backgroundImage
        }}
      ></div>

      <div className="relative z-20 text-center text-white">
        {breadcrumbs && (
          <div className="flex items-center justify-center space-x-2 text-xs font-bold tracking-widest uppercase mb-4 text-gray-300">
            {breadcrumbs}
          </div>
        )}
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">{title}</h1>
      </div>
    </section>
  );
};

export default Hero;