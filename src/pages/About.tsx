// import React from 'react';
// import { Play, Users, Laptop, Lightbulb, Plus } from 'lucide-react';

// const About: React.FC = () => {
//   return (
//     <section id="about-us" className="bg-white">
//       {/* Page Header - Simulating the 'Home > About Us' look from screenshot */}
//       <div className="relative h-[60vh] md:h-[80vh] lg:h-[100vh] w-full bg-black overflow-hidden">
//         <img 
//           src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
//           alt="Office Header" 
//           className="w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
//           <div className="text-xs md:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
//             <span className="text-primary">Home</span> 
//             <span className="text-xs text-gray-400">&gt;</span> 
//             <span>About Us</span>
//           </div>
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">About Us</h1>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        
//         {/* Intro Section */}
//         <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-24">
//           <div className="lg:w-1/2">
//             <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">WHAT IS Myworx?</h4>
//             <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//               Where Potential Takes Flight: Your Best Work Thrives at Our Coworking Space.
//             </h2>
//           </div>
//           <div className="lg:w-1/2 space-y-6 md:space-y-8">
//             <div>
//               <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Best Coworking Space In NOIDA</h3>
//               <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
//                 Myworx offers fully equipped and flexible coworking spaces in the prime locations of Noida. Designed for professionals, startups, and growing teams, our workspaces feature modern interiors, vibrant community areas, and top-tier amenities. From high-speed internet to ergonomic furniture and dedicated meeting zones, every detail enhances productivity and comfort. Experience a premium coworking space that inspires innovation, networking, and success—all under one roof at Myworx.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Myworx – Creative Coworking Space Noida</h3>
//               <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
//                 Myworx offers a dedicated coworking space for small business owners, large multinational corporations, freelancers, and remote professionals. Our thoughtfully designed workspaces spark creativity, collaboration, and productivity while adapting perfectly to your needs. Enjoy end-to-end physical and virtual office solutions with 360° support, modern interiors, and top-tier amenities. From high-speed internet and ergonomic furniture to networking opportunities and community events, Myworx creates an inspiring environment where innovation thrives and success grows every day.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24 border-t border-b border-gray-100 py-8 md:py-12">
//           <div className="px-2 md:px-4 border-r border-gray-100 last:border-0">
//             <div className="text-primary text-3xl md:text-4xl lg:text-5xl font-light mb-2">3+</div>
//             <div className="font-bold text-gray-900 text-sm md:text-base mb-1">Years of Operations</div>
//             <p className="text-xs text-gray-500 leading-relaxed">Spaces designed by experts to inspire your best work.</p>
//           </div>
//           <div className="px-2 md:px-4 border-r border-gray-100 last:border-0">
//             <div className="text-primary text-3xl md:text-4xl lg:text-5xl font-light mb-2">4+</div>
//             <div className="font-bold text-gray-900 text-sm md:text-base mb-1">Prime Locations</div>
//             <p className="text-xs text-gray-500 leading-relaxed">Work at prime locations in Noida's dynamic business environment.</p>
//           </div>
//           <div className="px-2 md:px-4 border-r border-gray-100 last:border-0">
//             <div className="text-primary text-3xl md:text-4xl lg:text-5xl font-light mb-2">01</div>
//             <div className="font-bold text-gray-900 text-sm md:text-base mb-1">Main Cities</div>
//             <p className="text-xs text-gray-500 leading-relaxed">Work in Noida's top business hub, the center for growing enterprises.</p>
//           </div>
//           <div className="px-2 md:px-4 border-r border-gray-100 last:border-0">
//             <div className="text-primary text-3xl md:text-4xl lg:text-5xl font-light mb-2">1500+</div>
//             <div className="font-bold text-gray-900 text-sm md:text-base mb-1">Seating Capacity</div>
//             <p className="text-xs text-gray-500 leading-relaxed">We offer flexible seating for individuals, startups, and teams to work efficiently and grow seamlessly.</p>
//           </div>
//         </div>

//         {/* Video Section */}
//         <div className="relative w-full h-64 md:h-80 lg:h-[500px] bg-gray-200 mb-16 md:mb-24 overflow-hidden group rounded-sm">
//           <img 
//             src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop" 
//             alt="Coworking Interior" 
//             className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
//               <Play className="w-6 md:w-8 h-6 md:h-8 text-primary ml-1 fill-current" />
//             </div>
//           </div>
//         </div>

//         {/* Core Values */}
//         <div className="mb-16 md:mb-24">
//           <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">CORE VALUES</h4>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 max-w-2xl">
//             Dynamic Coworking Space Solutions for Modern Businesses.
//           </h2>
//           <p className="text-gray-600 mb-12 md:mb-16 max-w-4xl text-xs md:text-sm leading-relaxed">
//             Myworx offers innovative coworking space solutions designed for startups, freelancers, and enterprises. Located in prime areas of Noida, our workspaces combine flexibility, functionality, and modern design. With premium amenities like high-speed WiFi, ergonomic seating, and smart meeting rooms, we create an inspiring environment that enhances productivity and collaboration. Our coworking spaces promote networking, creativity, and growth, providing everything professionals need to succeed. Whether you need a private cabin or shared desk, Myworx ensures comfort, community, and convenience—empowering you to work smarter, connect better, and grow faster every day.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {/* Community */}
//             <div className="text-center">
//               <div className="flex justify-center mb-6">
//                 <Users className="w-12 md:w-16 h-12 md:h-16 text-primary stroke-1" />
//               </div>
//               <h3 className="text-base md:text-xl font-bold uppercase tracking-widest mb-3">COMMUNITY</h3>
//               <p className="text-xs text-gray-500 px-2 md:px-4 mb-6 md:mb-8">
//                 An environment that fosters collaboration, networking, and inspires innovation.
//               </p>
//               <div className="h-40 md:h-48 overflow-hidden rounded-sm">
//                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Community" />
//               </div>
//             </div>

//              {/* Flexibility */}
//              <div className="text-center">
//               <div className="flex justify-center mb-6">
//                 <Laptop className="w-12 md:w-16 h-12 md:h-16 text-primary stroke-1" />
//               </div>
//               <h3 className="text-base md:text-xl font-bold uppercase tracking-widest mb-3">FLEXIBILITY</h3>
//               <p className="text-xs text-gray-500 px-2 md:px-4 mb-6 md:mb-8">
//                 Adaptable and scalable workspace solutions tailored to each client's unique needs.
//               </p>
//               <div className="h-40 md:h-48 overflow-hidden rounded-sm">
//                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Flexibility" />
//               </div>
//             </div>

//              {/* Innovation */}
//              <div className="text-center">
//               <div className="flex justify-center mb-6">
//                 <Lightbulb className="w-12 md:w-16 h-12 md:h-16 text-primary stroke-1" />
//               </div>
//               <h3 className="text-base md:text-xl font-bold uppercase tracking-widest mb-3">INNOVATION</h3>
//               <p className="text-xs text-gray-500 px-2 md:px-4 mb-6 md:mb-8">
//                 A dynamic workspace that sparks creativity with premium amenities and an inspiring atmosphere.
//               </p>
//               <div className="h-40 md:h-48 overflow-hidden rounded-sm">
//                  <img src="https://images.unsplash.com/photo-1600508774662-41b42174853d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Innovation" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div>
//            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">OUR TEAM</h4>
//            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 md:mb-16">
//             Driving Innovation One Space at a Time.
//           </h2>
          
//           <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16">
//             {/* Team Member 1 */}
//             <div className="text-center">
//                <div className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gray-100">
//                  <img src="./src/assets/PankajRathi.jpg" alt="Pankaj Rathi" className="w-full h-full object-cover" />
//                </div>
//                <h3 className="text-base md:text-lg font-bold text-gray-900">Pankaj Rathi</h3>
//                <p className="text-xs text-gray-500 uppercase tracking-widest">Founder & Director</p>
//             </div>

//             {/* Team Member 2 */}
//             <div className="text-center">
//                <div className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gray-100">
//                  <img src="./src/assets/manojKumar.jpg" className="w-full h-full object-cover" />
//                </div>
//                <h3 className="text-base md:text-lg font-bold text-gray-900">Manoj Kumar</h3>
//                <p className="text-xs text-gray-500 uppercase tracking-widest">Founder & Director</p>
//             </div>

//             {/* Join Community */}
//             <div className="text-center">
//                <div className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center shadow-xl cursor-pointer hover:bg-orange-600 transition-colors">
//                  <Plus className="text-white w-8 md:w-12 h-8 md:h-12" />
//                </div>
//                <h3 className="text-base md:text-lg font-bold text-gray-900">Join Our Community</h3>
//                <p className="text-xs text-gray-500 max-w-[200px] mx-auto mt-2">
//                  Dream bigger, achieve more: Join the Myworx community<br/>
//                  <span className="font-bold uppercase">COLLABORATE WITH US</span>
//                </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Stats from '../components/Stats';
import VideoSection from '../components/VideoSection';
import Values from '../components/Values';
import Team from '../components/Team';
import CTA from '../components/CTA';
import Testimonials from '../components/Testmonials.tsx';
// import Partners from '../components/Partners';

const About: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <VideoSection />
      <Values />
      <Team />
      <CTA />
      <Testimonials />
      {/* <Partners /> */}
    </>
  );
};

export default About;