import { Link } from 'react-router-dom'

import './Result.css'

const score = 200


const Result = () => {
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