import React from 'react';
import Hero from './Hero';
// import Features from './Features';
import Workspaces from './Workspaces';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Workspaces />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default Home;
