import React from 'react';
import { ChevronRight, Building, Phone, MapPin, Users, Mail, CheckCircle, BookOpen } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Partners from '../components/partners';

const BusinessRegistration: React.FC = () => {
  const benefits = [
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
      description: "Choose from a wide range of virtual office plans to get GST registration."
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Breadcrumb Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-black overflow-hidden">
        <img 
          src="https://www.myworx.in/wp-content/uploads/2024/11/DSC06213-scaled.jpg" 
          alt="Virtual Office" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <div className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-primary hover:underline cursor-pointer">Home</span> 
            <ChevronRight size={16} className="text-gray-400" />
            <span>Virtual Office for Business Registration</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            Virtual Office in Noida for Business Registration
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
                Virtual office for business registration
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get Business registration ready by renting a virtual office space in Noida
              </h3>
              <p className="text-4xl font-bold text-primary mb-8">
                ₹ 999/- <span className="text-lg text-gray-600">per month</span>
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 max-w-fit">
                Book Now
              </button>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col justify-center space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                Business registration Virtual office in Noida
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                At Myworx we offer virtual office space with business registration. You can choose any location to register and will receive full documentation, in-office services and address of the location. You won't have to struggle for NOC, utility bills, electricity bills, rent agreement and other documents. A virtual space is highly suitable for freelancers, startups and small to medium sized businesses. You can have a presence in multiple cities without incurring expense on physical offices across cities.
              </p>
            </div>
          </div>

          {/* CTA Section with Background */}
          <div className="relative py-16 md:py-24 px-8 md:px-16 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 mb-16 md:mb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-lg md:text-xl font-semibold text-gray-600 mb-4">
                Get The Professional Office Space You Need For Your Business at an Affordable Price!
              </h6>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8">
                Explain with as many details as possible to the executive what you would like to get registered for business.
              </h2>
              <button className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
                BOOK NOW
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
          <div className="relative py-16 md:py-24 px-8 md:px-16 rounded-lg bg-cover bg-center mb-16 md:mb-24" style={{backgroundImage: 'url(https://www.myworx.in/wp-content/uploads/2024/12/virtual-office-1.webp)'}}>
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                Get virtual office space for business registration in noida
              </h2>
              <div className="space-y-4 text-base leading-relaxed mb-8">
                <p>
                  When you are planning to start a business, the first step is to get registered. And for that, you need an office space. But what if you don't have an office yet? Then you can go for a virtual office.
                </p>
                <p>
                  A virtual office is an Office Space which is provided by the companies without any physical existence. It helps the businesses to get their work done by providing them with all the necessary resources and tools virtually. It also offers various other services such as mail handling, telephone answering, etc.
                </p>
                <p>
                  There are many advantages of using a virtual office for business registration in Noida. The main advantage is that it saves a lot of money as you don't have to set up a physical office. Moreover, it is very convenient as you can access your office from anywhere in the world.
                </p>
              </div>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Find A Workspace
              </button>
            </div>
          </div>

          {/* Sector 2 Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Virtual office in Noida Sector 2
            </h4>
            <p className="text-gray-700 text-base mb-8">
              Noida Sector 2 is an upcoming business hub and a great place to set up a virtual office. There are many benefits of having a virtual office in Noida Sector 2. Some of them are:
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Establish your office in a prime location at minimal cost @ Rs.999/-PM, only
            </h4>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              In today's fast paced world, a virtual office can be a great way to get your business up and running quickly and efficiently, without the hassle and expense of leasing traditional office space. At Office Address India, we offer virtual office packages starting at just Rs.999/- per month, which includes a prime business address in Mumbai, Delhi or Bangalore, mail and package handling, access to meeting rooms and coworking spaces, and much more. With our virtual office packages, you can have everything you need to get your business off the ground without breaking the bank. Contact us today to learn more about our virtual office packages and how we can help you get your business up and running quickly and efficiently.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Schedule a Visit</h3>
            <p className="text-gray-600 mb-8">
              Book a private viewing and let our specialists design a plan based on your lifestyle needs!
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

export default BusinessRegistration;
