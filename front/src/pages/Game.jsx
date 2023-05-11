import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../components/Card'

import './Game.css'

const Game = () => {
    const[country, setCountry] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:3030/api/countries')
            .then((res) => setCountry(res.data))
    },[])
  return (
    <div>
        <Card {...country} />
        <img src={country.img} alt="" />
    </div>
  )
}

export default Game