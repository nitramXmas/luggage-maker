import React, { useState } from 'react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = ({ onUserClick }) => {
 
  const handleClick = () => onUserClick ();

  return (
    <div className="navbar">
      <Logo />
      <div className="title">
        <h1>Luggage Maker</h1>
        <h2>Dans ma valise, il y a ...</h2>
      </div>
      <p className='user-icon' onClick={handleClick}>USER</p>
    </div>
  );
};

export default Navbar;
