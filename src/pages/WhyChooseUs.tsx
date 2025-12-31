import React from 'react';
import Hero from '../components/Hero';
import { CheckCircle, Star, Zap, Users, Award, TrendingUp } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Prime Locations",
    description: "Located in the heart of Noida's business districts with easy access to Metro stations, making commuting convenient and time-efficient."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities including high-speed internet, premium furniture, and fully equipped meeting rooms for seamless operations."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Vibrant Community",
    description: "Network with like-minded professionals, entrepreneurs, and businesses. Regular events, workshops, and networking sessions to foster collaboration."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Cost-Effective Solutions",
    description: "Flexible membership plans without long-term lock-ins. Pay only for what you use with transparent pricing and no hidden charges."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Business Growth",
    description: "Comprehensive support and mentorship programs to help startups and enterprises scale. Access to industry experts and business resources."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "24/7 Security",
    description: "Round-the-clock CCTV surveillance, secure access control, and trained security personnel ensuring a safe working environment."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="Why Choose Myworx?" 
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={
          <>
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-primary">Why Choose Us</span>
          </>
        }
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Best Choice for Your Workspace Needs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Myworx stands out as Noida's premier coworking destination, offering more than just workspace. We provide a complete ecosystem for professional growth, networking, and success.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Myworx vs Traditional Office Space
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Features</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">Myworx</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">Traditional Office</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Setup Cost", myworx: "Low", traditional: "High" },
                    { feature: "Flexibility", myworx: "Yes", traditional: "No" },
                    { feature: "Networking", myworx: "Yes", traditional: "Limited" },
                    { feature: "Meeting Rooms", myworx: "Included", traditional: "Extra Cost" },
                    { feature: "Internet Speed", myworx: "Business Grade", traditional: "Variable" },
                    { feature: "Long-term Lease", myworx: "Not Required", traditional: "Required" },
                    { feature: "Community Events", myworx: "Yes", traditional: "No" },
                    { feature: "Scalability", myworx: "Easy", traditional: "Difficult" }
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-gray-900">{item.feature}</td>
                      <td className="text-center py-4 px-4">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.myworx}
                        </span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.traditional}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience the Difference
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join hundreds of professionals who have chosen Myworx as their trusted workspace partner.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold rounded-sm hover:bg-orange-600 transition-colors"
              >
                <a href="/contact">Get Started Today</a>
              </a>
              <a 
                href="/locations"
                className="inline-block border-2 border-primary text-primary px-8 py-3 font-semibold rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                Visit Our Locations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
