import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  avatar: string;
  content: string;
  name: string;
  job: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    avatar: "https://www.myworx.in/wp-content/uploads/2024/10/default-avatar-icon-of-social-media-user-vector.jpg",
    content: "The finest coworking space for startups to begin their journey in a peaceful yet energetic environment, featuring a modern café, vibrant community, and premium amenities that inspire growth, creativity, and success every day.",
    name: "HARISH CHAUDHARY",
    job: "Coworker"
  },
  {
    id: 2,
    avatar: "https://www.myworx.in/wp-content/uploads/2024/10/default-avatar-icon-of-social-media-user-vector.jpg",
    content: "A premium coworking space offering all modern facilities and a beautiful café. Experience a vibrant work atmosphere, high-end amenities, and a community that inspires productivity, comfort, and collaboration every day.",
    name: "KASIM CHAUDHARY",
    job: "Coworker"
  },
  {
    id: 3,
    avatar: "https://www.myworx.in/wp-content/uploads/2024/10/default-avatar-icon-of-social-media-user-vector.jpg",
    content: "An awesome coworking space for businesses, offering all essential facilities, modern interiors, and a productive environment that encourages growth and success.",
    name: "SHRISHTI PATIL",
    job: "Coworker"
  },
  {
    id: 4,
    avatar: "https://www.myworx.in/wp-content/uploads/2024/10/default-avatar-icon-of-social-media-user-vector.jpg",
    content: "A vibrant coworking space with a beautiful ambiance and exceptional service from MyWorx. Experience top-notch facilities, quick assistance, and a motivating environment that enhances creativity, comfort, and professional growth every day.",
    name: "ASHISH SHARMA",
    job: "Coworker"
  },
  {
    id: 5,
    avatar: "https://www.myworx.in/wp-content/uploads/2024/10/default-avatar-icon-of-social-media-user-vector.jpg",
    content: "Experience a vibrant ambiance with a modern cafeteria and inspiring coworking space for professionals. Enjoy premium amenities, comfortable seating, and a collaborative environment that enhances productivity and creativity every day.",
    name: "PARAMVEER HUDDA",
    job: "Coworker"
  }
];

const ReviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? reviewsData.length - itemsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= reviewsData.length - itemsPerView ? 0 : prev + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(reviewsData[(currentIndex + i) % reviewsData.length]);
    }
    return visible;
  };

  const maxDots = Math.max(1, reviewsData.length - itemsPerView + 1);

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-3">
            Clients Talk
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {getVisibleReviews().map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-6 flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Review Content */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {review.content}
                </p>

                {/* Reviewer Info */}
                <div className="mt-auto">
                  <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">
                    {review.name}
                  </h5>
                  <p className="text-xs text-gray-400 font-light">{review.job}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:translate-x-0 md:left-4 bg-white border border-gray-300 rounded-full p-3 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-md"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-0 md:right-4 bg-white border border-gray-300 rounded-full p-3 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-md"
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: maxDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-primary w-8 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
