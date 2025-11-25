import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-10 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for partner logos */}
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-8 h-8 bg-purple-500 rounded-full"></div> CEVIOUS</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-8 h-8 bg-blue-500 rounded-full"></div> DEAL ERP</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-8 h-8 bg-blue-800 rounded-full"></div> FINBUD</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2"><div className="w-8 h-8 bg-green-500 rounded-full"></div> GROWTH TRACK</div>
        </div>
    </section>
  );
};

export default Partners;