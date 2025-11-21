import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Workspace {
  id: number;
  title: string;
  teamSize: string;
  description: string;
  price: string;
  image: string;
}

const workspaces: Workspace[] = [
  // {
  //   id: 1,
  //   title: "Night Shift",
  //   teamSize: "Ideal for team size Any",
  //   description: "Comfortable and appealing office space best suited for work during dark hours.",
  //   price: "₹5,000-7000/per month",
  //   image: "src/assets/bestCoworkingSpace.jpg"
  // },
  // {
  //   id: 2,
  //   title: "Private Workspace",
  //   teamSize: "Ideal for team size 4/6/8 seater private cabin",
  //   description: "A secure space that facilitates seamless collaboration, ensures privacy, and eases work.",
  //   price: "₹5,000/- per seat/per month",
  //   image: "src/assets/bestCoworkingSpace.jpg"
  // },
  {
    id: 3,
    title: "Meeting Room",
    teamSize: "Ideal for team size all",
    description: "Brainstorm with your team with fully equipped meeting rooms boasting of modern design.",
    price: "₹500/per hour",
    image: "https://www.myworx.in/wp-content/uploads/2024/11/DSC06153-1260x800.jpg"
  },
  {
    id: 4,
    title: "Day Pass",
    teamSize: "Ideal for team size Individuals and Freelancers",
    description: "Get started with your work day in a vibrant setup. Highly suitable for freelancers, remote workers, and small teams.",
    price: "₹499/per day",
    image: "https://www.myworx.in/wp-content/uploads/2024/11/2.jpg"
  },
  {
    id: 5,
    title: "Coworking Space",
    teamSize: "Ideal for team size all",
    description: "Flexible and comfortable workspace that is perfect for collaboration in a small team.",
    price: "₹5000-7,000/- per month",
    image: "https://www.myworx.in/wp-content/uploads/2024/11/co-working-space.jpg"
  },
  {
    id: 6,
    title: "Virtual Office",
    teamSize: "Ideal for team size 80+",
    description: "Work from anywhere with all round support, professional appeal, and easy communication facilities.",
    price: "₹2,000/per month",
    image: "https://www.myworx.in/wp-content/uploads/2022/08/3.jpg"
  }
];

const Workspaces: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workspaces.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workspaces.length - 1 : prevIndex - 1
    );
  };

  const getCurrentSlide = () => workspaces[currentIndex];

  return (
    <section id="workspaces" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Our Workspaces</h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Choose Your Perfect Workspace</h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={getCurrentSlide().image}
                  alt={getCurrentSlide().title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {getCurrentSlide().title}
                  </h3>

                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <span className="text-primary font-semibold mr-2">👥</span>
                    {getCurrentSlide().teamSize}
                  </div>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                    {getCurrentSlide().description}
                  </p>

                  <div className="mb-8">
                    <span className="text-gray-500 text-xs font-semibold uppercase">from</span>
                    <p className="text-2xl md:text-3xl font-bold text-primary mt-1">
                      {getCurrentSlide().price}
                    </p>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-orange-600 text-white py-3 font-bold uppercase tracking-widest text-sm transition-colors duration-300 rounded-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-primary hover:bg-orange-600 text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-primary hover:bg-orange-600 text-white transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {workspaces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Indicator Text */}
          <div className="text-center mt-6 md:hidden">
            <p className="text-sm text-gray-600">
              Workspace {currentIndex + 1} of {workspaces.length}
            </p>
          </div>
        </div>

        {/* All Workspaces Grid (Optional - Below Carousel) */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">All Workspace Options</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workspaces.map((workspace) => (
              <div
                key={workspace.id}
                className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  workspace.id === getCurrentSlide().id
                    ? 'border-primary bg-orange-50'
                    : 'border-gray-200 bg-white hover:border-primary'
                }`}
                onClick={() => setCurrentIndex(workspace.id - 1)}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{workspace.title}</h4>
                <p className="text-xs text-gray-600 mb-3">{workspace.teamSize}</p>
                <p className="text-primary font-bold text-sm">{workspace.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workspaces;
