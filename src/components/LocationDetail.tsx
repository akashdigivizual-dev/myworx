import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface LocationDetailProps {
  title: string;
  sector: string;
  address: string;
  phone1: string;
  phone2: string;
  email: string;
  hours: string;
  description: string;
  galleryImages: Array<{ src: string; alt: string }>;
  stats: Array<{ number: string; label: string }>;
  amenities: Array<{ icon: string; title: string }>;
  packages: Array<{
    title: string;
    price: string;
    image: string;
    features: string[];
  }>;
  mapQuery: string;
}

const LocationDetail: React.FC<LocationDetailProps> = ({
  title,
  sector,
  address,
  phone1,
  phone2,
  email,
  hours,
  description,
  galleryImages,
  stats,
  amenities,
  packages,
  mapQuery,
}) => {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      {/* Breadcrumb Section */}
      <div className="w-full bg-cover bg-center py-16 md:py-20 relative" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${galleryImages[0]?.src}')`,
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-white">
            <div className="breadcrumb mb-4 text-sm flex flex-wrap gap-2">
              <a href="/" className="hover:text-primary">Home</a>
              <span>›</span>
              <a href="/locations" className="hover:text-primary">Locations</a>
              <span>›</span>
              <span>{title}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Header */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{sector}</h2>
              <p className="text-lg font-semibold text-gray-700 mb-4">A Space Designed for Inspiration and Success</p>
            </div>

            {/* Video Placeholder */}
            <div className="w-full bg-gray-300 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
              <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                <p className="text-white text-center">Video Section - Update with your video URL</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:text-white transition">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Best Coworking Space in {sector.split(',')[0]}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Gallery */}
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-primary text-2xl flex-shrink-0">✓</div>
                    <p className="font-medium text-gray-700">{amenity.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Packages & Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {packages.map((pkg, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-48 md:h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                      <div className="mb-4">
                        <span className="text-sm text-gray-600">from</span>
                        <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, fidx) => (
                          <li key={fidx} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="text-primary">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                      <a href="/contact" className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-center block transition">
                        Book Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book a Visit Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Book a Visit</h2>
              <p className="text-gray-600 mb-6">Book a private viewing and get a plan customized to your requirements</p>
              <a href="/contact" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition">
                Schedule a Visit
              </a>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Map */}
            <div className="sticky top-24">
              <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=m&z=15&output=embed`}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>

              {/* Address */}
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin size={20} className="text-primary" />
                    Address
                  </h3>
                  <p className="text-gray-600">{address}</p>
                </div>

                {/* Help Desk */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Phone size={20} className="text-primary" />
                    Help Desk
                  </h3>
                  <div className="space-y-1">
                    <a href={`tel:${phone1}`} className="text-primary hover:underline block">
                      {phone1}
                    </a>
                    <a href={`tel:${phone2}`} className="text-primary hover:underline block">
                      {phone2}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Mail size={20} className="text-primary" />
                    Email
                  </h3>
                  <a href={`mailto:${email}`} className="text-primary hover:underline">
                    {email}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock size={20} className="text-primary" />
                    Hours
                  </h3>
                  <p className="text-gray-600">{hours}</p>
                  <p className="text-sm text-gray-500 mt-2">Coworking spaces are available in both day and night shifts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
