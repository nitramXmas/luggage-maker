import React from 'react'
import './Card.css'

const Card = ({name, flags, alt, region, capital}) => {

  return (
    <div className='card'>
        <div className="titleCard">
            <img className='flag' src={`${flags}`} alt={`${alt}`} />
            <h1>{name}</h1>
            <h2>{capital}</h2>
        <h2>{region}</h2>
        </div>
    </div>
  )
}

export default Card