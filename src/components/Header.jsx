import React from 'react';
import logo from '../assets/images/idevcodeLogo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/"><img src={logo} alt="logo" width='180' height='30' /></a>
      </div>
      <div className="header-right"></div>
    </header>
  );
};

export default Header;