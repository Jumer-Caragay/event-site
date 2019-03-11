import React from 'react';
import Hero from '../components/Hero';
import EventText from '../components/EventText';
// import Navigation from '../components/Navigation';
import './index.module.css';
import './fonts.module.css';

const IndexPage = () => (
  <div className="layout">
    {/* <Navigation /> */}
    <Hero />
    <EventText />
  </div>
);

export default IndexPage;
