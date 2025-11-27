import React from 'react';
import Hero from '../components/Hero';
import { Wifi, Monitor, Coffee, Gamepad2, Sparkles, Lock, Layout, Users } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "High Speed Internet",
    description: "Stay connected with business-grade high-speed WiFi"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Ergonomic Workstations",
    description: "Premium furniture designed for comfort and productivity"
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Modern Interiors",
    description: "Fully equipped meeting rooms and collaborative spaces"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Secure Access",
    description: "24/7 CCTV surveillance and authorized access control"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Complimentary Beverages",
    description: "Free tea, coffee, and water throughout the day"
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Recreation Center",
    description: "Gaming and relaxation zones for breaks"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Daily Cleaning",
    description: "Professional housekeeping and hygiene maintenance"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Flexible Membership",
    description: "No lock-in period, scale as you grow"
  }
];

const Features: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="Our Features" 
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={
          <>
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-primary">Features</span>
          </>
        }
      />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beyond the Desk
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Start Working Smarter Today with Our Premium Amenities
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-100 hover:border-primary group"
              >
                <div className="p-3 bg-orange-50 rounded-lg w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="text-primary">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop"
              alt="Office Interior"
              className="h-64 md:h-full object-cover"
            />
            <div className="p-6 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Best Coworking Space for Your Business
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">4</span>
                  <p className="text-sm text-gray-600 mt-2 uppercase font-semibold">Locations</p>
                </div>
                <div className="bg-primary text-white p-6 rounded-lg text-center">
                  <span className="text-2xl md:text-3xl font-bold">1500+</span>
                  <p className="text-sm mt-2 uppercase font-semibold opacity-90">Seating</p>
                </div>
              </div>
              <button className="mt-6 text-primary font-bold hover:underline">
                <a href='/locations'> View All Locations →</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;