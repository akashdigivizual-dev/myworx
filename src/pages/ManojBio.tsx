import React from 'react';
import Hero from '../components/Hero';
const manojKumarImg = new URL('../assets/manojKumar.jpg', import.meta.url).href;

const ManojBio: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero 
        title="Manoj Kumar" 
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2674&auto=format&fit=crop"
        breadcrumbs={
          <>
             <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('popstate')); }} className="hover:text-white">Home</a>
             <span>&gt;</span>
             <span className="text-brand-orange">Manoj Kumar</span>
          </>
        }
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column: Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={manojKumarImg} 
                  alt="Manoj Kumar" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Bio Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">Manoj Kumar</h1>
              <h2 className="text-base font-bold text-gray-800 mb-8 border-l-4 border-brand-orange pl-4">
                Young Entrepreneur | Founder and Director – Myworx Zone Pvt Ltd
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                <p>
                  Greetings! I'm <strong>Manoj Kumar</strong> a young entrepreneur steering the ship as the <strong>Founder and Managing Director of Myworx Zone Pvt Ltd</strong>. Our company specializes in providing innovative <strong>coworking spaces in Noida</strong>, creating environments that inspire collaboration and productivity. <strong>Manoj Kumar</strong> are both a robust background of 15 years, expertise spans across project planning, execution, manpower management, and cutting-edge automation technology.
                </p>
                <p>
                  Myworx Zone is not just a workspace provider; it's a hub for innovation and professional growth. In the fast-paced world of technology, I find joy in listening to the voices of the tech community. It's this commitment to understanding the needs of our clients and staying ahead of industry trends that sets Myworx Zone apart.
                </p>
                <p>
                  Join us at <strong>Myworx</strong>, where we're not just offering <strong>coworking spaces</strong>; we're fostering a community that thrives on innovation and collaboration. Let's redefine the way you work!
                </p>
              </div>

              <div className="mt-10 p-6 bg-gray-50 border-l-4 border-brand-orange italic text-gray-700 font-medium">
                "Any time is a good time to start your journey"
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManojBio;