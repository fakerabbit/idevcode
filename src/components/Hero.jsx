import React from 'react';

import Header from './Header';

import logo from '../assets/images/heroLogo.png';

const Hero = () => {
  return (
    <div className="hero">
      <Header/>
      <div className="hero-main">
        <img src={logo} className="hero-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Hero;