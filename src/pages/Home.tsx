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
      <div id="areas">
        <AreasOfSupport />
      </div>
      <div id="services">
        <Services />
      </div>
      <About />
      <div id="team">
        <TeamSection />
      </div>
      <Testimonials />
      <Contact />
      <StickyBanner />
    </>
  );
};

export default Home;