import React from 'react'
import './checkout.css'
import image from './image.jpg'
import Amount from './Amount'
const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='left'>
        <img src={image} alt='amazon-logo' className='checkout_ad' />
        <div>
          <h1 className='checkout_title'>Your Shopping Basket</h1>
        </div>
      </div>
      <div className='right'>
        <Amount />
      </div>

    </div>
  )
}

export default Checkout
