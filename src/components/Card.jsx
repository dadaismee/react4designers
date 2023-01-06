import React from 'react'
import "./card.css"

const Card = ({ title, text, img }) => {
  return (
    <div className='card'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card