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
    const [userChoice, setUserChoice] = useState([]);
    const [isHover, setIsHover] = useState(false);

    const luggageSize = 5

    const handleDrop = (item) => {
        if(userChoice.length < luggageSize )  {
                setUserChoice([...userChoice, item])
        } else {
            alert('La valise est pleine')
        }
    }

    console.log(userChoice)
  
    const handleVetements = () => {
        setIsVetement(!isVetement)
    }

    const handleDivers = () => {
        setIsDivers(!isDivers)
    }

    const handleSpecifique = () => {
        setIsSpecifique(!isSpecifique)
    }

    const [objects, setObjects] = useState([])

    const lists = (value) => (

    <ul className='itemCountainer'>
        {objects &&
        objects.filter((object)=>(object.type === value))
                .map((el) => (
        <li className='item' 
            key={el.id}
            onDragEnd={() => handleDrop(el)}
            >{el.name}
      
        </li>   
        ))
        }
    </ul>

    )

    useEffect(()=>{
        axios.get('http://localhost:3030/api/countries')
            .then((res) => setCountry(res.data))
    },[])

    useEffect(()=>{
        axios.get('http://localhost:3030/api/objects')
            .then((res) => setObjects(res.data))
    },[])

  return (
    <div className='game' style={{backgroundImage: `url(${country.img})`}}>
        <Card {...country} />
        <div className='main'>
            <div className="objectsButtons">
                <button className='play' type="submit" onClick={handleVetements}>Vetements</button>
                { isVetement && 
                    <div className='choice vetement' >
                      {lists('clothes')}
                    </div> }
                <button className='play' type="submit" onClick={handleDivers}>Divers</button>
                { isDivers && <div className='choice divers'>
                        {lists('divers')}
                    </div> }
                <button className='play' type="submit" onClick={handleSpecifique}>Specifiques</button>
                { isSpecifique && <div className='choice divers' > 
                    {lists('countrySpec')}
                 </div> }
            </div>
            <img className='luggage'  src={luggage} alt="" onDragOver={()=> setIsHover(true)} onDragLeave={()=> setIsHover(false)} />
        </div>
        <div className='buttons'>
            <Link to='/'><button className='play' type="submit" >RESET</button></Link>
            <Link to='/result'state ={{userChoice : userChoice, country : country}} ><button className='play' type="submit" >SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Game

