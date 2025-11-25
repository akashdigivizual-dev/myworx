import React from 'react';

const testimonials = [
  {
    quote: "An awesome coworking space for businesses, offering all essential facilities, modern interiors, and a productive environment that encourages growth and success.",
    author: "Shrishti Patil",
    role: "Coworker",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "A vibrant coworking space with a beautiful ambiance and exceptional service from MyWorx. Experience top-notch facilities, quick assistance, and a motivating environment.",
    author: "Ashish Sharma",
    role: "Coworker",
    image: "https://randomuser.me/api/portraits/men/32.jpg" // Featured centered one usually
  },
  {
    quote: "Experience a vibrant ambiance with a modern cafeteria and inspiring coworking space for professionals. Enjoy premium amenities and comfort.",
    author: "Paramveer Hudda",
    role: "Coworker",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
        <h4 className="text-brand-orange font-bold tracking-widest text-xs mb-2 uppercase">Clients Talk</h4>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Trusted by Industry Leaders</h2>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
                key={index} 
                className={`p-8 border border-gray-100 bg-white flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg ${index === 1 ? 'md:-mt-4 shadow-md border-none ring-1 ring-gray-100' : ''}`}
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mb-6">
                 {/* Placeholder avatar icon if image fails or using icons */}
                 <img src={item.image} alt={item.author} className="w-full h-full object-cover opacity-80 hover:opacity-100" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              <div>
                <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wide">{item.author}</h5>
                <span className="text-xs text-gray-400 font-light">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots navigation simulation */}
        <div className="flex justify-center gap-2 mt-10">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;