import React from 'react';

import mirko from '../assets/images/mirko.png';
import business from '../assets/images/business.png';
import businessCtr from '../assets/images/businessCenter.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-main">
        <img src={mirko} className="about-img" alt="logo" />
        <img src={businessCtr} className="about-center" alt="titleCtr" />
        <img src={business} className="about-title" alt="title" />
        <a href="https://github.com/fakerabbit"><img src={github} className="about-git" alt="github" /></a>
        <a href="https://www.linkedin.com/in/mirkojustiniano"><img src={linkedin} className="about-in" alt="linked" /></a>
      </div>
    </div>
  );
};

export default About;