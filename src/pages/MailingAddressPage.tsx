import React from 'react';
import { ChevronRight, Building, Phone, MapPin, Users, Mail, CheckCircle, BookOpen } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Partners from '../components/partners';
const bookMeetingRoomImage = new URL('../assets/locations/book-meeting-room.jpg', import.meta.url).href;
const background2 = new URL('../assets/locations/background2.jpg', import.meta.url).href;



const MailingAddressPage: React.FC = () => {
  const benefitsList = [
    "You can use it as your business address.",
    "You can have a local phone number and fax number for your business.",
    "You can use the meeting rooms and conference facilities at the office.",
    "You can get mail forwarding and courier services at the office.",
    "You can get access to secretarial and administrative support services."
  ];

  const features = [
    {
      icon: Building,
      title: "Virtual Office",
      description: "Choose from a wide range of virtual office plans to get professional mailing address."
    },
    {
      icon: Phone,
      title: "Call Answering",
      description: "Our executive will answer your business client's phone call and forward it to you."
    },
    {
      icon: MapPin,
      title: "Business Address",
      description: "Get Professional Business Address for your business in a Commercial business place."
    },
    {
      icon: Users,
      title: "Meeting Room",
      description: "Get free meeting room access and schedule your business meeting with your clients."
    },
    {
      icon: Mail,
      title: "Mail Handling",
      description: "Our highly trained executive understands your requirements and provides you with the best solution in minutes."
    },
    {
      icon: BookOpen,
      title: "Reception Courtesies",
      description: "We will entertain your clients and visitors, inform them about your business & services, and provide them with information about your business."
    }
  ];

  const steps = [
    {
      title: "Enter your business details",
      description: "Enter your business name, address, and phone number."
    },
    {
      title: "Choose your plan",
      description: "Choose your Myworx plan and add any additional features you need."
    },
    {
      title: "Start using immediately",
      description: "Complete your purchase and start using your new Myworx address immediately."
    }
  ];

  const mailingAddressContent = [
    {
      title: "Get a Professional Virtual Office for Mailing Address Today",
      description: "Enhance your business credibility with a Virtual Office for Mailing Address. Get a prime business location to receive mail, packages, and official correspondence. Our team manages and forwards your mail securely, giving you the flexibility to operate from anywhere while maintaining a strong local presence."
    },
    {
      title: "Simplify Business Mail with a Virtual Office for Mailing Address",
      description: "A Virtual Office for Mailing Address helps you establish a professional identity without a physical office. Receive mail, access it digitally, and manage all communication effortlessly. Ideal for startups, freelancers, and remote businesses seeking reliability and trust with a cost-effective solution."
    },
    {
      title: "Manage Business Mail Remotely with a Virtual Office Address",
      description: "With a Virtual Office for Mailing Address, you can maintain a local presence in prime business areas. We handle mail collection, secure storage, and quick forwarding, ensuring you never miss important correspondence while focusing on your business growth."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Breadcrumb Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-black overflow-hidden">
        <img 
          src={bookMeetingRoomImage} 
          alt="Mailing Address" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <div className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-primary hover:underline cursor-pointer">Home</span> 
            <ChevronRight size={16} className="text-gray-400" />
            <span>Virtual Office for Mailing Address</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            Virtual Office for Mailing Address in Noida
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section with Pricing and Description */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
            {/* Left Column - Pricing and CTA */}
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
                Virtual Office Solution
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Work from anywhere. Get virtual office for mailing address in noida.
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get A Professional Mailing Address Anywhere With Myworx
              </h3>
              <p className="text-4xl font-bold text-primary mb-8">
                ₹ 799/- <span className="text-lg text-gray-600">per month</span>
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 max-w-fit">
                <a href="/contact">BOOK NOW</a>
              </button>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col justify-center space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                Business registration Virtual office in Noida
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                With a virtual office in Noida, you can maintain a local physical presence without actually being there. We collect and securely store your mail, notifying you upon every delivery. Access your mail from anywhere with our prompt scanning and forwarding services. Use this professional address on business cards, websites, and official documents to build trust and credibility for your brand.
              </p>
            </div>
          </div>

          {/* CTA Section with Background */}
          <div className="relative py-16 md:py-24 px-8 md:px-16 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 mb-16 md:mb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-lg md:text-xl font-semibold text-gray-600 mb-4">
                Only ₹ 799/per/month
              </h6>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8">
                Get a Professional Mailing Address and Expand Your Business with Myworx!
              </h2>
              <p className="text-gray-600 mb-8">
                We offer a virtual office in Noida with a professional mailing address to enhance your business presence. Get your own private office setup with unique mail IDs and dedicated phone numbers. Our expert team handles every operational detail, allowing you to focus on growing your business seamlessly.
              </p>
              <button className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
                <a href="/contact">BOOK NOW</a>
              </button>
            </div>
          </div>

          {/* Features Grid - First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            {features.slice(0, 3).map((feature, index) => {
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

          {/* Features Grid - Second Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            {features.slice(3, 6).map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index + 3} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center">
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

          {/* Content Section with Background */}
          <div className="relative py-16 md:py-24 px-8 md:px-16 rounded-lg bg-cover bg-center mb-16 md:mb-24" style={{backgroundImage: `url(${background2})`}}>
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                Get the Professional Edge with a Virtual Office in Noida
              </h2>
              <div className="space-y-4 text-base leading-relaxed mb-8">
                <p>
                  Myworx offers the best virtual office service in Noida for mailing address to startups, freelancers, entrepreneurs & small business owners. We offer a variety of packages to suit your needs.
                </p>
                <p>
                  Myworx was founded with the goal of providing an affordable and convenient solution for businesses and freelancers who need a mailing address in Noida. We offer a variety of features such as mail forwarding, package receiving, and virtual office space rental. We're committed to providing our customers with the best possible experience, and we're always available to answer any questions you may have.
                </p>
              </div>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                <a href="/contact">Find A Workspace</a>
              </button>
            </div>
          </div>

          {/* Mailing Address Content Cards */}
          <div className="mb-16 md:mb-24">
            <div className="space-y-12">
              {mailingAddressContent.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 md:p-12">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mailing Address Benefits Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Myworx for Virtual Office Mailing Address?
            </h4>
            <p className="text-gray-700 text-base mb-8">
              Noida is an upcoming business hub and a great place to set up a virtual office for mailing address services. There are many benefits of having a virtual office in Noida for your mailing needs. Some of them are:
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Get Professional Mailing Address at minimal cost @ Rs.799/-PM, only
            </h4>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              In today's fast paced world, a virtual office with mailing address service can be a great way to establish your business quickly and efficiently, without the hassle and expense of leasing traditional office space. At Myworx, we offer virtual office packages starting at just Rs.799/- per month, which includes a prime business address in Noida, mail and package handling, access to meeting rooms and coworking spaces, call answering services, reception courtesies, and much more. With our virtual office packages, you can have everything you need to get your mailing address professionally managed without breaking the bank. Contact us today to learn more about our virtual office packages and how we can help you establish a professional mailing address quickly and efficiently.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-lg p-8 md:p-12 mb-16 md:mb-24 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">How It Works</h3>
            <p className="text-gray-600 mb-8">
              Getting started with your professional mailing address is simple and straightforward.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Schedule a Visit</h3>
            <p className="text-gray-600 mb-8">
              Book a private viewing and let our specialists design a plan based on your mailing address and business needs!
            </p>
            <ContactForm />
          </div>

          {/* Partners Section */}
          <Partners title="Trusted by leading companies" />
        </div>
      </div>
    </div>
  );
};

export default MailingAddressPage;
