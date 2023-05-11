import Valise from '../assets/img/Luggage.png';
import Home from '../assets/img/Home-bg.png';
import Game from './Game';
import './Luggage.css';

const Luggage = () => {

    const callGame = () => {
        return <Game />
    }

  return (
  <div className='home'>
    <div className='background'>
      <img src={Home} alt="mapmonde" />
    </div>
    <div className='luggage'>
      <img src={Valise} alt="valise" />
    </div>
    <button className='play' type="submit" onSubmit={callGame}>Faire ma valise</button>
  </div>
)};

export default Luggage;
