import React from 'react';
import LocationDetail from '../components/LocationDetail';

const img1 = new URL('../assets/locations/D99_Sector2.JPG', import.meta.url).href;
const img2 = new URL('../assets/locations/A67_Sector2.JPG', import.meta.url).href;
const img3 = new URL('../assets/locations/B6_Sector4.JPG', import.meta.url).href;
const img4 = new URL('../assets/locations/meetingroom.JPG', import.meta.url).href;

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
    galleryImages: [
      { src: img1, alt: 'Coworking Office Space in Noida Sector 1' },
      { src: img2, alt: 'Coworking Office Space in Noida Sector 1' },
      { src: img3, alt: 'Coworking Space in Noida Sector 1' },
      { src: img4, alt: 'myworx-coworking' },
      { src: img1, alt: 'Coworking Office Space in Noida' },
      { src: img2, alt: 'office Space in Noida Sector 1' },
      { src: img3, alt: 'office Space in Noida' },
      { src: img4, alt: 'office Space in Noida' },
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
    ],
    mapQuery: 'Myworx Noida Sector 1',
  };

  return <LocationDetail {...locationData} />;
};

export default NoidaSector1Page;
