import React from 'react';
import Hero from '../components/Hero';
import EventText from '../components/EventText';
import Organizations from '../components/Organizations';
import FAQ from '../components/FAQ';
// import Navigation from '../components/Navigation';
import './index.module.css';
import './fonts.module.css';

const IndexPage = () => (
  <div className="layout">
    {/* <Navigation /> */}
    <Hero />
    <EventText />
    <Organizations />
    <FAQ />
  </div>
);

export default IndexPage;
