
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Capy from '../assets/img/capy.png';
import './Navbar.css';

const Navbar = ({ onUserClick }) => {
 
  const handleClick = () => onUserClick ();

  return (
    <div className="navbar">
      <Logo />
      <div className="title">
        <h1>Luggage Maker</h1>
        <h2>Dans ma valise, il me faut...</h2>
      </div>
      <div className='user-picture' onClick={handleClick}>
        <img  src={Capy} alt="user picture" />
        </div>
    </div>
  );
};

export default Navbar;
