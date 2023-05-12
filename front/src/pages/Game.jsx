import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import luggage from '../assets/img/valise.png'

import './Game.css'

const Game = () => {
    const[country, setCountry] = useState({});
    
    const[isVetement,setIsVetement] = useState(false);
    const[isDivers,setIsDivers] = useState(false);
    const[isSpecifique,setIsSpecifique] = useState(false);

    const handleVetements = () => {
        setIsVetement(!isVetement)
    }

    const handleDivers = () => {
        setIsDivers(!isDivers)
    }

    const handleSpecifique = () => {
        setIsSpecifique(!isSpecifique)
    }

    useEffect(()=>{
        axios.get('http://localhost:3030/api/countries')
            .then((res) => setCountry(res.data))
    },[])
  return (
    <div className='game' style={{backgroundImage: `url(${country.img})`}}>
        <Card {...country} />
        <div className='main'>
            <div className="objectsButtons">
                <button className='play' type="submit" onClick={handleVetements}>Vetements</button>
                { isVetement && <div className='choice vetement' > fringues </div> }
                <button className='play' type="submit" onClick={handleDivers}>Divers</button>
                { isDivers && <div className='choice divers'> Diverserie</div> }
                <button className='play' type="submit" onClick={handleSpecifique}>Specifiques</button>
                { isSpecifique && <div className='choice divers' > specifiquerie </div> }
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