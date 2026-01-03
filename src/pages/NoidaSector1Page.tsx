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
const img9 = new URL('../assets//locations/D99_Sector2.JPG', import.meta.url).href;

const NoidaSector1Page: React.FC = () => {
  const locationData = {
    title: 'Coworking Space in Noida Sector 1',
    sector: 'Noida Sector - 1',
    address: 'Sector-1, Noida, UP-201301',
    phone1: '+91-977-359-3034',
    phone2: '+91-977-359-3035',
    email: 'contact@myworx.in',
    hours: '09:00 AM - 07:00 PM',
    description: 'Are you looking for a coworking space in NOIDA Sector 1 that offers high-speed internet, housekeeping, electricity, printer/scanner, meeting room, and unlimited tea & coffee? Look no further than Myworx! Myworx is a premium coworking space located in the heart of NOIDA Sector 1, near the Sector-15 metro station. We offer a variety of workspace options to suit your needs, including hot desks, dedicated desks, and private cabins. Placed in a strategic location, we offer convenience, connectivity and comfort. Our location is close to restaurants, malls and markets, so you get the best space for best prices. Get access to the growing entrepreneurial ecosystem of NOIDA.',
    backgroundImage: [
      {src: img9, alt: 'Coworking Space in Noida Sector 1',}
    ],
    galleryImages: [
      { src: img1, alt: 'Coworking Office Space in Noida Sector 1' },
      { src: img2, alt: 'Coworking Office Space in Noida Sector 1' },
      { src: img3, alt: 'Coworking Space in Noida Sector 1' },
      { src: img4, alt: 'myworx-coworking' },
      { src: img5, alt: 'Coworking Office Space in Noida' },
      { src: img6, alt: 'office Space in Noida Sector 1' },
      { src: img7, alt: 'office Space in Noida' },
      { src: img8, alt: 'office Space in Noida' },
    ],
    stats: [
      { number: '20+', label: 'PRIVATE OFFICES' },
      { number: '100+', label: 'FLEXIBLE DESKS' },
      { number: '10+', label: 'MEETINGS ROOM' },
      { number: '8+', label: 'PRIVATE CABIN' },
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
        price: '₹4,999/MO',
        image: img3,
        features: ['High speed internet', 'Fully air condition', 'Free parking space', 'Full access'],
      },
      {
        title: 'Virtual Office Space',
        price: '₹1,999/MO',
        image: img4,
        features: ['Business Registration', 'GST Registration', 'Bank Account Opening', 'Mailing Address'],
      },
      {
        title: 'Virtual Office Space',
        price: '₹499/hr',
        image: img5,
        features: ['High speed internet', 'Free parking space', 'Fully air conditioner', 'LED/Projector/White board'],
      },
      {
        title: 'Training Room/Event Space',
        price: '₹1,799/hr',
        image: img6,
        features: ['High speed internet', 'Free parking space', 'Fully air conditioner', 'LED/Projector/White board'],
      },
    ],
    mapQuery: 'Myworx Noida Sector 1',
  };

  return <LocationDetail {...locationData} />;
};

export default NoidaSector1Page;
