import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aarti Chaudhary",
    role: "Web Developer",
    content: "One of the best coworking spaces in Noida featuring well-maintained interiors and reliable internet connectivity. Truly appreciate the hospitality and constant support of the staff.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Simran Yadav",
    role: "Marketing Coordinator",
    content: "Great coworking experience at Myworx! It's truly one of the best spaces for startups. Harshit is always available assisting with any issue. Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Aashish Talwar",
    role: "Operation Manager",
    content: "Exceptional experience. It's not just a desk, it's a community where ideas are shared and partnerships are built. The innovation hub atmosphere is unbeatable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

// const clients = [
//   "graphotive", "SC", "accessdot", "APNAPAISA", "OUS", "DHALERP", "FIN"
// ];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white">
      
      {/* CTA Banner */}
      <div className="bg-gray-600 py-12 md:py-16 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10">
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-2">Join Myworx and redefine the<br/>future of work.</h2>
             <p className="text-gray-300 text-xs md:text-sm max-w-4xl mx-auto mb-8 leading-relaxed px-4">
               Get flexible workspaces at the best prices with Myworx. Our modern environments are thoughtfully designed to empower startups, freelancers, and enterprises to perform at their best. With dedicated support, advanced technology, and exceptional service, we create a dynamic setting that fosters collaboration and growth. Enjoy access to premium amenities, vibrant community zones, and fully customizable office solutions tailored to your business needs. Whether you're scaling a small team or managing a growing company, Myworx ensures comfort, productivity, and success every single day. Experience seamless networking, elegant interiors, inspiring design, and a professional atmosphere that transforms the way you work.
             </p>
             <button className="bg-primary hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-widest py-3 px-8 rounded-sm transition-all">
                Find a Workspace
             </button>
         </div>
      </div>

      {/* Testimonials Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">CLIENTS TALK</h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-6 md:p-10 rounded-none border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                   
                    <div className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed italic mb-6">
                        "{t.content}"
                    </p>

                    <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase">{t.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-widest">{t.role}</span>
                </div>
            ))}
        </div>

        {/* Client Logos */}
        {/* <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-20 opacity-50 border-t border-gray-100 pt-12">
           {clients.map((client, i) => (
             <span key={i} className="text-base md:text-lg lg:text-xl font-bold text-gray-800 uppercase tracking-tighter hover:text-primary cursor-default transition-colors">
               {client}
             </span>
           ))}
        </div> */}

        {/* Pagination Dots (Visual Only) */}
        <div className="flex justify-center space-x-2 mt-12">
           <span className="w-2 h-2 rounded-full bg-primary"></span>
           <span className="w-2 h-2 rounded-full bg-gray-200"></span>
           <span className="w-2 h-2 rounded-full bg-gray-200"></span>
           <span className="w-2 h-2 rounded-full bg-gray-200"></span>
           <span className="w-2 h-2 rounded-full bg-gray-200"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;