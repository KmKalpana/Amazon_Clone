import React from 'react'
import './data.css'
const Data = ({ content, image, price, reviews }) => {
  return (
    <div className='product'>
      <div className='title'>
        <p> {content}</p>
      </div>
      <div className='price'><small>₹</small>
        <strong>{price}</strong>
      </div>
      <div className='review'>{Array(reviews).fill().map((_, index) => <span key={index}>🌟</span>)}
      </div>
      <img className='images' src={image} />
      <button className='btn'>Add to Basket</button>
    </div>
  )
}

export default Data
