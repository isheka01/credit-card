import React from 'react'
import ccback from '../images/ccback.png'
import './CCback.css'
function CCback(props) {
  return (
    <div className='ccback'>
        <img src= {ccback} alt='ccback' />
        <p>{props.cvc}</p>
    </div>
  )
}

export default CCback