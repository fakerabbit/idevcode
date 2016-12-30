import React from 'react';
import logo from '../assets/images/idevcodeLogo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" width='180' height='30' />
      </div>
      <div className="header-right"></div>
    </header>
  );
};

export default Header;