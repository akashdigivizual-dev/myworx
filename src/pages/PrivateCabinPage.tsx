import React from 'react';
import { Wifi, Zap, Home, Coffee, Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';

//import images
const img1 = new URL('../assets/private_cabin_img.jpg', import.meta.url).href;

const PrivateCabinPage: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Header Section */}
      <div className="relative h-[40vh] w-full bg-black overflow-hidden" style={{ height: '100vh', marginTop: '-80px' }}>
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
          alt="Office Header" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="text-primary">Home</span> 
            <span className="text-gray-400">&gt;</span> 
            <span>Private Cabin Space In Noida</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-center px-4">Private Cabin Space In Noida</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">ANYWHERE WORKSPACE</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Private Cabin Workspace in Noida Sector 2
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              If you're looking for a private cabin workspace in Noida, Myworx is the ideal destination for you. Our coworking office in Noida offers thoughtfully designed cabin spaces that ensure complete privacy, focus, and comfort for professionals and teams. With a vibrant community, premium amenities, and a professional environment, you can work efficiently while connecting with like-minded individuals. Located in the heart of Noida, Myworx provides excellent connectivity, top-tier facilities, and a productive atmosphere that blends convenience with innovation—making it the perfect workspace for ambitious professionals and growing businesses.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Community</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              At Myworx, we understand that every professional and business has unique workspace needs. That's why our coworking office in Noida offers a wide range of cabin options designed for comfort and productivity. Whether you need a private cabin for focused work or a spacious setup for your team, we provide the perfect fit. Enjoy premium amenities, modern interiors, high-speed connectivity, and a vibrant professional community—all crafted to help you work smarter, collaborate better, and grow faster in a dynamic business environment.
            </p>
            
            <a href="/contact" className="text-primary text-sm font-bold hover:underline">
              ● Get In Touch ●
            </a>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={img1} 
              alt="Private Cabin Workspace" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-orange-50 py-16 px-8 rounded-xl mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            We Provide Coworking Space with everythings is Amenities
          </h2>
          <p className="text-gray-600 text-sm mb-12 max-w-3xl mx-auto">
            We provide everything you need to make your work life easier and more productive. Contact us today to learn more about our available spaces or book a tour of our facility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">High-Speed Internet</h3>
              <p className="text-xs text-gray-500">Get unlimited, Reliable business-grade high-speed Wi-Fi and Leased Line Ethernet.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">Power Backup 24/7*</h3>
              <p className="text-xs text-gray-500">Electricity Included with 24/7* Power backup</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">Housekeeping</h3>
              <p className="text-xs text-gray-500">Housekeeping Support to your office with a team of cleaning professionals.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">Unlimited Tea & Coffee</h3>
              <p className="text-xs text-gray-500">Get unlimited Tea & Coffee for your employees.</p>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
          <div className="lg:w-1/2 h-[600px]">
             <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Office Form" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>

        {/* Workspaces Grid Section */}
        <div className="mb-20">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-16 uppercase">
             Workspaces at our coworking office in Noida, customized for your needs and budget.
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[20vh]" style={{ height: '50vh', }}>
             {/* Card 1 */}
             <div className="text-center group">
               <div className="h-100 overflow-hidden rounded-sm mb-6">
                 <img src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Dedicated Seats" />
               </div>
               <h3 className="text-primary text-xl font-normal mb-3">Open Dedicated Seats</h3>
               <p className="text-xs text-gray-600 leading-relaxed px-4">
                 Myworx coworking space in noida sector 2 is a great place to work. Book your dedicated seats and enjoy a flexible workspace that feels like home.
               </p>
             </div>

             {/* Card 2 */}
             <div className="text-center group">
               <div className="h-56 overflow-hidden rounded-sm mb-6">
                 <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Floating Desk" />
               </div>
               <h3 className="text-primary text-xl font-normal mb-3">Floating Desk</h3>
               <p className="text-xs text-gray-600 leading-relaxed px-4">
                 Book your Floating Desk workspace for your business acording your budget, all ameneties incluede, like internet, housekeepint, electricity etc.
               </p>
             </div>

             {/* Card 3 */}
             <div className="text-center group">
               <div className="h-56 overflow-hidden rounded-sm mb-6">
                 <img src={img1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Private Cabins" />
               </div>
               <h3 className="text-primary text-xl font-normal mb-3">Private Cabins</h3>
               <p className="text-xs text-gray-600 leading-relaxed px-4">
                 Book your Private Cabin workspace for your business, according your budget and team sie, we have avialable private cabin 2/3/4/6/8/10 seater.
               </p>
             </div>

             {/* Card 4 */}
             <div className="text-center group">
               <div className="h-56 overflow-hidden rounded-sm mb-6">
                 <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Meeting Room" />
               </div>
               <h3 className="text-primary text-xl font-normal mb-3">Meeting Room</h3>
               <p className="text-xs text-gray-600 leading-relaxed px-4">
                 Modern meeting room at a coworking office in Noida with premium amenities and professional setup.
               </p>
             </div>

             {/* Card 5 */}
             <div className="text-center group">
               <div className="h-56 overflow-hidden rounded-sm mb-6">
                 <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Training Room" />
               </div>
               <h3 className="text-primary text-xl font-normal mb-3">Training Room</h3>
               <p className="text-xs text-gray-600 leading-relaxed px-4">
                 Book Training/Conference room for training purposes or board meetings on hourly/daily/weekly basis. all ameneties included, inhouse cafeteria.
               </p>
             </div>

             {/* Card 6 */}
             <div className="text-center group">
               <div className="h-56 overflow-hidden rounded-sm mb-6">
                 <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Virtual Office" />
               </div>
               <h3 className="text-primary text-xl font-normal mb-3">Virtual Office</h3>
               <p className="text-xs text-gray-600 leading-relaxed px-4">
                 Book Training/Conference room for training purposes or board meetings on hourly/daily/weekly basis. all ameneties included, inhouse cafeteria.
               </p>
             </div>
           </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12 mt-[600px]">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
             Find Your Perfect Coworking Space to Kickstart Your Business Dreams!
           </h2>
           <p className="text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed">
             Myworx is a premium coworking office in Noida Sector 2, offering private cabin spaces designed for focus, comfort, and productivity. Perfect for professionals seeking peace away from the city's hustle, our workspaces provide a calm and inspiring atmosphere. Each cabin comes equipped with modern amenities, including a private lounge area, a stocked pantry, and fitness facilities to help you stay active and energized throughout the day. With high-speed internet, ergonomic furniture, and a supportive business community, Myworx combines convenience and sophistication—creating the ideal workspace where innovation meets relaxation and every professional thrives.
           </p>
        </div>

      </div>
    </div>
  );
};

export default PrivateCabinPage;