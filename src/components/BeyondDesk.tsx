import React from 'react';
import {
  Wifi,
  Zap,
  Shield,
  Coffee,
  Clock,
  Users,
  Trash2,
  Lock
} from 'lucide-react';

interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'High Speed Internet',
    description: 'Stay connected with light speed internet service for seamless work and collaboration.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Ergonomic Work Stations',
    description: 'Expert curated work stations and furniture that don\'t hurt your back or work.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Modern Interiors',
    description: 'Fully equipped meeting rooms perfect for collaboration and brainstorming.'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Secure Access',
    description: 'Get a safe workspace with 24/7 CCTV surveillance and only authorised access.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Complimentary Beverages',
    description: 'Refresh yourself with complimentary tea, coffee, and water.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Recreational Centre',
    description: 'Recharge yourself with fun games, activities, and networking opportunities.'
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: 'Cleaning Service',
    description: 'A clean and hygienic space makes work better.'
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'No Lock-In Period',
    description: 'Scale your office space without worrying about lease period.'
  }
];

const BeyondDesk: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-4">Beyond the DESK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Best Coworking Space in Noida – Start Working Smarter Today
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-primary mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-5xl font-bold text-primary mb-2">04</h3>
              <p className="text-xl text-gray-700">Spaces in the City Center</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-primary mb-2">1,500+</h3>
              <p className="text-xl text-gray-700">Seats available</p>
            </div>
          </div>

          <div className="bg-primary/10 p-12 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What Makes us Different</h3>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Best Coworking Space in Noida for Your Business</h4>
            <p className="text-gray-600 mb-8">
              At <strong>MyWorx</strong>, we provide 360-degree support to help you find the <strong>best coworking space in Noida</strong> that suit your business needs. With 24/7 access, a vibrant professional community, and dedicated support services, we offer a one-stop solution for modern, flexible, and growth-focused workspaces.
            </p>
            <a href="/locations" className="inline-flex items-center text-primary font-bold hover:text-orange-700 transition-colors">
              View All Locations <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondDesk;
