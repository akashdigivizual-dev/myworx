import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const bookMeetingRoomImage = new URL('../assets/locations/book-meeting-room.jpg', import.meta.url).href;
const propertyImg = new URL('../assets/property/property image.jpg', import.meta.url).href;
const MyworxPropertyPage: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: 'Ace Starlit, Noida Sector 152, Noida',
      image: propertyImg,
      description: 'Ace Starlit is an upcoming residential project located in Sector-152, Noida Expressway, developed by the renowned ACE Group.',
      path: '/ace-starlit-noida-sector-152-noida'
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
          minHeight: '600px',
          // marginTop: '80px'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-primary">Home</span> 
            <span className="text-gray-300">&gt;</span> 
            <span>Myworx Property</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Myworx Property</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">Explore Premium Real Estate Opportunities</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            REAL ESTATE VENTURES
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Premium Properties by Myworx
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover exclusive residential and commercial properties curated by Myworx. We partner with renowned developers to bring you the finest real estate opportunities in premium locations.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                  <Link to={property.path}>
                    {property.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {property.description}
                </p>

                {/* Learn More Button */}
                <Link 
                  to={property.path}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Myworx Properties */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Myworx Properties?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Premium Locations</h3>
                <p className="text-gray-600 text-sm">Properties in the most sought-after areas with excellent connectivity and amenities.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Trusted Developers</h3>
                <p className="text-gray-600 text-sm">We partner only with reputed and established real estate developers.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">Get personalized advice from our real estate experts to find your perfect property.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Transparent Process</h3>
                <p className="text-gray-600 text-sm">Complete transparency in all dealings with no hidden costs or surprises.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in a Property?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to explore exclusive opportunities.
          </p>
          <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyworxPropertyPage;
