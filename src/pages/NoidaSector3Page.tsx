import React from 'react';
import LocationDetail from '../components/LocationDetail';

const img1 = new URL('../assets/locations/B6_Sector4.JPG', import.meta.url).href;
const img2 = new URL('../assets/locations/D99_Sector2.JPG', import.meta.url).href;
const img3 = new URL('../assets/locations/A67_Sector2.JPG', import.meta.url).href;
const img4 = new URL('../assets/locations/meetingroom.JPG', import.meta.url).href;

const NoidaSector3Page: React.FC = () => {
  const locationData = {
    title: 'Coworking Space in Noida Sector 3',
    sector: 'Noida Sector - 3',
    address: 'A5, second floor, Near Sector 16 Metro Station, Noida, UP-201301',
    phone1: '+91-977-359-3034',
    phone2: '+91-977-359-3035',
    email: 'contact@myworx.in',
    hours: '09:00 AM - 07:00 PM',
    description: 'Welcome to Myworx Sector 3, your gateway to success in the heart of Noida. Located near Sector 16 metro station, our coworking space offers the perfect blend of modern amenities and professional environment. From flexible hot desks to private cabins, we cater to all your workspace needs. Our vibrant community of entrepreneurs and professionals creates the perfect ecosystem for networking and growth. Enjoy high-speed internet, dedicated support, and a range of premium facilities designed to enhance your productivity.',
    galleryImages: [
      { src: img1, alt: 'Coworking Office Space in Noida Sector 3' },
      { src: img2, alt: 'Coworking Office Space in Noida Sector 3' },
      { src: img3, alt: 'Coworking Space in Noida Sector 3' },
      { src: img4, alt: 'myworx-coworking-sector-3' },
      { src: img1, alt: 'Coworking Office Space in Noida' },
      { src: img2, alt: 'office Space in Noida Sector 3' },
      { src: img3, alt: 'office Space in Noida' },
      { src: img4, alt: 'office Space in Noida' },
    ],
    stats: [
      { number: '16+', label: 'PRIVATE OFFICES' },
      { number: '80+', label: 'FLEXIBLE DESKS' },
      { number: '8+', label: 'MEETINGS ROOM' },
      { number: '6+', label: 'PRIVATE CABIN' },
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
        price: '₹3,499/MO',
        image: img1,
        features: ['High speed internet', 'Fully air condition', 'Free parking space', 'Full access'],
      },
      {
        title: 'Dedicated Seats',
        price: '₹4,499/MO',
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
    mapQuery: 'Myworx Noida Sector 3',
  };

  return <LocationDetail {...locationData} />;
};

export default NoidaSector3Page;
