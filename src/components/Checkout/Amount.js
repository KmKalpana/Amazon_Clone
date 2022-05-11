import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './amount.css'
const Amount = () => {
  return (
    <div className='amount'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Subtotal (0 Items ) : <strong>{value}</strong></p>
            <small className='amount-gift'>
              <input type='checkbox' className='check-box' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType='text'
        prefix='$'
      />
      <button className='Checkout_btn'>Proceed to Checkout</button>
    </div>
  )
}
export default Amount
