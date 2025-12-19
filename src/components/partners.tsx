import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const one = new URL('../assets/partners/1.png', import.meta.url).href;
const two = new URL('../assets/partners/2.png', import.meta.url).href;
const three = new URL('../assets/partners/3.png', import.meta.url).href;
const four = new URL('../assets/partners/4.png', import.meta.url).href;
const five = new URL('../assets/partners/5.png', import.meta.url).href;
const six = new URL('../assets/partners/6.png', import.meta.url).href;
const seven = new URL('../assets/partners/7.png', import.meta.url).href;
const eight = new URL('../assets/partners/8.png', import.meta.url).href;
const nine = new URL('../assets/partners/9.png', import.meta.url).href;
const ten = new URL('../assets/partners/10.png', import.meta.url).href;
const eleven = new URL('../assets/partners/11.png', import.meta.url).href;
const twelve = new URL('../assets/partners/12.png', import.meta.url).href;
const thirteen = new URL('../assets/partners/13.png', import.meta.url).href;
const fourteen = new URL('../assets/partners/14.png', import.meta.url).href;
const fifteen = new URL('../assets/partners/15.png', import.meta.url).href;
const sixteen = new URL('../assets/partners/16.png', import.meta.url).href;
const seventeen = new URL('../assets/partners/17.png', import.meta.url).href;
const eighteen = new URL('../assets/partners/18.png', import.meta.url).href;
const nineteen = new URL('../assets/partners/19.png', import.meta.url).href;
const twenty = new URL('../assets/partners/20.png', import.meta.url).href;

interface Brand {
  id: number;
  url: string;
  alt: string;
  link: string;
}

interface PartnersProps {
  title?: string;
  description?: string;
  brands?: Brand[];
}

const defaultBrands: Brand[] = [
  {
    id: 1,
    url: one,
    alt: 'Graphotive', 
    link: '#'
  },
  {
    id: 2,
    url: two,
    alt: 'Brand 2',
    link: '#'
  },
  {
    id: 3,
    url: three,
    alt: 'Brand 3',
    link: '#'
  },
  {
    id: 4,
    url: four,
    alt: 'Brand 4',
    link: '#'
  },
  {
    id: 5,
    url: five,
    alt: 'Brand 5',
    link: '#'
  },
  {
    id: 6,
    url: six,
    alt: 'Brand 6',
    link: '#'
  },
  {
    id: 7,
    url: seven,
    alt: 'Brand 7',
    link: '#'
  },
  {
    id: 8,
    url: eight,
    alt: 'Brand 8',
    link: '#'
  },
  {
    id: 9,
    url: nine,
    alt: 'Brand 9',
    link: '#'
  },
  {
    id: 10,
    url: ten,
    alt: 'Brand 10',
    link: '#'
  },
  {
    id: 11,
    url: eleven,
    alt: 'Brand 11',
    link: '#'
  },
  {
    id: 12,
    url: twelve,
    alt: 'Brand 12',
    link: '#'
  },
  {
    id: 13,
    url: thirteen,
    alt: 'Brand 13',
    link: '#'
  },
  {
    id: 14,
    url: fourteen,
    alt: 'Brand 14',
    link: '#'
  },
  {
    id: 15,
    url: fifteen,
    alt: 'Brand 15',
    link: '#'
  },
  {
    id: 16,
    url: sixteen,
    alt: 'Brand 16',
    link: '#'
  },
  {
    id: 17,
    url: seventeen,
    alt: 'Brand 17',
    link: '#'
  },
  {
    id: 18,
    url: eighteen,
    alt: 'Brand 18',
    link: '#'
  },
  {
    id: 19,
    url: nineteen,
    alt: 'Brand 19',
    link: '#'
  },
  {
    id: 20,
    url: twenty,
    alt: 'Brand 20',
    link: '#'
  }
];

const Partners: React.FC<PartnersProps> = ({
  title = 'Our Partners',
  description = 'We collaborate with leading brands and companies to bring you the best solutions.',
  brands = defaultBrands
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth < 1366) {
        setItemsPerPage(5);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, brands.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % brands.length);
    setIsAutoPlay(false);
  };

  const getVisibleBrands = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(brands[(currentIndex + i) % brands.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
            OUR PARTNERS
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Items */}
          <div className="overflow-hidden">
            <div className="flex justify-center items-center gap-4 md:gap-6">
              {getVisibleBrands().map((brand) => (
                <a
                  key={brand.id}
                  href={brand.link}
                  target={brand.link !== '#' ? '_blank' : undefined}
                  rel={brand.link !== '#' ? 'noopener noreferrer' : undefined}
                  className="flex-shrink-0 w-24 md:w-32 lg:w-40 h-20 md:h-24 lg:h-28 bg-white border border-gray-100 rounded-lg p-3 md:p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer"
                >
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlay(false)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-16 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-lg hover:scale-110"
            aria-label="Previous brands"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlay(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-16 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-lg hover:scale-110"
            aria-label="Next brands"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
          {Array.from({ length: Math.ceil(brands.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index * itemsPerPage);
                setIsAutoPlay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / itemsPerPage)
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;