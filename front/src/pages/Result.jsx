import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Result.css'

const score = 200



const Result = (props) => {

    const [perfectLuggage, setPerfectLuggage] = useState([])

    const location = useLocation();
    const choice = location.state.userChoice
    const country = location.state.country.name

    console.log(choice);
    console.log(perfectLuggage);

    const finalScore = (choice, perfectLuggage ) => {

        

    }

    useEffect(()=>{

        axios.get(`http://localhost:3030/api/luggage/${country}`)
            .then((res) => setPerfectLuggage(res.data))

    },[])


  return (
    <div className='results-page'>
      <div className='score-page'>
        <h1>Ton score est de :</h1>
        <h1>{score}</h1>
      </div>
      <Link to='/'><button className='result' type="submit" >Faire une autre valise</button></Link>
    </div>
  )
}

export default Result