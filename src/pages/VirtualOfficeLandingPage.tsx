import React from 'react';
import { ChevronRight, Building, Phone, MapPin, Users, Mail, CheckCircle, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Partners from '../components/partners';
const bookMeetingRoomImage = new URL('../assets/locations/book-meeting-room.jpg', import.meta.url).href;
const background2 = new URL('../assets/locations/background2.jpg', import.meta.url).href;

const VirtualOfficePage: React.FC = () => {
  const benefits = [
    "Professional business address in prime location",
    "Mail collection and secure forwarding service",
    "Call answering and voicemail management",
    "Access to meeting rooms and coworking spaces",
    "Reception services for clients and visitors",
    "Flexible packages starting at just ₹799/month",
    "No long-term contracts required",
    "24/7 online portal to manage your office"
  ];

  const serviceCards = [
    {
      title: "GST Registration",
      subtitle: "Get your business GST ready",
      price: "₹1499",
      image: bookMeetingRoomImage,
      description: "Complete GST registration support with professional business address, mail handling, call answering, and all necessary documentation. Establish your business presence with credibility and ease.",
      link: "/gst-registration",
      highlights: [
        "Verified business address for GST",
        "Full documentation support",
        "Professional reception services",
        "Mail forwarding included",
        "Local phone number with call answering"
      ]
    },
    {
      title: "Business Registration",
      subtitle: "Register your business professionally",
      price: "₹999",
      image: background2,
      description: "Everything you need for business registration in a virtual office setup. Get a prime business location, full documentation, in-office services, and all required compliance support without physical office expenses.",
      link: "/business-registration",
      highlights: [
        "NOC and compliance documents",
        "Utility bills and rent agreement",
        "Business registration address",
        "Meeting room access",
        "Administrative support services"
      ]
    },
    {
      title: "Mailing Address",
      subtitle: "Professional mailing address service",
      price: "₹799",
      image: background2,
      description: "Maintain a professional mailing address in Noida without a physical office. We collect, store, scan, and forward your mail securely. Perfect for remote businesses, startups, and freelancers.",
      link: "/mailing-address",
      highlights: [
        "Mail collection and storage",
        "Digital mail scanning service",
        "Quick forwarding to any location",
        "Premium business address",
        "Package receiving service"
      ]
    }
  ];

  const features = [
    {
      icon: Building,
      title: "Prime Locations",
      description: "Business addresses in the most prestigious areas of Noida"
    },
    {
      icon: Phone,
      title: "Call Answering",
      description: "Professional team to handle your business calls 24/7"
    },
    {
      icon: Mail,
      title: "Mail Management",
      description: "Secure mail handling, scanning, and forwarding services"
    },
    {
      icon: MapPin,
      title: "Business Address",
      description: "Use our address on all business documents and cards"
    },
    {
      icon: Users,
      title: "Meeting Rooms",
      description: "Access to professional meeting spaces for client meetings"
    },
    {
      icon: BookOpen,
      title: "Admin Support",
      description: "Dedicated support for your administrative needs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Breadcrumb Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-black overflow-hidden">
        <img 
          src={bookMeetingRoomImage} 
          alt="Virtual Office Solutions" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <div className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-primary hover:underline cursor-pointer">Home</span> 
            <ChevronRight size={16} className="text-gray-400" />
            <span>Virtual Office Solutions</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            Complete Virtual Office Solutions in Noida
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
                Professional Virtual Office
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Your Business Deserves a Professional Address
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Complete solutions for GST, Business Registration & Mailing
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Myworx provides flexible virtual office solutions starting from just ₹799/month. Establish your professional presence, get GST registered, handle business documentation, and manage mail efficiently - all from one integrated platform.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 max-w-fit">
                Explore Plans
              </button>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why Choose Myworx Virtual Office?
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                We provide comprehensive virtual office solutions tailored for startups, entrepreneurs, freelancers, and SMEs. From GST registration support to mail handling and business compliance, we handle the operational details so you can focus on growing your business.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Affordable pricing with no hidden charges</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional support team available 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Flexible packages with no long-term commitment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards with Images */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Virtual Office Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {serviceCards.map((service, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-primary text-white px-6 py-3 text-xl font-bold">
                      {service.price}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Comparison Table */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Compare Our Plans
            </h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full bg-white">
                <tbody>
                  {/* Header Row */}
                  <tr className="border-b border-gray-200 ">
                    <td className="w-1/4 p-0">
                      <div className="p-6"></div>
                    </td>
                    <td className="w-1/4 p-0">
                      <div className="p-6 bg-gradient-to-b from-primary/5 to-transparent border-r border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 text-center">
                          <strong>Basic</strong>
                        </h3>
                      </div>
                    </td>
                    <td className="w-1/4 p-0">
                      <div className="p-6 bg-gradient-to-b from-primary/10 to-transparent border-r border-gray-200">
                        <h3 className="text-2xl font-bold text-primary text-center">
                          <strong>Gold</strong>
                        </h3>
                      </div>
                    </td>
                    <td className="w-1/4 p-0">
                      <div className="p-6 bg-gradient-to-b from-primary to-primary/80">
                        <h3 className="text-2xl font-bold text-white text-center">
                          <strong>Platinum</strong>
                        </h3>
                      </div>
                    </td>
                  </tr>

                  {/* Business Address */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="px-6">
                        <h5 className="font-bold text-gray-900">Business Address</h5>
                      </div>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <span className="text-primary text-2xl">✓</span>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <span className="text-primary text-2xl">✓</span>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="text-primary text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* Mail Handling */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="px-6">
                        <h5 className="font-bold text-gray-900">Mail Handling</h5>
                      </div>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <span className="text-primary text-2xl">✓</span>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <span className="text-primary text-2xl">✓</span>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="text-primary text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* Hub Access */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="px-6">
                        <h5 className="font-bold text-gray-900">Hub Access</h5>
                      </div>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <span className="text-gray-400 text-2xl">✕</span>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <div>
                        <span className="text-primary text-2xl block">✓</span>
                        <span className="text-xs text-gray-600 mt-2">(1 day hub access)</span>
                      </div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div>
                        <span className="text-primary text-2xl block">✓</span>
                        <span className="text-xs text-gray-600 mt-2">4 days or<br/>4 Hrs Meeting Room<br/>(4 seater)</span>
                      </div>
                    </td>
                  </tr>

                  {/* Business Boosters */}
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="px-6">
                        <h5 className="font-bold text-gray-900">Access to Business Boosters</h5>
                      </div>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <span className="text-gray-400 text-2xl">✕</span>
                    </td>
                    <td className="p-4 text-center border-r border-gray-200">
                      <span className="text-gray-400 text-2xl">✕</span>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div>
                        <span className="text-primary text-2xl block">✓</span>
                        <span className="text-xs text-gray-600 mt-2">(worth ₹2 Cr)</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 rounded-lg p-8 md:p-16 mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Why Virtual Office Matters for Your Business
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A virtual office is more than just an address. It's a complete business solution that helps you establish credibility, manage operations, and focus on what matters most.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700 text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Complete Feature Set
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <IconComponent size={32} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section with Background */}
          <div className="relative py-16 md:py-24 px-8 md:px-16 rounded-lg bg-cover bg-center mb-16 md:mb-24" style={{backgroundImage: `url(${background2})`}}>
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                Ready to Establish Your Professional Presence?
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Join hundreds of startups, entrepreneurs, and businesses who trust Myworx for their virtual office needs. Get started in minutes with our flexible plans and comprehensive support.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>

          {/* Extra Content Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              How Virtual Office Transforms Your Business
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Cost-Effective Solution</h4>
                <p className="text-gray-700">
                  Avoid the overhead of renting physical office space. With virtual office solutions starting at just ₹799/month, you get a professional presence without the burden of managing a physical location.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Build Credibility</h4>
                <p className="text-gray-700">
                  A professional business address and dedicated phone line enhance your brand credibility. Clients and business partners perceive you as an established, trustworthy business.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Operational Efficiency</h4>
                <p className="text-gray-700">
                  Let our team handle mail management, call answering, and administrative tasks. You focus on core business activities while we manage the logistics.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Flexibility & Scalability</h4>
                <p className="text-gray-700">
                  No long-term contracts. Upgrade or downgrade your plan anytime as your business grows. Perfect for startups and businesses in transition.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Schedule a Free Consultation</h3>
            <p className="text-gray-600 mb-8">
              Talk to our virtual office specialists and find the perfect plan for your business needs. No commitment required.
            </p>
            <ContactForm />
          </div>

          {/* Partners Section */}
          <Partners title="Trusted by leading companies across India" />
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficePage;
