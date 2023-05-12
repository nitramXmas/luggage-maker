import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Result.css'

const Result = (props) => {

    const [perfectLuggage, setPerfectLuggage] = useState([])

    const location = useLocation();
    const choice = location.state.userChoice
    const country = location.state.country.name

    let score = 0



        for(let i = 0; i < choice.length; i ++ ){
            for(let j = 0; j < perfectLuggage.length; j ++){
                if(choice[i].id === perfectLuggage[j].id) {
                    score += choice[i].points
                }
            }
        

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