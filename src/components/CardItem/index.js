import React from 'react'
import './index.css'

const CardItem = ({id, title, description, imgUrl, className}) => {
  return (
    <li className={`card ${className}`} key={id}>
      <img src={imgUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </li>
  )
}

export default CardItem
