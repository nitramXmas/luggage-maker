import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="title">
        <h1>Luggage Maker</h1>
        <h2>Dans ma valise, il me faut...</h2>
      </div>
        <div>USER</div>
    </div>
  );
};

export default Navbar;
