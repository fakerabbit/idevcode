import React from 'react';
import logo from '../assets/images/idevcodeLogo.png';

const Header = ({links}) => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/"><img src={logo} alt="logo" width='180' height='30' /></a>
      </div>
      <div className="header-right">
        <ul>
          {links.map(function(link){
            return <li key={link.key}>{link.title}</li>;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;