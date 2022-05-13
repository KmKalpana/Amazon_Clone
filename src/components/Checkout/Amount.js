import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../Reducer'
import { useStateValue } from '../../StateProvide'
import './amount.css'
const Amount = () => {
  const [{ basket }] = useStateValue()
  return (
    <div className='amount'>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>Subtotal ({basket.length} Items ) : <strong>{value}</strong></p>
            <small className='amount-gift'>
              <input type='checkbox' className='check-box' />
              This order contains a gift
            </small>
          </div>
        )}
        value={getBasketTotal(basket)}
        displayType='text'
        thousandSeparator={true}
        prefix='$'
      />
      <button className='Checkout_btn'>Proceed to Checkout</button>
    </div>
  )
}
export default Amount
