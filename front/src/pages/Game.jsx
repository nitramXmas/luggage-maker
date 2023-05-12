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
        <div className='main'>
            <div className="objectsButtons">
                <button className='play' type="submit" >Vetements</button>
                <button className='play' type="submit" >Divers</button>
                <button className='play' type="submit" >Specifiques</button>
            </div>
            <img className='luggage'  src={luggage} alt="" />
        </div>
        <div className='buttons'>
            <Link to='/'><button className='play' type="submit" >RESET</button></Link>
            <Link to='/result'><button className='play' type="submit" >SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Game