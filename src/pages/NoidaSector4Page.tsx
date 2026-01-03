import React from 'react';
import LocationDetail from '../components/LocationDetail';

const img1 = new URL('../assets/locations/sector_1/floating-desk.jpg', import.meta.url).href;
const img2 = new URL('../assets/locations/sector_1/dedicated-seats.webp', import.meta.url).href;
const img3 = new URL('../assets/locations/sector_1/private-cabin.jpg', import.meta.url).href;
const img4 = new URL('../assets/locations/sector_1/virtual-office.jpg', import.meta.url).href;
const img5 = new URL('../assets/locations/sector_1/meeting-room.jpg', import.meta.url).href;
const img6 = new URL('../assets/locations/sector_1/training-room.jpg', import.meta.url).href;
const img7 = new URL('../assets/locations/sector_1/virtual-office.jpg', import.meta.url).href;
const img8 = new URL('../assets/locations/sector_1/myworx-coworking-1.webp', import.meta.url).href;

const img9 = new URL('../assets/locations/A67_Sector2.JPG', import.meta.url).href;
const NoidaSector4Page: React.FC = () => {
  const locationData = {
    title: 'Coworking Space in Noida Sector 4',
    sector: 'Noida Sector - 4',
    address: 'Sector-4, Noida, UP-201301',
    phone1: '+91-977-359-3034',
    phone2: '+91-977-359-3035',
    email: 'contact@myworx.in',
    hours: '09:00 AM - 07:00 PM',
    description: 'Discover Myworx Sector 4, the ultimate destination for modern workspace solutions in Noida. Our premium coworking space is designed to foster innovation, collaboration, and growth. With cutting-edge facilities, reliable connectivity, and a supportive community, we create the ideal environment for your business to thrive. Whether you\'re a startup, freelancer, or established company, our flexible packages and world-class amenities ensure you have everything you need to succeed. Join our growing network of successful entrepreneurs and professionals.',
        backgroundImage: [
      {src: img9, alt: 'Coworking Space in Noida Sector 1',}
    ],
    galleryImages: [
      { src: img1, alt: 'Coworking Office Space in Noida Sector 4' },
      { src: img2, alt: 'Coworking Office Space in Noida Sector 4' },
      { src: img3, alt: 'Coworking Space in Noida Sector 4' },
      { src: img4, alt: 'myworx-coworking-sector-4' },
      { src: img5, alt: 'Coworking Office Space in Noida' },
      { src: img6, alt: 'office Space in Noida Sector 1' },
      { src: img7, alt: 'office Space in Noida' },
      { src: img8, alt: 'office Space in Noida' },
    ],
    stats: [
      { number: '22+', label: 'PRIVATE OFFICES' },
      { number: '110+', label: 'FLEXIBLE DESKS' },
      { number: '12+', label: 'MEETINGS ROOM' },
      { number: '9+', label: 'PRIVATE CABIN' },
    ],
    amenities: [
      { icon: 'wifi', title: 'High-Speed Internet' },
      { icon: 'power', title: 'Power Backup 24/7*' },
      { icon: 'mail', title: 'Mail and Packaging' },
      { icon: 'coffee', title: 'Unlimited Tea & Coffee' },
      { icon: 'dining', title: 'Dining Options' },
      { icon: 'clean', title: 'Housekeeping' },
    ],
    packages: [
      {
        title: 'Floating Seats',
        price: '₹3,999/MO',
        image: img1,
        features: ['High speed internet', 'Fully air condition', 'Free parking space', 'Full access'],
      },
      {
        title: 'Dedicated Seats',
        price: '₹4,999/MO',
        image: img2,
        features: ['High speed internet', 'Fully air condition', 'Free parking space', 'Full access'],
      },
      {
        title: 'Private Cabin',
        price: '₹5,499/MO',
        image: img3,
        features: ['High speed internet', 'Fully air condition', 'Free parking space', 'Full access'],
      },
      {
        title: 'Training Room/Event Space',
        price: '₹1,799/HR',
        image: img4,
        features: ['High speed internet', 'Free parking space', 'Fully air conditioner', 'LED/Projector/White board'],
      },
    ],
    mapQuery: 'Myworx Noida Sector 4',
  };

  return <LocationDetail {...locationData} />;
};

export default NoidaSector4Page;
