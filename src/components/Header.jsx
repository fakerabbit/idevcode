import React from 'react';
import logo from '../assets/images/idevcodeLogo.png';

const Header = ({links}) => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/"><img src={logo} alt="logo" width='138' height='40' /></a>
      </div>
      <div className="header-right">
        <ul>
          {links.map(function(link){
            return <a href={link.ref} key={link.key}><li>{link.title}</li></a>;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;