
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Capy from '../assets/img/Capy.png';
import './Navbar.css';

const Navbar = () => {
  

  return (
    <div className="navbar">
      <Link to='/'><Logo /></Link>
      <div className="title">
        <h1>Luggage Maker</h1>
        <h2>Dans ma valise, il me faut...</h2>
      </div>
      <div className='picture'>
        <Link to='/profile'><img src={Capy} alt="user picture" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
