import UserProfile from '../pages/UserProfile';

import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="title">
        <h1>Luggage Maker</h1>
        <h2>Dans ma valise, il y a...</h2>
      </div>
      <p>user</p>
    </div>
  );
};

export default Navbar;
