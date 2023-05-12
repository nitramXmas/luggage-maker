import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

import './Game.css'

const Game = () => {
    const[country, setCountry] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:3030/api/countries')
            .then((res) => setCountry(res.data))
    },[])
  return (
    <div className='game'>
        <Card {...country} />
        <img className='bg-image' src={country.img} alt="" />
        <div className='buttons'>
            <Link to='/'><button className='reset' type="submit" >RESET</button></Link>
            <Link to='/result'><button className='submitLuggage' type="submit" >SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Game