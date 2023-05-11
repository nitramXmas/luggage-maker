import Valise from '../assets/img/Luggage.png';
import Navbar from '../components/Navbar'
import Home from '../assets/img/Home-bg.png';
import axios from 'axios';
import './Luggage.css';
import { useEffect, useState } from 'react';

const Luggage = () => {

    const[country, setCountry] = useState({})


    useEffect(()=>{
        axios.get('http://localhost:3030/api/countries')
            .then((res) => setCountry(res.data) )
    },[])

  return (
  <div className='home'>
    <div className='background'>
      <img src={Home} alt="mapmonde" />
    </div>
    <div className='luggage'>
      <img src={Valise} alt="valise" />
    </div>
    <button className='play' type="submit">Faire ma valise</button>
  </div>
)};

export default Luggage;
