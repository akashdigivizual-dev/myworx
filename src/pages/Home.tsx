import React from 'react';
import HeroSlider from '../components/HeroSlider';
import WorkspaceOverview from '../components/WorkspaceOverview';
import BeyondDesk from '../components/BeyondDesk';
import Workspaces from './Workspaces';
import VirtualTour from '../components/VirtualTour';
import FAQSection from '../components/FAQSection';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';

const Home: React.FC = () => {
  return (
    <>
      <HeroSlider />
      <WorkspaceOverview />
      <BeyondDesk />
      <Workspaces />
      <VirtualTour />
      <FAQSection />
      <Testimonials />
      <WhyChooseUs />
    </>
  );
};

export default Home;
