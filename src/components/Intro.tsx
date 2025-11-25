import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h4 className="text-brand-orange font-bold tracking-widest text-sm mb-4 uppercase">What is MyWorx?</h4>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Where Potential Takes Flight: Your Best Work Thrives at Our Coworking Space.
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Best Coworking Space In NOIDA</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                MyWorx offers fully equipped and flexible coworking spaces in the prime locations of Noida. 
                Designed for professionals, startups, and growing teams, our workspaces feature modern interiors, 
                vibrant community areas, and top-tier amenities. From high-speed internet to ergonomic furniture 
                and dedicated meeting zones, every detail enhances productivity and comfort.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">MyWorx – Creative Coworking Space Noida</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                MyWorx offers a dedicated coworking space for small business owners, large multinational corporations, 
                freelancers, and remote professionals. Our thoughtfully designed workspaces spark creativity, 
                collaboration, and productivity while adapting perfectly to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;