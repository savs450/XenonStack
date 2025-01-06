import React from 'react'
import "./Card.css"
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Card(props) {
  return (
    <div className='card_container'>
        <p>{props.text}</p>
        <p>&#x2197;</p>
    </div>
  )
}

export default Card