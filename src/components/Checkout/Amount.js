import React from 'react'
import CurrencyFormat from 'react-currency-format'
const Amount = () => {
  return (
    <div className='Amount'>
      <CurrencyFormat
        renderText={(value) => (
          <p>Subtotal (<strong>{value}</strong>)</p>
        )}
        decimalScale={2}
        value={0}
        displayType='text'
        prefix='$'
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}
export default Amount
