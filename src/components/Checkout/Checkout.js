import React from 'react'
import './checkout.css'
import image from './image.jpg'
import Amount from './Amount'
const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='left'>
        <img src={image} className='image' />
        <h1>Checkout your List</h1>
      </div>
      <div className='right'>
        <Amount />
      </div>

    </div>
  )
}

export default Checkout
