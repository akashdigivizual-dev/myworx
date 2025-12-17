import React from 'react';
import { MapPin, Home, DollarSign, Users, CheckCircle, Building } from 'lucide-react';

const AceStarlitPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div 
        className="relative h-full w-full bg-black overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://www.myworx.in/wp-content/uploads/2025/02/1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '800px',
          
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-primary">Home</span> 
            <span className="text-gray-300">&gt;</span> 
            <span>My Worx Property</span>
            <span className="text-gray-300">&gt;</span> 
            <span>Ace Starlit</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Ace Starlit</h1>
          <p className="mt-4 text-lg text-gray-200">Noida Sector 152, Noida Expressway</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div>
            <img 
              src="https://www.myworx.in/wp-content/uploads/2025/02/1.jpg"
              alt="Ace Starlit"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              PREMIUM RESIDENTIAL
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ace Starlit, Sector 152, Noida
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600 text-sm">Sector 152, Noida Expressway, Noida</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Developer</h4>
                  <p className="text-gray-600 text-sm">ACE Group - Renowned Real Estate Developer</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Property Type</h4>
                  <p className="text-gray-600 text-sm">Residential - 2, 3 & 4 BHK Apartments</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Price Range</h4>
                  <p className="text-gray-600 text-sm">₹90 Lakhs - ₹2 Crore (Approx)</p>
                </div>
              </div>
            </div>

            <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 w-full">
              Enquire Now
            </button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Ace Starlit is an upcoming premium residential project located in Sector-152, Noida Expressway, developed by the renowned ACE Group. This project represents a perfect blend of modern living and luxurious amenities in one of Noida's most sought-after locations.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The project offers spacious 2, 3, and 4 BHK apartments designed with contemporary architecture and premium interiors. Each unit is thoughtfully planned to maximize space utilization and natural light.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            With excellent connectivity via the Noida Expressway, world-class amenities, and a prime location, Ace Starlit is an ideal choice for those seeking a modern lifestyle combined with investment potential.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features & Amenities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Spacious 2, 3 & 4 BHK Apartments',
              'Premium Interior Design',
              'World-Class Amenities',
              'Swimming Pool & Fitness Center',
              'Landscaped Gardens & Parks',
              'Community Hall & Lounge',
              '24/7 Security & CCTV Surveillance',
              'Dedicated Parking Spaces',
              'High-Speed Elevators',
              'Power Backup 24/7',
              'Wide Open Spaces',
              'Professional Management'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Highlights */}
        <div className="bg-primary/10 rounded-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Location Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nearby Connectivity
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Close to Noida Expressway for easy commute</li>
                <li>✓ Near upcoming Metro expansion</li>
                <li>✓ Proximity to shopping malls and entertainment zones</li>
                <li>✓ Schools and hospitals in the vicinity</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Community Benefits
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Planned community with social spaces</li>
                <li>✓ Green living environment</li>
                <li>✓ Pet-friendly community</li>
                <li>✓ Events and community activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Investment Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Strategic Location</h3>
              <p className="text-gray-600 text-sm">
                Situated in Sector 152, one of Noida's fastest-growing regions with excellent connectivity and infrastructure.
              </p>
            </div>

            <div className="border border-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Trusted Developer</h3>
              <p className="text-gray-600 text-sm">
                Built by ACE Group, a renowned name in real estate with a proven track record of quality projects.
              </p>
            </div>

            <div className="border border-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Strong Growth Potential</h3>
              <p className="text-gray-600 text-sm">
                Area is experiencing rapid development with increasing property values and appreciation potential.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-orange-600 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Ace Starlit?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get more information about floor plans, pricing, payment plans, and exclusive offers. Our team is ready to assist you.
          </p>
          <button className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Schedule a Site Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AceStarlitPage;
