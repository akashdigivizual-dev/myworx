import React from "react";
import { CheckCircle } from "lucide-react";
const price0 = new URL('../assets/pricePage/price_page1.jpg', import.meta.url).href;
const price1 = new URL('../assets/pricePage/price_page2.jpg', import.meta.url).href;
const price2 = new URL('../assets/pricePage/price_page3.jpg', import.meta.url).href;
const price3 = new URL('../assets/pricePage/price_page4.jpg', import.meta.url).href;
const price4 = new URL('../assets/pricePage/price_page5.jpg', import.meta.url).href;
// const price5 = new URL('../assets/pricePage/price_page6.jpg', import.meta.url).href;
const price6 = new URL('../assets/pricePage/price_page7.jpg', import.meta.url).href;
const img4 = new URL('../assets/locations/meetingroom.JPG', import.meta.url).href;
const floating_desk = new URL('../assets/pricePage/floating_desk.jpg', import.meta.url).href;
const bookMeetingRoomImage = new URL('../assets/locations/book-meeting-room.jpg', import.meta.url).href;
const meetingRoom = new URL('../assets/meetingRoom.jpg', import.meta.url).href;


const Price: React.FC = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Dedicated Seats",
      price: "₹4999",
      period: "per month",
      image: price0,
      features: ["High speed internet", "Fully air condition", "Power Backup"],
    },
    {
      id: 2,
      title: "Floating Seats",
      price: "₹3999",
      period: "per month",
      image: price1,
      features: ["High speed internet", "Fully air condition", "Electricity"],
    },
    {
      id: 3,
      title: "Private Cabin Seats",
      price: "₹4999",
      period: "per month",
      image: price2,
      features: ["High speed internet", "Fully air condition", "Electricity"],
    },
    {
      id: 4,
      title: "Virtual Office Space",
      price: "₹1999",
      period: "per month",
      image: price3,
      features: ["Business Registration", "GST Registration", "Mailing Address"],
    },
    {
      id: 5,
      title: "Meeting/Conference Rooms",
      price: "₹499",
      period: "per hour",
      image: price4,
      features: ["Business Registration", "GST Registration", "Fully Air Condition"],
    },
    {
      id: 6,
      title: "Training Room/Event Space",
      price: "₹1799",
      period: "per hour",
      image: meetingRoom,
      features: ["Business Registration", "GST Registration", "Fully Air Condition"],
    },
  ];

  const additionalServices = [
    {
      title: "Day Pass",
      description: "We make it easy to find an office for your daily business needs.",
      price: "₹499/day",
      image: price6,
    },
    {
      title: "Meeting Room",
      description: "We make it easy to find an office for your daily business needs.",
      price: "₹499/hrs",
      image: img4,
    },
    {
      title: "Floating Desks",
      description: "We offer floating space...allotted as per your timings...any part of the day/night.",
      price: "₹3999/month",
      image: floating_desk,
    },
    {
      title: "Conference Room",
      description: "We provide training rooms and event space as per your need.",
      price: "₹499/hrs.",
      image: meetingRoom,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Breadcrumb */}
      <section
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            `url("${bookMeetingRoomImage}")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex justify-center items-center text-sm md:text-base font-medium">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span className="mx-3">&gt;</span>
            <span className="text-primary">Price</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Price</h1>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Myworx Coworking Space in Noida, <br className="hidden md:block" />
              Pricing Plans
            </h2>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-300">
                    Click Here
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column */}
            <div className="space-y-12">
              {additionalServices.slice(0, 2).map((service, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {service.price}
                    </p>
                    <button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors duration-300 text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {additionalServices.slice(2, 4).map((service, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {service.price}
                    </p>
                    <button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors duration-300 text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div className="text-center pt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore<br className="md:hidden" /> Myworx Coworking Spaces
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
