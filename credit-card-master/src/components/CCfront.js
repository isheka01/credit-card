import React from 'react'
import logo from '../images/ccfront.png'
import './CCfront.css'

function CCfront(props) {
  return (
    <div className='card'>
        <img src={logo} alt='ccfront'/>
        <div className='circles'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        </div>
        <p className='card-number'>{props.cardNumber}</p>
        <div className='bottom'>
        <p className='name'>{props.cardHolder}</p>
        <p className='date'>{props.date}</p>
        </div>
    </div>
  )
}

export default CCfront