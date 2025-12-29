import React from 'react';
import { Mail, Phone, MessageSquare, Clock, MapPin, Zap, ChevronRight } from 'lucide-react';

interface SupportChannel {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  contact: string;
}

const HelpAndSupport: React.FC = () => {
  const supportChannels: SupportChannel[] = [
    {
      id: 1,
      title: "Email Support",
      description: "Send us your queries and we'll respond within 24 hours",
      icon: <Mail size={32} />,
      contact: "contact@myworx.in"
    },
    {
      id: 2,
      title: "Phone Support",
      description: "Call us during business hours for immediate assistance",
      icon: <Phone size={32} />,
      contact: "977-359-3037"
    },
    {
      id: 3,
      title: "Live Chat",
      description: "Chat with our support team in real-time (9 AM - 7 PM IST)",
      icon: <MessageSquare size={32} />,
      contact: "Available on our website"
    }
  ];

  const supportTopics = [
    {
      id: 1,
      title: "Membership & Billing",
      items: [
        "Upgrade or downgrade your plan",
        "Manage payment methods",
        "View invoices and billing history",
        "Cancel membership"
      ]
    },
    {
      id: 2,
      title: "Facilities & Amenities",
      items: [
        "Book meeting rooms",
        "Parking information",
        "Facility availability",
        "WiFi & technical issues"
      ]
    },
    {
      id: 3,
      title: "Workspace Access",
      items: [
        "Get access cards",
        "Extend access hours",
        "Report maintenance issues",
        "Security concerns"
      ]
    },
    {
      id: 4,
      title: "Virtual Office Services",
      items: [
        "Setup virtual office",
        "Mail handling & forwarding",
        "Phone reception services",
        "Business registration support"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-black overflow-hidden">
        <img 
          alt="Help & Support" 
          className="w-full h-full object-cover opacity-50" 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <div className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <a href="/" className="text-primary hover:underline cursor-pointer">Home</a>
            <ChevronRight size={16} className="text-gray-400" />
            <span>Help & Support</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">Help & Support</h1>
        </div>
      </div>

      {/* Support Channels */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-center mb-16 max-w-2xl mx-auto" style={{color: '#F39620'}}>
              We're here to support you 24/7. Reach out through any of our support channels and we'll get back to you promptly.
            </p>
          </div>

          {/* Support Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel) => (
              <div 
                key={channel.id}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-center bg-white"
              >
                <div className="flex justify-center mb-4" style={{color: '#F39620'}}>
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{channel.description}</p>
                <a 
                  href={channel.title === "Email Support" ? `mailto:${channel.contact}` : "#"}
                  className="font-bold text-sm hover:text-orange-700 transition-colors" style={{color: '#F39620'}}
                >
                  {channel.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Topics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Popular Support Topics
            </h2>
            <p className="text-lg" style={{color: '#F39620'}}>
              Find quick answers to common issues in our support categories
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTopics.map((topic) => (
              <div 
                key={topic.id}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-brand-orange transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap size={24} style={{color: '#F39620'}} />
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.items.map((item, index) => (
                    <li 
                      key={index}
                      className="text-gray-600 text-sm flex items-start gap-3"
                    >
                      <span className="font-bold mt-1" style={{color: '#F39620'}}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Response Info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Average Response Times
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex justify-center mb-4">
                  <Clock size={40} style={{color: '#F39620'}} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">Response within 24 hours</p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex justify-center mb-4">
                  <Phone size={40} style={{color: '#F39620'}} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">Immediate assistance</p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex justify-center mb-4">
                  <MessageSquare size={40} style={{color: '#F39620'}} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600">Within 5 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Visit Us In Person
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <MapPin size={24} className="flex-shrink-0 mt-1" style={{color: '#F39620'}} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Noida Sector 1</h3>
                  <p className="text-gray-600 text-sm">
                    B-8 & B-9, Sector-1, Next to Sector-15 Metro Station, Noida, UP-201301
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Hours:</strong> 9 AM - 7 PM (Mon-Fri), 10 AM - 5 PM (Sat-Sun)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <MapPin size={24} className="flex-shrink-0 mt-1" style={{color: '#F39620'}} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Noida Sector 2</h3>
                  <p className="text-gray-600 text-sm">
                    A-67, B-7 & B-8, Sector-2, Next to Sector-15 Metro Station, Noida, UP-201301
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Hours:</strong> 9 AM - 7 PM (Mon-Fri), 10 AM - 5 PM (Sat-Sun)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpAndSupport;
