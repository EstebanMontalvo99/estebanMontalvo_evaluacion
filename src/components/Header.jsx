import React from 'react';
import "../styles/header.css";
const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src="/actuaria.jpg" alt="Actuaria logo" />
      <div className='orange__line'></div>
    </header>
  );
};

export default Header;