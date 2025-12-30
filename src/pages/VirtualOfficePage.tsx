import React from "react";
import {
  Building,
  Phone,
  MapPin,
  Users,
  Mail,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import Partners from "../components/partners";

const first = new URL(
  "../assets/property/Services/virtual_office/virtual_office_one.jpg",
  import.meta.url
).href;

const second = new URL(
  "../assets/property/Services/virtual_office/virtual_office.jpeg",
  import.meta.url
).href;

const VirtualOfficePage: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: "Virtual Office",
      description:
        "Choose from a wide range of virtual office plans to get GST registration.",
    },
    {
      icon: Phone,
      title: "Call Management",
      description:
        "Our executives will answer your business phone calls and forward it to you.",
    },
    {
      icon: MapPin,
      title: "Business Address",
      description:
        "Get an address for your business in a professional office space.",
    },
    {
      icon: Users,
      title: "Meeting Room",
      description:
        "Get free meeting room access and schedule meetings with clients.",
    },
    {
      icon: Mail,
      title: "Mail Handling",
      description:
        "Our executives will manage your mail and make your work hassle-free.",
    },
    {
      icon: UserCheck,
      title: "Reception Courtesies",
      description:
        "We will welcome your clients and provide them with information about your business.",
    },
  ];

  const features = [
    "Professional business address instantly",
    "GST Registration & Company Registration",
    "Facility for receiving and passing mail and couriers",
    "Nameplate for a business",
    "Access to meeting and conference rooms",
    "An environment that is pure corporate",
    "Buildings and spaces for commercial use",
    "Customer service is available 24/7",
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div
        className="relative h-full w-full bg-black overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${first})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-primary">Home</span>
            <span className="text-gray-300">&gt;</span>
            <span>Virtual Office</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Virtual Office</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Hero Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              GST/BUSINESS/MAILING ADDRESS
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Get Virtual Office Space in Noida for Businesses
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              ₹999/- only per month
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Now make an office without actually being in one! With Virtual
              Office Space in Noida, you can enjoy a professional business
              presence without the need for physical space. Save on rent,
              electricity, and unnecessary expenses while enjoying complete
              business support, including GST registration, mailing address, and
              reception services.
            </p>
            <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 w-fit">
              <a href="/contact">BOOK NOW</a>
            </button>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              Business Registration
            </h4>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Virtual office space in Noida
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get a Virtual Office in Noida for GST registration, company
              registration, and a professional mailing address—all in one place.
              Our virtual office solutions provide an affordable way to
              establish a credible business presence without renting physical
              space or paying high overhead costs. Designed to support startups,
              freelancers, and growing companies, our services include mail
              handling, business address registration, and reception assistance.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Enjoy instant access to a prestigious location, seamless
              documentation support, and professional client handling by our
              expert team. With MyWorx, you can also book meeting rooms or
              workspaces through our app whenever needed. Build trust, save
              costs, and elevate your brand with a premium virtual office in
              Noida that redefines convenience and professionalism.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              OUR SERVICES
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              An Assortment of Services for Virtual Office Space in Noida
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Background Section with Gradient */}
        <div
          className="relative py-16 md:py-24 px-8 rounded-lg mb-20 text-white"
          style={{
            backgroundImage: `url(${second})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
          <div className="relative z-10">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">
              At Minimal Cost
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
              Establish your office in a prime location at minimal cost @
              Rs.999/- PM
            </h2>
            <p className="text-lg mb-6 max-w-3xl leading-relaxed">
              Place your business in the best location with Get Virtual Office
              Space in Noida, offering a credible address and reliable mail
              handling services. We offer Virtual Office Space in Noida with a
              professional mailing address to strengthen your business presence.
              Get your own private office identity with unique mail IDs and
              phone numbers. Our dedicated support team manages every aspect of
              your operations, ensuring you can focus entirely on growing your
              business efficiently and professionally.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-12 rounded-lg transition-colors text-sm sm:text-lg border-2 border-primary"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
              HOW IT WORKS
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Virtual office services can be a great way to build your business
              today
            </h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Step 1: Enter your business details
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Enter your business name, address, and phone number to get
                  started with our virtual office solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  What You Get:
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <Partners />

        {/* Contact Form Section */}
        <div id="booking-form" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm onSuccess={() => window.scrollTo(0, 0)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficePage;
