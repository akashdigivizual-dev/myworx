import React from 'react';
import { Wifi, Zap, Home, Coffee } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const DayPassPage: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Header Section */}
      <div className="relative h-[40vh] w-full bg-black overflow-hidden" style={{ height: '80vh', marginTop: '-80px' }}>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Office Header" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="text-primary">Home</span> 
            <span className="text-gray-400">&gt;</span> 
            <span>Day Pass Coworking Space In Noida</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-center px-4">Day Pass Coworking Space in Noida</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">ANYWHERE WORKSPACE</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Book Day Pass Office Space in Noida for Flexible Work
            </h2>
            
            {/* Pricing Banner */}
            <div className="bg-primary text-white py-6 px-8 rounded-sm mb-8 text-center shadow-lg">
              <h3 className="text-xl font-bold mb-1">Day Pass</h3>
              <div className="text-3xl font-extrabold">₹ 499 per day</div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Community</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Welcome to Myworx, your trusted destination for affordable and flexible <strong>day pass coworking space in Noida</strong>. We understand that today's professionals need adaptable, cost-effective workspaces. That's why we offer a modern, fully equipped coworking environment for just ₹499 per day. Experience premium amenities, high-speed WiFi, and a vibrant community designed to inspire creativity, productivity, and collaboration. Whether you're a freelancer, entrepreneur, or startup, Myworx provides the perfect setup to elevate your workday and achieve your goals with comfort and convenience.
            </p>
            
            <a href="#contact" className="text-primary text-sm font-bold hover:underline">
              ● Get In Touch ●
            </a>
          </div>
          <div className="lg:w-1/2 h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
              alt="Day Pass Workspace" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-orange-50 py-16 px-8 rounded-xl mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What's Included?
          </h2>
          <p className="text-gray-600 text-sm mb-12 max-w-3xl mx-auto leading-relaxed">
            We believe that a productive work environment with essential amenities is key to success. At <strong>Myworx Day Pass Coworking Space in Noida</strong>, we provide everything you need for a seamless workday. Enjoy high-speed WiFi, ergonomic seating, meeting rooms, and a vibrant community — all designed to enhance focus and creativity. Whether you're a freelancer, entrepreneur, or remote worker, our flexible day pass option lets you experience a premium workspace without long-term commitments, helping you stay inspired and productive throughout the day.
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
          {/* <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Set Up a private cabin workspace in Noida.
            </h2>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Opening Timing</h4>
              <p className="text-sm text-gray-600">Day Shift: Monday To Saturday: 09:00 am to 7:00 pm</p>
              <p className="text-sm text-gray-600">Night Shift: Monday To Saturday: 07:00 pm to 6:00 am</p>
            </div>

            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Myworx offers <strong>private cabins in a modern coworking office in Noida, crafted for professionals who value comfort, privacy, and focus.</strong> Each cabin provides a serene workspace equipped with premium furniture, high-speed WiFi, and all essential amenities to enhance productivity. Located in the heart of Noida, our coworking office ensures seamless connectivity to nearby business centers and services. Whether you're working solo or leading a small team, Myworx's private cabins combine elegance, functionality, and convenience. Experience a perfect blend of privacy and collaboration in a workspace designed to help you achieve more every day.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full border border-gray-200 p-3 text-sm rounded-sm focus:border-primary outline-none" />
                <input type="email" placeholder="Email" className="w-full border border-gray-200 p-3 text-sm rounded-sm focus:border-primary outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone Number" className="w-full border border-gray-200 p-3 text-sm rounded-sm focus:border-primary outline-none" />
                <div className="relative">
                  <input type="text" placeholder="mm / dd / yyyy" className="w-full border border-gray-200 p-3 text-sm rounded-sm focus:border-primary outline-none" />
                  <Calendar className="absolute right-3 top-3 text-gray-400 w-4 h-4" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full border border-gray-200 p-3 text-sm rounded-sm focus:border-primary outline-none text-gray-500">
                  <option>Location</option>
                  <option>Sector 1</option>
                  <option>Sector 2</option>
                  <option>Sector 4</option>
                </select>
                 <select className="w-full border border-gray-200 p-3 text-sm rounded-sm focus:border-primary outline-none text-gray-500">
                  <option>I'm interested in</option>
                  <option>Day Pass</option>
                  <option>Private Cabin</option>
                  <option>Open Desk</option>
                  <option>Meeting Room</option>
                </select>
              </div>
              <button className="bg-primary text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-sm hover:bg-orange-600 transition-colors w-auto">
               
              </button>
            </form>
          </div> */}
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
          <div className="lg:w-1/2 h-[600px]">
             <img 
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop" 
              alt="Workspace Setup" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>

        {/* Info Text Sections */}
        <div className="space-y-12 mb-24">
           <div>
             <h3 className="text-xl font-bold text-gray-900 mb-3">Our Convenient Location</h3>
             <p className="text-sm text-gray-600 leading-relaxed">
               Our office space is strategically located in the heart of Noida, making it easily accessible from all corners of the city. We're at the intersection of convenience, ensuring that your daily commute is both efficient and hassle-free.
             </p>
           </div>
           <div>
             <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Daily Passes</h3>
             <p className="text-sm text-gray-600 leading-relaxed">
               We understand that flexibility and affordability are essential for modern professionals. That's why Myworx offers an affordable <strong>day pass coworking space in Noida</strong> for just ₹399. Enjoy access to a fully equipped, premium workspace without long-term commitments or hidden charges. Pay only for the day you need and experience a productive, inspiring environment designed for freelancers, startups, and remote workers. With top-notch amenities, high-speed WiFi, and a vibrant community, Myworx ensures your workday is efficient, comfortable, and value-driven – the perfect solution for those seeking flexible <strong>day pass coworking space in Noida</strong>.
             </p>
           </div>
           <div>
             <h3 className="text-xl font-bold text-gray-900 mb-3">The Myworx Experience</h3>
             <p className="text-sm text-gray-600 leading-relaxed">
               At Myworx, we offer more than just an office – we deliver an inspiring experience. With our <strong>day pass coworking space in Noida</strong>, you can enjoy a vibrant environment that encourages creativity, networking, and collaboration. Participate in community events, connect with like-minded professionals, and exchange innovative ideas that fuel growth. Whether you're a freelancer, startup founder, or remote worker, Myworx provides a dynamic workspace that supports both your personal and professional development. Experience the perfect blend of flexibility, productivity, and community with our <strong>day pass coworking space in Noida</strong>.
             </p>
           </div>
        </div>

        {/* Workspaces Grid Section */}
        <div className="mb-20">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-16 uppercase leading-snug">
             WE PROVIDE ALL TYPES WORKSPACE, ACCORDING <br/> TO YOUR REQUIREMENT & BUDGET.
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="text-center group">
               <div className="h-56 overflow-hidden rounded-sm mb-6">
                 <img src="https://images.unsplash.com/photo-1600508774662-41b42174853d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Day Pass" />
               </div>
               <h3 className="text-primary text-xl font-normal mb-3">Day Pass</h3>
               <p className="text-xs text-gray-600 leading-relaxed px-4">
                 We make it easy to find an office for your daily business needs.
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
                 <img src="https://images.unsplash.com/photo-1517502884422-41e157d2ed22?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Private Cabins" />
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
                 Book your meeting room on hourly/daily/weekly basis ans per your requirement, included amenetis, internet/ LE/Projector/ whiteboard etc.
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

      </div>
    </div>
  );
};

export default DayPassPage;