import React from 'react';
import { Users, Clock, Projector, Wifi, Coffee, Shield, Calendar, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
const bookMeetingRoomImage = new URL('../assets/locations/book-meeting-room.jpg', import.meta.url).href;

const BookMeetingRoom: React.FC = () => {
  const meetingRoomPackages = [
    {
      name: 'Small Meeting Room',
      capacity: '4-6 people',
      price: '₹500/hour',
      features: ['High-speed WiFi', 'LED Screen', 'Conference Phone', 'Whiteboard'],
      description: 'Perfect for small team meetings and client discussions'
    },
    {
      name: 'Medium Meeting Room',
      capacity: '8-12 people',
      price: '₹800/hour',
      features: ['High-speed WiFi', 'Projector & Screen', 'Video Conferencing', 'Whiteboard', 'Coffee Service'],
      description: 'Ideal for team brainstorming and presentations'
    },
    {
      name: 'Large Conference Room',
      capacity: '15-20 people',
      price: '₹1,200/hour',
      features: ['High-speed WiFi', 'Projector & Screen', 'Video Conferencing', 'Whiteboard', 'Coffee Service', 'Recording Facility'],
      description: 'Suitable for large meetings and corporate events'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div 
        className="relative h-full w-full bg-black overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url("${bookMeetingRoomImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-primary">Home</span> 
            <span className="text-gray-300">&gt;</span> 
            <span>Book Meeting Room</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Book Meeting Room</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">Professional Meeting Spaces For Your Business Needs</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">PREMIUM MEETING SPACES</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Professional Meeting Rooms In Noida
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Looking for well-equipped meeting rooms in Noida? Myworx provides state-of-the-art meeting spaces designed to impress your clients and facilitate productive discussions. Our meeting rooms are equipped with modern technology, comfortable seating, and professional ambiance—making them perfect for client meetings, team brainstorming, presentations, and corporate events.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Meeting Rooms?</h3>
            <ul className="space-y-3 text-gray-600 text-sm mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Prime location in Noida with excellent accessibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>State-of-the-art technology and modern amenities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Flexible booking options - hourly or daily packages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Professional support staff and technical assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Affordable pricing with no hidden charges</span>
              </li>
            </ul>
            
            <a href="#booking-form" className="text-primary text-sm font-bold hover:underline">
              ● Book Your Meeting Room Now
            </a>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional Meeting Room" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Meeting Room Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">MEETING ROOM PACKAGES</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Room for Your Needs
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              From intimate client meetings to large corporate conferences, we have the perfect space for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meetingRoomPackages.map((room, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-primary font-bold text-lg mb-1">{room.capacity}</p>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <p className="text-2xl font-bold text-gray-900">{room.price}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                  <a href="/contact">BOOK NOW</a>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-gradient-to-r from-primary/10 to-orange-100 py-16 px-8 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Complete Meeting Room Amenities
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Every meeting room comes equipped with everything you need for a successful meeting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">High-Speed WiFi</h3>
              <p className="text-xs text-gray-600">Business-grade high-speed internet connectivity</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Projector className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Modern Technology</h3>
              <p className="text-xs text-gray-600">Projectors, screens, and video conferencing equipment</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-xs text-gray-600">Professional staff to assist with setup and technical needs</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Refreshments</h3>
              <p className="text-xs text-gray-600">Coffee, tea, and beverages complimentary with booking</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flexible Booking</h3>
              <p className="text-xs text-gray-600">Hourly, daily, or custom time slots available</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Environment</h3>
              <p className="text-xs text-gray-600">CCTV surveillance and secure access control</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-xs text-gray-600">Easy parking and accessibility from main roads</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Easy Scheduling</h3>
              <p className="text-xs text-gray-600">Online booking system for quick reservations</p>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div id="booking-form" className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to Book?</h2>
            <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>
          <ContactForm onSuccess={() => window.scrollTo(0, 0)} />
        </div>
      </div>
    </div>
  );
};

export default BookMeetingRoom;
