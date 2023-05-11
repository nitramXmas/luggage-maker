import Logo from './Logo';
import Capy from '../assets/img/capybara-user.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="title">
        <h1>Luggage Maker</h1>
        <h2>Dans ma valise, il y a ...</h2>
      </div>
      <div className='user-picture'>
        <img src={Capy} alt="capybara" />
      </div>
    </div>
  );
};

export default Navbar;
