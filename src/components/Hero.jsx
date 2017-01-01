import React from 'react';

import Header from './Header';

import logo from '../assets/images/heroLogo.png';

const Hero = ({links}) => {
  return (
    <div className="hero">
      <Header links={links}/>
      <div className="hero-main">
        <img src={logo} className="hero-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Hero;