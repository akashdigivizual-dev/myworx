import React from 'react';

const sectorOne = new URL('../assets/locations/D99_Sector2.JPG', import.meta.url).href;
const sectorTwo = new URL('../assets/locations/A67_Sector2.JPG', import.meta.url).href;
const sectorThird = new URL('../assets/locations/', import.meta.url).href;
const sectorFour = new URL('../assets/locations/B6_Sector4.JPG', import.meta.url).href;

const locations = [
    {
    id: 1,
    title: "Sector 1, Noida",
    address: "Sector-1, Noida, UP-201301",
    hours: "09:00 AM - 07:00 PM",
    image: sectorOne
  },
  {
    id: 2,
    title: "Sector 2, Noida",
    address: "Near Sector 15 Metro Station, Sector-2, Noida, UP-201301",
    hours: "09:00 AM - 07:00 PM",
    image: sectorTwo
  },
  {
    id: 3,
    title: "Sector 3, Noida",
    address: "A5, second floor sector 2 noida, near sector 16 metro station.",
    hours: "09:00 AM - 07:00 PM",
    image: sectorFour
  },
  {
    id: 4,
    title: "Sector 4, Noida",
    address: "Sector-4, Noida, UP-201301",
    hours: "09:00 AM - 07:00 PM",
    image: sectorFour
  },


 
];

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-12 md:mb-16" style={{ marginTop: '80px'}}>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Our Locations</h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">Premium Workspace Locations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {locations.map((loc) => (
            <div key={loc.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative overflow-hidden h-48 md:h-56">
                <img 
                    src={loc.image} 
                    alt={loc.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 text-xs font-bold text-primary rounded-sm uppercase">
                    Available
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{loc.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4">{loc.address}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-6">
                    <span className="text-xs text-gray-400">Available Time</span>
                    <span className="text-xs font-medium text-gray-700">{loc.hours}</span>
                </div>
                <button className="w-full py-2 md:py-3 border-2 border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-sm hover:border-primary hover:bg-primary hover:text-white transition-all duration-300">
                    Discover
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;