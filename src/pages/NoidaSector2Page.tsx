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

const NoidaSector2Page: React.FC = () => {
  const locationData = {
    title: 'Coworking Space in Noida Sector 2',
    sector: 'Noida Sector - 2',
    address: 'Noida Sector 2, Near Sector 15 metro station, UP-201301',
    phone1: '+91-977-359-3034',
    phone2: '+91-977-359-3035',
    email: 'contact@myworx.in',
    hours: '09:00 AM - 07:00 PM',
    description: 'Experience premium coworking at Myworx Sector 2, strategically located near Sector 15 metro station. Our state-of-the-art facilities provide the perfect environment for startups, entrepreneurs, and established businesses. With high-speed internet, comfortable workspaces, and a vibrant community, we offer everything you need to succeed. Our dedicated team ensures a productive and collaborative atmosphere. Whether you need flexible hot desks, dedicated seats, or private cabins, we have the perfect solution for your business needs.',
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
      { number: '4+', label: 'PRIVATE OFFICES' },
      { number: '90+', label: 'FLEXIBLE DESKS' },
      { number: '5+', label: 'MEETINGS ROOM' },
      { number: '4+', label: 'PRIVATE CABIN' },
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
        title: 'Meeting/Conference Rooms',
        price: '₹499/HR',
        image: img4,
        features: ['High speed internet', 'Free parking space', 'Fully air conditioner', 'LED/Projector/White board'],
      },
    ],
    mapQuery: 'Myworx Noida Sector 2',
  };

  return <LocationDetail {...locationData} />;
};

export default NoidaSector2Page;
