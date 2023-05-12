import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import luggage from '../assets/img/valise.png'

import './Game.css'

const Game = () => {
    const[country, setCountry] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:3030/api/countries')
            .then((res) => setCountry(res.data))
    },[])
  return (
    <div className='game' style={{backgroundImage: `url(${country.img})`}}>
        <Card {...country} />
        <img className='luggage'  src={luggage} alt="" />
        <div className='buttons'>
            <Link to='/'><button className='play' type="submit" >RESET</button></Link>
            <Link to='/result'><button className='play' type="submit" >SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Game