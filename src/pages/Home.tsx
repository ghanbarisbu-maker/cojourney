import React from 'react';
import { Hero } from '../components/Hero';
import AreasOfSupport from '../components/AreasOfSupport';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import StickyBanner from '../components/StickyBanner';

const Home = () => {
  return (
    <>
      <Hero />
      <AreasOfSupport />
      <Services />
      <About />
      <TeamSection />
      <Testimonials />
      <Contact />
      <StickyBanner />
    </>
  );
};

export default Home;