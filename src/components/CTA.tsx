import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gray-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      {/* Optional Background Image for CTA */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center grayscale"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop')" }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          Join MyWorx and redefine the future of work.
        </h2>
        <p className="text-gray-200 mb-10 max-w-3xl mx-auto text-sm lg:text-base leading-relaxed">
            Get flexible workspaces at the best prices with MyWorx. Our modern environments are thoughtfully designed 
            to empower startups, freelancers, and enterprises to perform at their best. With dedicated support, 
            advanced technology, and exceptional service, we create a dynamic setting that fosters collaboration and growth.
        </p>
        <button className="bg-brand-orange text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-orange transition-colors shadow-lg">
           <a href="/locations"> Find A Workspace</a>
        </button>
      </div>
    </section>
  );
};

export default CTA;