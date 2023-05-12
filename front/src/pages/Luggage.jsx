import Valise from '../assets/img/Luggage.png';
import Home from '../assets/img/Home-bg.png';
import './Luggage.css';
import { Link } from 'react-router-dom';

const Luggage = () => {

  return (
  <div className='home'>
    <div className='background'>
      <img src={Home} alt="mapmonde" />
    </div>
    <div className='luggage'>
      <img src={Valise} alt="valise" />
    </div>
    <Link to='game'><button className='play' type="submit" >Faire ma valise</button></Link>
  </div>
)};

export default Luggage;
